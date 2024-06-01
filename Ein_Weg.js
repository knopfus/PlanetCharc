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
            for (let i = 0; i < Pfade.length; i++) {
                let Wegpunkte = Pfade[i];
                this.Pfad_hinzufügen(Wegpunkte);
            }
        }
    }

    Pfad_hinzufügen(Wegpunkte) {
        let Pfad_Nummer = this.Pfade.length;
        let Pfad = [];
        this.Pfade.hinzufügen(Pfad);
        if (Wegpunkte) {
            for (let i = 0; i < Wegpunkte.length; i++) {
                this.Wegpunkt_hinzufügen(Pfad_Nummer, Wegpunkte[i]);
            }
        }
    }

    Wegpunkt_hinzufügen(Pfad_Nummer, Wegpunkt_Eigenschaften) {
        let Pfad = this.Pfade[Pfad_Nummer];
        if (!Pfad) {
            // Pfad existiert noch gar nicht, noch kurz hinzufügen
            this.Pfad_hinzufügen();
            Pfad = this.Pfade[Pfad_Nummer];
        }
        let i = Pfad.length;

        let Wegpunkt = new Ein_Wegpunkt(i, Pfad_Nummer, Wegpunkt_Eigenschaften, this, this.Spiel);

        Pfad.hinzufügen(Wegpunkt);
        // Wenn ein Wegpunkt ein Portal zu einem anderen Ort hat, soll man von dort bei diesem Wegpunkt landen
        if (Wegpunkt_Eigenschaften.Portal) {
            let Ort_Name = Wegpunkt_Eigenschaften.Portal;
            this.Eintritte[Ort_Name] = Wegpunkt;
        }
        if (Wegpunkt_Eigenschaften.Kreuzung) {
            this.Kreuzung.hinzufügen(Wegpunkt);
        }
        if (Wegpunkt_Eigenschaften.Start) {
            this.Eintritte["Start"] = Wegpunkt;
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

            let Wegpunkte = [];
            if (Ziel_Wegpunkt.Nummer < Start_Wegpunkt.Nummer) {
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

    Portal_ersetzen(Portal_Name_alt, Portal_Name_neu) {
        // Beim Weg suchen, wo es dieses Portal hat
        // Hierfür muss es den Wegpunkt suchen, der dieses Portal hat
        // Hierfür muss man im Ort im Weg in allen Pfaden in allen Wegpunkten suchen
        // Beim Eretzen des Portals muss auch der entsprechende Eintritt ersetzt werden.
        for (let Pfad of this.Pfade) {
            for (let Wegpunkt of Pfad) {
                if (Portal_Name_alt == Wegpunkt.Eigenschaften.Portal) {
                    Wegpunkt.Eigenschaften.Portal = Portal_Name_neu;
                    this.Eintritte[Portal_Name_neu] = Wegpunkt;
                }
            }
        }
        
    }
}
