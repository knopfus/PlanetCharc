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
        }

        this.Sprechblase = new Eine_Sprechblase();

        this.Gegenstände = {};
        for (let Gegenstand_Name in Spielaufbau.Gegenstände) {
            let Eigenschaften = Spielaufbau.Gegenstände[Gegenstand_Name];

            if (Eigenschaften.mehrere) {
                for (let i = 0; i < Eigenschaften.mehrere.length; i++) {
                    let Eigenschaften_Stück = { ...Eigenschaften, ...Eigenschaften.mehrere[i] };
                    delete Eigenschaften_Stück.mehrere;
                    let Gegenstand = new Ein_Gegenstand(Gegenstand_Name, Eigenschaften_Stück, this);
                    this.Gegenstände[Gegenstand_Name + i] = Gegenstand;
                    
                    if ( Eigenschaften_Stück.in ) {
                        Gegenstand.platziere_in(this.Orte[Eigenschaften_Stück.in]);
                    }    
                }
            } else {
                let Gegenstand = new Ein_Gegenstand(Gegenstand_Name, Eigenschaften, this);
                this.Gegenstände[Gegenstand_Name] = Gegenstand;
                
                if ( Eigenschaften.in ) {
                    Gegenstand.platziere_in(this.Orte[Eigenschaften.in]);
                }    
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

        this.Mechaniken = {};
        for (let Mechanik_Name in Spielaufbau.Mechaniken) {
            let Eigenschaften = Spielaufbau.Mechaniken[Mechanik_Name];
            let Mechanik = new Eine_Mechanik(Mechanik_Name, Eigenschaften, this);
            this.Mechaniken[Mechanik_Name] = Mechanik;
        }

        this.Spieler = new Ein_Spieler(this, Spielaufbau.Spieler);

        let self = this;
        document.getElementById("Ort-Bild").onclick = function(event) {
            if (self.aktive_Aktion) {
                self.aktive_Aktion.ausführen_auf_Ort(self.Ort, event);
            }
        };
        document.getElementById("Ort-Bild").onmousemove = function(event) {
            if (self.aktive_Aktion && self.aktive_Aktion.hover) {
                self.aktive_Aktion.ausführen_hover_auf_Ort(self.Ort, event);
            }
        };

        document.onkeydown = function(event) {
            if (event.key == "§") {
                self.Entwickler_Modus = !self.Entwickler_Modus;
                document.getElementById("Status").style.zIndex = self.Entwickler_Modus ? "100000" : "-1";

                self.Ort.Weg.anzeigen();
                for (let Portal_Name in self.Portale) {
                    self.Portale[Portal_Name].anzeigen();
                }
                for (let Aktion_Name in self.Aktionen) {
                    self.Aktionen[Aktion_Name].anzeigen_falls_Entwickler_Modus();
                }
            }

            if (event.key == "$") {
                self.Spieler.Lebenspunkte_wiederherstellen();
            }
            
            if (event.key == "ä") {
                self.Spieler.Kraft = self.Spieler.Kraft + 1000;
            }

            if (event.key == "1") {
                self.Gegenstände.Mondblume0.nehmen();
            }

            if (event.key == "2") {
                self.Gegenstände.Holz.nehmen();
            }

            if (event.key == "3") {
                self.Gegenstände.Klauenspringer_Zahn.nehmen();
            }

            if (event.key == "4") {
                self.Gegenstände.Lichtkristall.nehmen();
            }

            if (event.key == "5") {
                self.Gegenstände.Miau.nehmen();
            }

            if (event.key == "6") {
                self.Gegenstände.Dokument.nehmen();
            }
            
            if (event.key == "7") {
                self.Gegenstände.Zerbrochene_Vase.nehmen();
            }

            if (event.key == "8") {
                self.Gegenstände.Reparierte_Vase.nehmen();
            }
            
            if (event.key == "9") {
                self.Gegenstände.Gefüllte_Vase.nehmen();
            }

            if (event.key == "0") {
                self.Gegenstände.Gefüllte_Vase_mit_Licht.nehmen();
            }

            if (event.key in self.Orte_Kürzel) {
                self.gehe_zu_Ort(self.Orte_Kürzel[event.key]);
            }
        }
    }

    starten() {
        if (this.läuft) return; // Man kann nur einmal starten

        this.läuft = true;

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

    Wasserfall_teilen() {
        spiele_Sound_Effect("Wasserfall_teilen");
        this.Gegenstände.Lavawelt_Mechanik_Kreuz.ein();
        this.Orte.Fluss.Weg.Portal_ersetzen("Quelle_des_Lichts", "offene_Quelle_des_Lichts");
        this.Orte.Lavawelt.Weg.Portal_ersetzen("Quelle_des_Lichts", "offene_Quelle_des_Lichts");
        this.Spieler.feststellen("Interessant, jetzt leuchtet plötzlich auch das Kreuz auf. Was soll das wohl bedeuten? Ich sehe nicht, dass sich irgendetwas getan hätte... Jedenfalls nicht in Sichtweite... Aber höre ich da was?");
    }

    Quelle_des_Lichts_aktivieren() {
        this.Orte.Fluss.Weg.Portal_ersetzen("offene_Quelle_des_Lichts", "aktivierte_Quelle_des_Lichts");
        this.Orte.Lavawelt.Weg.Portal_ersetzen("offene_Quelle_des_Lichts", "aktivierte_Quelle_des_Lichts");
        this.Orte.Grotte_des_Lichts.Weg.Portal_ersetzen("offene_Quelle_des_Lichts", "aktivierte_Quelle_des_Lichts");
        spiele_Sound_Effect("Quelle_des_Lichts_aktivieren");
    }

    zeige_Lebenspunkte_an() {
        let Lebenspunkte_div = document.getElementById("Lebenspunkte");
    
        Lebenspunkte_div.style.width = this.Spieler.Lebenspunkte + "%";
    
        var max_color = 200;
        var g = this.Spieler.Lebenspunkte / 100 * (2 * max_color);
        var r = 2 * max_color - g;
        var b = 0;
        if (g > max_color) { g = max_color; }
        if (r > max_color) { r = max_color; }
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    
        Lebenspunkte_div.style.backgroundColor = rgb;
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