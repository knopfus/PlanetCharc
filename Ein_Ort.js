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
        this.Ort_Bild_vorne_divs = [
            document.getElementById("Ort-Bild-vorne-1"),
            document.getElementById("Ort-Bild-vorne-2"),
            document.getElementById("Ort-Bild-vorne-3")
        ];
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
        for (var i = 0; i <= 2; i++) {
            this.Ort_Bild_vorne_divs[i].src = "Orte/" + this.Name + "_vorne_" + (i+1) + ".png?nocache=" + Date.now();
            this.Ort_Bild_vorne_divs[i].style.removeProperty("z-index");
        }
        if (this.Eigenschaften.Bilder_vorne) {
            for (var i = 0; i < this.Eigenschaften.Bilder_vorne.length; i++) {
                this.Ort_Bild_vorne_divs[i].style.zIndex = this.Eigenschaften.Bilder_vorne[i];
            }
        }

        for (let Gegenstand of this.Gegenstände) {
            Gegenstand.anzeigen();
        }

        if (this.Spiel.aktive_Aktion && this.Spiel.aktive_Aktion.Name == "gehe_zu") {
            this.Weg.anzeigen();
        }

        for (let Portal_Name in this.Spiel.Portale) {
            let Portal = this.Spiel.Portale[Portal_Name];
            Portal.wechsle_zu(this);
            Portal.anzeigen();
        }

        if (this.Eigenschaften.feststellen && !this.schon_festgestellt) {
            if (this.Eigenschaften.nach) {
                var self = this;
                window.setTimeout(function() {
                    self.Spiel.Spieler.feststellen(self.Eigenschaften.feststellen);
                    self.schon_festgestellt = true;
                }, this.Eigenschaften.nach * 1000);
            } else {
                this.Spiel.Spieler.feststellen(this.Eigenschaften.feststellen);
                this.schon_festgestellt = true;
            }
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
}
