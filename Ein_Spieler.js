class Ein_Spieler {
    constructor(Spiel) {
        this.Spiel = Spiel;

        // Das HTML Element vorbereiten
        this.Spieler_div = document.getElementById("Spieler");

        this.ANZAHL_SCHRITTE = 50;
    }

    gehe_zu(Wegpunkt) {
        if (!Wegpunkt.Eigenschaften) return; // Versuche nicht zu einem nicht existierenden Wegpunkt zu gehen

        if (!this.Wegpunkt) {
            // Noch kein Wegpunkt - Keine Animation

            let Koordinaten = {
                links: Wegpunkt.Eigenschaften.links - 0.5 * Wegpunkt.Eigenschaften.zoom,
                oben: Wegpunkt.Eigenschaften.oben - Wegpunkt.Eigenschaften.zoom,
                breit: Wegpunkt.Eigenschaften.zoom,
                hoch: Wegpunkt.Eigenschaften.zoom
            };

            this.platziere_bei(Koordinaten);
            this.Wegpunkt = Wegpunkt;
            return;
        }

        this.Ziel_Wegpunkt = Wegpunkt;
        let Differenz = this.Ziel_Wegpunkt.Nummer - this.Wegpunkt.Nummer;
        if (Differenz == -1 || Differenz == 1) { // || bedeutet "oder"
            this.nächster_Wegpunkt = Wegpunkt;
        } else {
            let Vorzeichen = Math.sign(Differenz);
            let nächster_Wegpunkt_Nummer = this.Wegpunkt.Nummer + Vorzeichen;
            this.nächster_Wegpunkt = this.Spiel.Wegpunkte[nächster_Wegpunkt_Nummer];
        }

        let Koordinaten = {
            links: this.nächster_Wegpunkt.Eigenschaften.links - 0.5 * this.nächster_Wegpunkt.Eigenschaften.zoom,
            oben: this.nächster_Wegpunkt.Eigenschaften.oben - this.nächster_Wegpunkt.Eigenschaften.zoom,
            breit: this.nächster_Wegpunkt.Eigenschaften.zoom,
            hoch: this.nächster_Wegpunkt.Eigenschaften.zoom
        };

        let Schritte = this.ANZAHL_SCHRITTE;
        this.Schritte = Schritte;
        this.Schritt_Richtung = {
            nach_rechts: (Koordinaten.links - this.Koordinaten.links) / Schritte,
            nach_unten: (Koordinaten.oben - this.Koordinaten.oben) / Schritte,
            verbreitern: (Koordinaten.breit - this.Koordinaten.breit) / Schritte,
            erhöhen: (Koordinaten.hoch - this.Koordinaten.hoch) / Schritte
        };
    }

    betrete_Ort_bei(Wegpunkt) {
        this.Wegpunkt = null;
        this.Koordinaten = null;
        this.Schritte = 0;

        this.gehe_zu(Wegpunkt);
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

            if (this.Schritte == 0) {
                // Am nächsten Wegpunkt angekommen
                this.Wegpunkt = this.nächster_Wegpunkt;
                if (this.nächster_Wegpunkt == this.Ziel_Wegpunkt) {
                    // Am Ziel-Wegpunkt angekommen -> Falls Portal, Ort wechseln
                    if (this.Wegpunkt.Eigenschaften.Portal) {
                        let Ort = this.Spiel.Orte[this.Wegpunkt.Eigenschaften.Portal];
                        this.Spiel.gehe_zu_Ort(Ort);
                    }
                } else {
                    // Noch nicht am Ziel-Wegpunkt angekommen -> Nochmals "gehe_zu" machen, dort wird
                    // der nächste Wegpunkt ermittelt.
                    this.gehe_zu(this.Ziel_Wegpunkt);
                }
            }
        }
    }
}
