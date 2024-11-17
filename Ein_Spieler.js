class Ein_Spieler {
    constructor(Spiel, Eigenschaften) {
        this.Spiel = Spiel;
        this.Kraft = Eigenschaften.Kraft;
        this.Lebenspunkte = Eigenschaften.Lebenspunkte;
        this.Maximale_Lebenspunkte = Eigenschaften.Lebenspunkte;
        this.Schritte = 0;

        // Das HTML Element vorbereiten
        this.Spieler_div = document.getElementById("Spieler");

        this.SCHRITT_LÄNGE = 0.02;
        this.SCHRITT_LÄNGE_ENTWICKLER_MODUS = 0.05;
    }

    platziere_bei_Wegpunkt(Wegpunkt) {
        let Koordinaten = {
            links: Wegpunkt.Eigenschaften.links - 0.5 * Wegpunkt.Eigenschaften.vorne,
            oben: Wegpunkt.Eigenschaften.oben - Wegpunkt.Eigenschaften.vorne,
            vorne: Wegpunkt.Eigenschaften.vorne
        };

        this.platziere_bei(Koordinaten);
        this.Wegpunkt = Wegpunkt;
    }

    gehe_zu(Wegpunkt) {
        if (!Wegpunkt.Eigenschaften) return; // Versuche nicht zu einem nicht existierenden Wegpunkt zu gehen

        if (!this.Wegpunkt) {
            // Noch kein Wegpunkt - Keine Animation

            this.platziere_bei_Wegpunkt(Wegpunkt);
            return;
        }

        this.Ziel_Wegpunkt = Wegpunkt;

        let Wegpunkte = Wegpunkt.Weg.Weg_berechnen(this.Wegpunkt, this.Ziel_Wegpunkt);
        if (Wegpunkte.length == 0) {
            this.nächster_Wegpunkt = this.Ziel_Wegpunkt;
        } else {
            this.nächster_Wegpunkt = Wegpunkte[0];
        }

        let Ziel_Koordinaten = {
            links: this.nächster_Wegpunkt.Eigenschaften.links - 0.5 * this.nächster_Wegpunkt.Eigenschaften.vorne,
            oben: this.nächster_Wegpunkt.Eigenschaften.oben - this.nächster_Wegpunkt.Eigenschaften.vorne,
            vorne: this.nächster_Wegpunkt.Eigenschaften.vorne
        };

        let Differenz = {
            nach_rechts: (Ziel_Koordinaten.links - this.Koordinaten.links),
            nach_unten: (Ziel_Koordinaten.oben - this.Koordinaten.oben),
            nach_vorne: (Ziel_Koordinaten.vorne - this.Koordinaten.vorne)
        };
        let Distanz = Math.sqrt((Differenz.nach_rechts ** 2 + Differenz.nach_unten ** 2 + Differenz.nach_vorne ** 2));

        if (Distanz == 0) {
            this.Schritt_Richtung = {
                nach_rechts: 0,
                nach_unten: 0,
                nach_vorne: 0
            };
        } else {
            this.Schritt_Richtung = {
                nach_rechts: (Ziel_Koordinaten.links - this.Koordinaten.links) / Distanz,
                nach_unten: (Ziel_Koordinaten.oben - this.Koordinaten.oben) / Distanz,
                nach_vorne: (Ziel_Koordinaten.vorne - this.Koordinaten.vorne) / Distanz
            };
        }
        
    }

    betrete_Ort_bei(Wegpunkt) {
        this.Wegpunkt = null;
        this.Koordinaten = null;
        this.Schritt_Richtung = null;

        if (Wegpunkt) {
            this.gehe_zu(Wegpunkt);
            let Nummer = Wegpunkt.Nummer;
            let Pfad_Nummer = Wegpunkt.Pfad_Nummer;
            let höchste_Nummer = Wegpunkt.Weg.Pfade[Pfad_Nummer].length - 1;

            // Wenn Spieler bei Wegpunkt 0 eintritt, soll er zu Wegpunkt 1 weitergehen (sofern es den gibt)
            if (Nummer == 0 && höchste_Nummer > 0) {
                let nächster_Wegpunkt = Wegpunkt.Weg.Pfade[Pfad_Nummer][Nummer + 1];
                this.gehe_zu(nächster_Wegpunkt);
            } else if (Nummer == höchste_Nummer && höchste_Nummer > 0) {
                // Wenn Spieler beim höchsten Wegpunkt eintritt, soll er einen Wegpunkt zurück gehen (sofern es ihn gibt)
                let nächster_Wegpunkt = Wegpunkt.Weg.Pfade[Pfad_Nummer][Nummer - 1];
                this.gehe_zu(nächster_Wegpunkt);
            }
        }
    }

    platziere_bei(Koordinaten) {
        this.Koordinaten = Koordinaten;

        this.Spieler_div.style.left = Koordinaten.links + "px";
        this.Spieler_div.style.top = Koordinaten.oben + "px";
        this.Spieler_div.style.width = Koordinaten.vorne + "px";
        this.Spieler_div.style.height = Koordinaten.vorne + "px";
        this.Spieler_div.style.zIndex = Math.floor(Koordinaten.vorne);

        this.Spieler_div.style.rotate = (this.Schritte % 20) / 5 + "deg";
        if (this.Schritt_Richtung) {
            if (this.Schritt_Richtung.nach_rechts > 0) {
                this.Spieler_div.style.transform = "scaleX(-1)";
            } else {
                this.Spieler_div.style.transform = "";
            }
        }
    }

    feststellen(text) {
        this.Spiel.Sprechblase.anzeigen(text);
    }

    bekämpfen(Kraft) {
        this.Lebenspunkte_verändern(- Kraft / 100);
    }

    Lebenspunkte_verändern(Differenz) {
        this.Lebenspunkte = this.Lebenspunkte + Differenz;
        if (this.Lebenspunkte > this.Maximale_Lebenspunkte) {
            this.Lebenspunkte = this.Maximale_Lebenspunkte;
        }
        
        this.Spiel.zeige_Lebenspunkte_an();
        if (this.Lebenspunkte <= 0) {
            this.Spiel.Game_over();
        }
    }

    Lebenspunkte_wiederherstellen() {
        this.Lebenspunkte = this.Maximale_Lebenspunkte;
        this.Spiel.zeige_Lebenspunkte_an();
    }

    Spieluhr_tickt() {
        if (this.Schritt_Richtung) {
            let Ziel_Koordinaten = {
                links: this.nächster_Wegpunkt.Eigenschaften.links - 0.5 * this.nächster_Wegpunkt.Eigenschaften.vorne,
                oben: this.nächster_Wegpunkt.Eigenschaften.oben - this.nächster_Wegpunkt.Eigenschaften.vorne,
                vorne: this.nächster_Wegpunkt.Eigenschaften.vorne
            };
    
            let Differenz = {
                nach_rechts: (Ziel_Koordinaten.links - this.Koordinaten.links),
                nach_unten: (Ziel_Koordinaten.oben - this.Koordinaten.oben),
                nach_vorne: (Ziel_Koordinaten.vorne - this.Koordinaten.vorne)
            };
            let Distanz = Math.sqrt((Differenz.nach_rechts ** 2 + Differenz.nach_unten ** 2 + Differenz.nach_vorne ** 2));
                          
            let Schrittlänge = (this.Spiel.Entwickler_Modus ? this.SCHRITT_LÄNGE_ENTWICKLER_MODUS : this.SCHRITT_LÄNGE) * this.Koordinaten.vorne;

            this.Schritte++;

            let dies_ist_der_letzte_Schritt = (Schrittlänge >= Distanz);
            // Der letzte Schritt muss evtl. kleiner sein
            if (dies_ist_der_letzte_Schritt) {
                Schrittlänge = Distanz;
            }

            let Koordinaten = {
                links: this.Koordinaten.links + this.Schritt_Richtung.nach_rechts * Schrittlänge,
                oben: this.Koordinaten.oben + this.Schritt_Richtung.nach_unten * Schrittlänge,
                vorne: this.Koordinaten.vorne + this.Schritt_Richtung.nach_vorne * Schrittlänge
            }

            this.platziere_bei(Koordinaten);

            if (dies_ist_der_letzte_Schritt) {
                this.Schritt_Richtung = null;
                this.Schritte = 0;

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
