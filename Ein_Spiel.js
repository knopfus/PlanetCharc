class Ein_Spiel {
    constructor(Spielaufbau) {
        this.Portale = {};
        for (let Portal_Name of Spielaufbau.Portale) {
            let Portal = new Ein_Portal(Portal_Name, this);
            this.Portale[Portal_Name] = Portal;
        }

        this.Orte = {};
        this.Orte_Kürzel = {};
        for (let Ort_Name in Spielaufbau.Orte) {
            let Eigenschaften = Spielaufbau.Orte[Ort_Name];
            let Ort = new Ein_Ort(Ort_Name, Eigenschaften, this);
            this.Orte[Ort_Name] = Ort;

            if (Eigenschaften.Kürzel) {
                this.Orte_Kürzel[Eigenschaften.Kürzel] = Ort;
            }
        }

        for (let Ort_Name in Spielaufbau.Orte) {
            let Eigenschaften = Spielaufbau.Orte[Ort_Name];
            let Ort = this.Orte[Ort_Name];

            for (let Portal_Name in Eigenschaften.Portale) {
                let Portal_Eigenschaften = Eigenschaften.Portale[Portal_Name];
                let zu = this.Orte[Portal_Eigenschaften.zu];
                Ort.Portal_hinzufügen(Portal_Name, { zu: zu, links: Portal_Eigenschaften.links, oben: Portal_Eigenschaften.oben, breit: Portal_Eigenschaften.breit, hoch: Portal_Eigenschaften.hoch });
            }

            for (let Ort_Name in Eigenschaften.Eintritte) {
                let Wegpunkt_Nummer = Eigenschaften.Eintritte[Ort_Name];
                let Wegpunkt = Ort.Weg.Pfade[0][Wegpunkt_Nummer];
                Ort.Eintritt_hinzufügen(Ort_Name, Wegpunkt);
            }
        }

        this.Gegenstände = {};
        for (let Gegenstand_Name in Spielaufbau.Gegenstände) {
            let Eigenschaften = Spielaufbau.Gegenstände[Gegenstand_Name];

            let Gegenstand = new Ein_Gegenstand(Gegenstand_Name, Eigenschaften, this);
            this.Gegenstände[Gegenstand_Name] = Gegenstand;
            
            if ( Eigenschaften.in ) {
                Gegenstand.platziere_in(this.Orte[Eigenschaften.in]);
            }
        }

        this.Monster = {};
        for (let Monster_Name in Spielaufbau.Monster) {
            let Eigenschaften = Spielaufbau.Monster[Monster_Name];

            let Monster = new Ein_Monster(Monster_Name, Eigenschaften, this);
            this.Monster[Monster_Name] = Monster;
        }

        this.Aktionen = {};
        for (let Aktion_Name in Spielaufbau.Aktionen) {
            let Eigenschaften = Spielaufbau.Aktionen[Aktion_Name];

            let Aktion = new Eine_Aktion(Aktion_Name, Eigenschaften, this);
            this.Aktionen[Aktion_Name] = Aktion;
        }

        this.Spieler = new Ein_Spieler(this);

        let self = this;
        document.getElementById("Ort-Bild").onclick = function(event) {
            if (self.aktive_Aktion) {
                self.aktive_Aktion.ausführen_auf_Ort(self.Ort, event);
            }
        };

        document.onkeydown = function(event) {
            if (event.key == "g") {
                self.Entwickler_Modus = !self.Entwickler_Modus;

                self.Ort.Weg.anzeigen();
                for (let Aktion_Name in self.Aktionen) {
                    self.Aktionen[Aktion_Name].anzeigen_falls_Entwickler_Modus();
                }
            }
            if (event.key in self.Orte_Kürzel) {
                self.gehe_zu_Ort(self.Orte_Kürzel[event.key]);
            }
        }
    }

    starten() {
        if (this.läuft) return; // Man kann nur einmal starten

        this.läuft = true;

        this.Lebenspunkte = Spielaufbau.Spieler.Lebenspunkte;
        this.Kraft = Spielaufbau.Spieler.Kraft;
        this.aktive_Aktion = null;

        this.Ort = null;
        this.gehe_zu_Ort(this.Orte[Spielaufbau.Spieler.in]);

        let self = this;
        this.Spieluhr = window.setInterval(function() { self.Spieluhr_tickt(); }, 10);

        // Musik abspielen beim ersten Klick
        document.onclick = function() {
            document.getElementById("musik").play();
        }
    }

    gehe_zu_Ort(Ort) {
        if (this.Ort) {
            this.Ort.verlassen();
        }

        let alter_Ort_Name = "Start";
        if (this.Ort) {
            alter_Ort_Name = this.Ort.Name;
        }
        
        this.Ort = Ort;
        this.Ort.betreten();

        let Eintritt_Wegpunkt = this.Ort.Weg.Eintritte[alter_Ort_Name];
        this.Spieler.betrete_Ort_bei(Eintritt_Wegpunkt);

        for (var Monster_Name in this.Monster) {
            let Monster = this.Monster[Monster_Name];
            Monster.gehe_in_zufälligen_Ort();
        }
    }

    Spieler_bekämpfen(Kraft) {
        this.Lebenspunkte_verändern(- Kraft / 100);
    }

    Lebenspunkte_verändern(Differenz) {
        if (this.ist_unsterblich) return;

        this.Lebenspunkte = this.Lebenspunkte + Differenz;
        this.zeige_Lebenspunkte_an();
        if (this.Lebenspunkte <= 0) {
            this.Game_over();
        }
    }

    zeige_Lebenspunkte_an() {
        let Lebenspunkte_div = document.getElementById("Lebenspunkte");
    
        Lebenspunkte_div.style.width = this.Lebenspunkte + "%";
    
        var max_color = 200;
        var g = this.Lebenspunkte / 100 * (2 * max_color);
        var r = 2 * max_color - g;
        var b = 0;
        if (g > max_color) { g = max_color; }
        if (r > max_color) { r = max_color; }
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    
        Lebenspunkte_div.style.backgroundColor = rgb;
    }

    unsterblich() {
        this.ist_unsterblich = true;
    }
    
    Game_over() {
        window.clearInterval(this.Spieluhr);
        document.getElementById("Game_Over").style.visibility = "visible";
    }

    Spieluhr_tickt() {
        for (var Monster_Name in this.Monster) {
            let Monster = this.Monster[Monster_Name];
            Monster.Spieluhr_tickt();
        }

        this.Spieler.Spieluhr_tickt();
    }
}