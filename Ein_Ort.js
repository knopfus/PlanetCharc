class Ein_Ort {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Spiel = Spiel;
        this.Eigenschaften = Eigenschaften;
        this.Weg = new Ein_Weg(0, Eigenschaften.Pfade, this, this.Spiel);
        
        this.Gegenstände = [];
        this.Portale = {};
        this.Eintritte = {};

        this.Status_Ort_element = document.getElementById("Status-Ort");
        this.Ort_Bild_div = document.getElementById("Ort-Bild");
    }

    verlassen() {
        for (let Gegenstand of this.Gegenstände) {
            Gegenstand.verstecken();
        }
        this.Weg.verstecken();
    }

    betreten() {
        this.Status_Ort_element.innerText = this.Name;
        this.Ort_Bild_div.src = "Orte/" + this.Name + ".png?nocache=" + Date.now();

        for (let Gegenstand of this.Gegenstände) {
            Gegenstand.anzeigen();
        }

        this.Weg.anzeigen();
    
        for (let Portal_Name in this.Spiel.Portale) {
            let Portal = this.Spiel.Portale[Portal_Name];
            Portal.wechsle_zu(this);
            Portal.anzeigen();
        }

        if (this.Eigenschaften.feststellen && !this.schon_festgestellt) {
            this.Spiel.Spieler.feststellen(this.Eigenschaften.feststellen);
            this.schon_festgestellt = true;
        }
    }

    hinzufügen(Gegenstand) {
        this.Gegenstände.hinzufügen(Gegenstand);
    }

    entfernen(Gegenstand) {
        this.Gegenstände.entfernen(Gegenstand);
    }

    Portal_hinzufügen(Portal_Name, Eigenschaften) {
        this.Portale[Portal_Name] = Eigenschaften;
    }

    // Fluss.Portal_ersetzen("Quelle_des_Lichts", "offene_Quelle_des_Lichts")
    // Lavawelt.Portal_ersetzen("Quelle_des_Lichts", "offene_Quelle_des_Lichts")
    Portal_ersetzen(Portal_Name_alt, Portal_Name_neu) {
        // Beim Ort suchen, wo es dieses Portal hat
        // Hierfür muss es den Wegpunkt suchen, der dieses Portal hat
        // Hierfür muss man im Ort im Weg in allen Pfaden in allen Wegpunkten suchen
        for (let Pfad of this.Weg.Pfade) {
            for (let Wegpunkt of Pfad) {
                if (Portal_Name_alt == Wegpunkt.Eigenschaften.Portal) {
                    Wegpunkt.Eigenschaften.Portal = Portal_Name_neu;
                }
            }
        }
        
    }

    Eintritt_hinzufügen(Ort_Name, Wegpunkt) {
        this.Eintritte[Ort_Name] = Wegpunkt;
    }
}
