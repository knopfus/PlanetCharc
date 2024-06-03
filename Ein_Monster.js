class Ein_Monster {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Spiel = Spiel;
        this.Lebenspunkte = Eigenschaften.Lebenspunkte;
        this.Kraft = Eigenschaften.Kraft;

        // Die HTML Elemente für das Monster vorbereiten
        let Monster_Vorlage = document.getElementById("Monster_Vorlage");
        let Monster_div = Monster_Vorlage.cloneNode(true);

        Monster_div.setAttribute("id", "Monster_" + Name);
        this.Monster_div = document.getElementById(Name);

        let self = this;
        Monster_div.onclick = function(event) {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Monster(self, event);
            }
        };

        let Monster_img = Monster_div.getElementsByTagName("img")[0];
        Monster_img.setAttribute("src", "Gegner/" + Name + ".png?nocache=" + Date.now());

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Monster_div);

        this.Monster_div = Monster_div;

        // Sich merken, wo das Monster auftauchen kann
        let Orte = Eigenschaften.Orte;
        this.Orte = [];

        for (var Ort_Eigenschaften of Orte) {
            let Ort_Name = Ort_Eigenschaften.in;
            let Ort = this.Spiel.Orte[Ort_Name];

            this.Orte.hinzufügen({
                in: Ort,
                links: Ort_Eigenschaften.links,
                oben: Ort_Eigenschaften.oben,
                breit: Ort_Eigenschaften.breit,
                hoch: Ort_Eigenschaften.hoch,
                gedreht: Ort_Eigenschaften.gedreht
            });
        }

        // Sich merken, welchen Gegenstand es als Belohnung geben kann
        if (Eigenschaften.Belohnung) {
            this.Gegenstand_als_Belohnung = this.Spiel.Gegenstände[Eigenschaften.Belohnung];
        }
    }

    /**
     * Aus den möglichen Orten dieses Monsters einen zufälligen auswählen und
     * das Monster auftauchen lassen, falls der Spieler gerade am gleichen Ort ist.
     */
    gehe_in_zufälligen_Ort() {
        if (this.tot()) { return; } // Code gar nicht erst ausführen

        let Anzahl_mögliche_Orte = this.Orte.length;
        let index_zufälliger_Ort = Math.floor(Math.random() * Anzahl_mögliche_Orte);
        let Eigenschaften = this.Orte[index_zufälliger_Ort];
        
        this.Ort = Eigenschaften.in;
        if (Eigenschaften.links)    { this.Monster_div.style.left         = Eigenschaften.links + "px"; }
        if (Eigenschaften.oben)     { this.Monster_div.style.top          = Eigenschaften.oben + "px"; }
        if (Eigenschaften.breit)    { this.Monster_div.style.width        = Eigenschaften.breit + "px"; }
        if (Eigenschaften.hoch)     { this.Monster_div.style.height       = Eigenschaften.hoch + "px"; }
        if (Eigenschaften.gedreht)  { this.Monster_div.style.transform    = "rotate(" + Eigenschaften.gedreht + "deg)"; }

        if (this.Spiel.Ort == this.Ort) {
            this.tauche_auf();
        } else {
            this.verschwinde();
        }
    }

    /**
     * Das Monster auftauchen und angreifen lassen.
     */
    tauche_auf() {
        if (this.tot()) { return; } // Code gar nicht erst ausführen

        this.Monster_div.style.visibility = "visible";
        spiele_Sound_Effect(this.Name);
    }

    verschwinde() {
        this.Monster_div.style.visibility = "hidden";
    }

    bekämpfen(Spieler_Kraft) {
        if (this.tot()) return; // Code gar nicht erst ausführen

        this.Lebenspunkte = this.Lebenspunkte - Spieler_Kraft;
        if (this.tot()) {
            spiele_Sound_Effect("aargh");
            this.verschwinde();

            if (this.Gegenstand_als_Belohnung) {
                this.Gegenstand_als_Belohnung.platziere_in(this.Ort);
            }
        } else {
            spiele_Sound_Effect("autsch");
        }
    }

    tot() {
        return this.Lebenspunkte <= 0;
    }

    lebendig() {
        return !this.tot();
    }

    Spieluhr_tickt() {
        if (this.tot()) return; // Code gar nicht erst ausführen

        if (this.Ort == this.Spiel.Ort) {
            this.Spiel.Spieler.bekämpfen(this.Kraft);
        }
    }
}
