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
}
