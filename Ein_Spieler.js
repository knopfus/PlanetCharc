class Ein_Spieler {
    constructor(Spiel, Eigenschaften) {
        this.Spiel = Spiel;

        // Das HTML Element vorbereiten
        this.Spieler_div = document.getElementById("Spieler");

        this.ANZAHL_SCHRITTE = 50;
        this.ANZAHL_SCHRITTE_ENTWICKLER_MODUS = 20;
        this.SCHRITTLÄNGE = 5;
        this.SCHRITTLÄNGE_ENTWICKLER_MODUS = 20;
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

        let Wegpunkte = Wegpunkt.Weg.Weg_berechnen(this.Wegpunkt, this.Ziel_Wegpunkt);
        if (Wegpunkte.length == 0) {
            this.nächster_Wegpunkt = this.Ziel_Wegpunkt;
        } else {
            this.nächster_Wegpunkt = Wegpunkte[0];
        }

        let Koordinaten = {
            links: this.nächster_Wegpunkt.Eigenschaften.links - 0.5 * this.nächster_Wegpunkt.Eigenschaften.zoom,
            oben: this.nächster_Wegpunkt.Eigenschaften.oben - this.nächster_Wegpunkt.Eigenschaften.zoom,
            breit: this.nächster_Wegpunkt.Eigenschaften.zoom,
            hoch: this.nächster_Wegpunkt.Eigenschaften.zoom
        };

        let Richtung = {
            nach_rechts: (Koordinaten.links - this.Koordinaten.links),
            nach_unten: (Koordinaten.oben - this.Koordinaten.oben)
        };
        let Distanz = Math.sqrt((Richtung.nach_rechts ** 2 + Richtung.nach_unten ** 2));
        let Schrittlänge = this.Spiel.Entwickler_Modus ? this.SCHRITTLÄNGE_ENTWICKLER_MODUS : this.SCHRITTLÄNGE;
        let Schritte = Math.floor(Distanz / Schrittlänge);
        //let Schritte = this.Spiel.Entwickler_Modus ? this.ANZAHL_SCHRITTE_ENTWICKLER_MODUS : this.ANZAHL_SCHRITTE;
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

        if (Wegpunkt) this.gehe_zu(Wegpunkt);
    }

    platziere_bei(Koordinaten) {
        this.Koordinaten = Koordinaten;
        this.Spieler_div.style.left = Koordinaten.links + "px";
        this.Spieler_div.style.top = Koordinaten.oben + "px";
        this.Spieler_div.style.width = Koordinaten.breit + "px";
        this.Spieler_div.style.height = Koordinaten.hoch + "px";
    }

    feststellen(text) {
        this.Spiel.Sprechblase.anzeigen(text);
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
