class Ein_Weg {
    constructor(Nummer, Pfade, Ort, Spiel) {
        this.Nummer = Nummer;
        this.Ort = Ort;
        this.Spiel = Spiel;

        this.Eintritte = {};
        this.Pfade = [];
        if (Pfade) {
            for (let Wegpunkte of Pfade) {
                let Pfad = [];
                this.Pfade.hinzufügen(Pfad);
                for (let i = 0; i < Wegpunkte.length; i++) {
                    let Wegpunkt = new Ein_Wegpunkt(i, Wegpunkte[i], this, this.Spiel);
                    Pfad.hinzufügen(Wegpunkt);
                    // Wenn ein Wegpunkt ein Portal zu einem anderen Ort hat, soll man von dort bei diesem Wegpunkt landen
                    if (Wegpunkte[i].Portal) {
                        let Ort_Name = Wegpunkte[i].Portal;
                        this.Eintritte[Ort_Name] = Wegpunkt;
                    }
                }
            }
        } else {
            let Pfad = [];
            this.Pfade.hinzufügen(Pfad);
            let Wegpunkt = new Ein_Wegpunkt(0, { links: 103,  oben: 159, Radius: 120, zoom: 100 }, this, this.Spiel);
            Pfad.hinzufügen(Wegpunkt);
            this.Eintritte.von_irgendwo = Wegpunkt;
        }
    }

    anzeigen() {
        for (let Pfad of this.Pfade) {
            for (let Wegpunkt of Pfad) {
                Wegpunkt.anzeigen();
            }
        }
    }

    verstecken() {
        for (let Pfad of this.Pfade) {
            for (let Wegpunkt of Pfad) {
                Wegpunkt.verstecken();
            }
        }
    }

    /**
     * Gibt ein Array von Wegpunkten zurück, die der Spieler durchschreiten muss, um von a nach b zu kommen.
     * 
     * Das Array kann leer sein, wenn der Spieler schon beim Ziel_Wegpunkt ist.
     */
    Weg_berechnen(Start_Wegpunkt, Ziel_Wegpunkt) {
        if (Start_Wegpunkt == Ziel_Wegpunkt) return [ Ziel_Wegpunkt ];

        let Differenz = Ziel_Wegpunkt.Nummer - Start_Wegpunkt.Nummer;

        let Wegpunkte = [];
        if (Differenz < 0) {
            // Rückwärts zählen
            for (let i = Start_Wegpunkt.Nummer - 1; i >= Ziel_Wegpunkt.Nummer; i--) {
                Wegpunkte.hinzufügen(this.Pfade[0][i]);
            }
        } else {
            // Vorwärts zählen
            for (let i = Start_Wegpunkt.Nummer + 1; i <= Ziel_Wegpunkt.Nummer; i++) {
                Wegpunkte.hinzufügen(this.Pfade[0][i]);
            }
        }

        return Wegpunkte;
    }
}
