class Ein_Weg {
    constructor(Nummer, Pfade, Ort, Spiel) {
        this.Nummer = Nummer;
        this.Ort = Ort;
        this.Spiel = Spiel;

        this.Eintritte = {};
        this.Kreuzung = [];
        this.Pfade = [];
        if (Pfade) {
            if (Pfade.length > 2) {
                throw "Nur 2 Pfade pro Ort unterstützt.";
            }
            for (let Pfad_Nummer = 0; Pfad_Nummer < Pfade.length; Pfad_Nummer++) {
                let Wegpunkte = Pfade[Pfad_Nummer];
                let Pfad = [];
                this.Pfade.hinzufügen(Pfad);
                for (let i = 0; i < Wegpunkte.length; i++) {
                    let Wegpunkt = new Ein_Wegpunkt(i, Pfad_Nummer, Wegpunkte[i], this, this.Spiel);
                    Pfad.hinzufügen(Wegpunkt);
                    // Wenn ein Wegpunkt ein Portal zu einem anderen Ort hat, soll man von dort bei diesem Wegpunkt landen
                    if (Wegpunkte[i].Portal) {
                        let Ort_Name = Wegpunkte[i].Portal;
                        this.Eintritte[Ort_Name] = Wegpunkt;
                    }
                    if (Wegpunkte[i].Kreuzung) {
                        this.Kreuzung.hinzufügen(Wegpunkt);
                    }
                }
            }
        } else {
            let Pfad = [];
            this.Pfade.hinzufügen(Pfad);
            let Wegpunkt = new Ein_Wegpunkt(0, 0, { links: 103,  oben: 159, Radius: 120, zoom: 100 }, this, this.Spiel);
            Pfad.hinzufügen(Wegpunkt);
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
        if (Start_Wegpunkt == Ziel_Wegpunkt) return [ ];

        if (Start_Wegpunkt.Pfad_Nummer == Ziel_Wegpunkt.Pfad_Nummer) {
            // Wir bleiben auf dem gleichen Pfad, einfach dem Pfad entlang laufen

            let Differenz = Ziel_Wegpunkt.Nummer - Start_Wegpunkt.Nummer;

            let Wegpunkte = [];
            if (Differenz < 0) {
                // Rückwärts zählen
                for (let i = Start_Wegpunkt.Nummer - 1; i >= Ziel_Wegpunkt.Nummer; i--) {
                    Wegpunkte.hinzufügen(this.Pfade[Start_Wegpunkt.Pfad_Nummer][i]);
                }
            } else {
                // Vorwärts zählen
                for (let i = Start_Wegpunkt.Nummer + 1; i <= Ziel_Wegpunkt.Nummer; i++) {
                    Wegpunkte.hinzufügen(this.Pfade[Start_Wegpunkt.Pfad_Nummer][i]);
                }
            }
    
            return Wegpunkte;

        } else {
            // Wir müssen Pfad wechseln -> via Kreuzung gehen
            let Wegpunkte = [];
            
            let Weg_bis_Kreuzung = this.Weg_berechnen(Start_Wegpunkt, this.Kreuzung[Start_Wegpunkt.Pfad_Nummer]);
            for (let Wegpunkt of Weg_bis_Kreuzung) {
                Wegpunkte.hinzufügen(Wegpunkt);
            }
            
            Wegpunkte.hinzufügen(this.Kreuzung[Ziel_Wegpunkt.Pfad_Nummer]);

            let Weg_ab_Kreuzung = this.Weg_berechnen(this.Kreuzung[Ziel_Wegpunkt.Pfad_Nummer], Ziel_Wegpunkt);
            for (let Wegpunkt of Weg_ab_Kreuzung) {
                Wegpunkte.hinzufügen(Wegpunkt);
            }
    
            return Wegpunkte;
        }
    }
}
