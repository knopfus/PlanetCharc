class Ein_Spiel {
    constructor(Spielaufbau) {

        this.Orte = {};
        for (let Ort_Name in Spielaufbau.Orte) {
            let Ort = new Ein_Ort(Ort_Name);
            this.Orte[Ort_Name] = Ort;
        }
        for (let Ort_Name in Spielaufbau.Orte) {
            let Eigenschaften = Spielaufbau.Orte[Ort_Name];

            let Ort = this.Orte[Ort_Name];
            let Ziel_Ort = this.Orte[Eigenschaften.zu];
            Ort.zu(Ziel_Ort);
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

        this.Aktionen = {};
        for (let Aktion_Name in Spielaufbau.Aktionen) {
            let Eigenschaften = Spielaufbau.Aktionen[Aktion_Name];

            let Aktion = new Eine_Aktion(Aktion_Name, Eigenschaften, this);
            this.Aktionen[Aktion_Name] = Aktion;
        }

        let self = this;
        document.getElementById("Ort-Bild").onclick = function() {
            self.aktive_Aktion.ausführen_auf_Ort();
        };

        this.Ort = null;
        this.gehe_zu_Ort(this.Orte[Spielaufbau.Ich.in]);

        this.aktive_Aktion = null;
    }

    verlasse_Ort(Ort) {
        for (let Gegenstand of Ort.Gegenstände) {
            Gegenstand.verstecken();
        }
    }

    gehe_zu_Ort(Ort) {
        if (this.Ort) {
            this.verlasse_Ort(this.Ort);
        }

        this.Ort = Ort;
        document.getElementById("Status-Ort").innerText = Ort.Name;
        document.getElementById("Ort-Bild").src = "Orte/" + Ort.Name + ".png?nocache=" + Date.now();

        for (let Gegenstand of Ort.Gegenstände) {
            Gegenstand.anzeigen();
        }
    }

    gehe_weiter() {
        this.gehe_zu_Ort(this.Ort.Ziel_Ort);
    }
}