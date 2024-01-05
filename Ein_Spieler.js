class Ein_Spieler {
    constructor(Spiel) {
        this.Spiel = Spiel;

        // Das HTML Element vorbereiten
        this.Spieler_div = document.getElementById("Spieler");
    }

    gehe_zu(Koordinaten) {
        if (!this.Koordinaten) {
            // Noch keine Koordinaten - Keine Animation
            this.platziere_bei(Koordinaten);
            return;
        }

        let Schritte = 100;
        this.Schritte = Schritte;
        this.Schritt_Richtung = {
            nach_rechts: (Koordinaten.links - this.Koordinaten.links) / Schritte,
            nach_unten: (Koordinaten.oben - this.Koordinaten.oben) / Schritte,
            verbreitern: (Koordinaten.breit - this.Koordinaten.breit) / Schritte,
            erhöhen: (Koordinaten.hoch - this.Koordinaten.hoch) / Schritte
        };
    }

    platziere_bei(Koordinaten) {
        this.Koordinaten = Koordinaten;
        this.Spieler_div.style.left = Koordinaten.links + "px";
        this.Spieler_div.style.top = Koordinaten.oben + "px";
        this.Spieler_div.style.width = Koordinaten.breit + "px";
        this.Spieler_div.style.height = Koordinaten.hoch + "px";
    }

    Spieluhr_tickt() {
        if (this.Schritte) {
            let Koordinaten = {
                links: this.Koordinaten.links + this.Schritt_Richtung.nach_rechts,
                oben: this.Koordinaten.oben + this.Schritt_Richtung.nach_unten,
                breit: this.Koordinaten.breit + this.Schritt_Richtung.verbreitern,
                hoch: this.Koordinaten.hoch + this.Schritt_Richtung.erhöhen
            }

            this.Schritte -= 1;
            this.platziere_bei(Koordinaten);
        }
    }
}
