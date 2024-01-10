class Ein_Weg {
    constructor(Nummer, Wegpunkte, Ort, Spiel) {
        this.Nummer = Nummer;
        this.Ort = Ort;
        this.Spiel = Spiel;

        this.Wegpunkte = [];
        if (Wegpunkte) {
            for (let i = 0; i < Wegpunkte.length; i++) {
                let Wegpunkt = new Ein_Wegpunkt(i, Wegpunkte[i], this, this.Spiel);
                this.Wegpunkte.hinzufügen(Wegpunkt);
            }
        } else {
            let Wegpunkt = new Ein_Wegpunkt(0, { links: 103,  oben: 159, Radius: 120, zoom: 100 }, this, this.Spiel);
            this.Wegpunkte.hinzufügen(Wegpunkt);
        }
    }

    anzeigen() {
        for (let Wegpunkt of this.Wegpunkte) {
            Wegpunkt.anzeigen();
        }
    }

    verstecken() {
        for (let Wegpunkt of this.Wegpunkte) {
            Wegpunkt.verstecken();
        }
    }

    /**
     * Gibt ein Array von Wegpunkten zurück, die der Spieler durchschreiten muss, um von a nach b zu kommen.
     * 
     * Das Array kann leer sein, wenn der Spieler schon beim Ziel_Wegpunkt ist.
     */
    Weg_berechnen(Start_Wegpunkt, Ziel_Wegpunkt) {
        if (Start_Wegpunkt == Ziel_Wegpunkt) return [];
        let Differenz = Ziel_Wegpunkt.Nummer - Start_Wegpunkt.Nummer;

        let Wegpunkte = [];
        if (Differenz < 0) {
            // Rückwärts zählen
            for (let i = Start_Wegpunkt.Nummer - 1; i >= Ziel_Wegpunkt.Nummer; i--) {
                Wegpunkte.hinzufügen(this.Wegpunkte[i]);
            }
        } else {
            // Vorwärts zählen
            for (let i = Start_Wegpunkt.Nummer + 1; i <= Ziel_Wegpunkt.Nummer; i++) {
                Wegpunkte.hinzufügen(this.Wegpunkte[i]);
            }
        }

        return Wegpunkte;
    }
}
