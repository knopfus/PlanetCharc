class Ein_Wegpunkt {
    constructor(Nummer, Eigenschaften, Weg, Spiel) {
        this.Nummer = Nummer;
        this.Eigenschaften = Eigenschaften;
        this.Weg = Weg;
        this.Spiel = Spiel;

        let Wegpunkt_Vorlage = document.getElementById("Wegpunkt_Vorlage");
        let Wegpunkt_div = Wegpunkt_Vorlage.cloneNode(true);

        Wegpunkt_div.setAttribute("id", "Wegpunkt_" + Weg.Ort.Name + "_" + Nummer);

        Wegpunkt_div.style.left = Eigenschaften.links - Eigenschaften.Radius + "px";
        Wegpunkt_div.style.top = Eigenschaften.oben - Eigenschaften.Radius + "px";
        Wegpunkt_div.style.width = 2 * Eigenschaften.Radius + "px";
        Wegpunkt_div.style.height = 2 * Eigenschaften.Radius + "px";
        Wegpunkt_div.style.visibility = "visible";

        let self = this;
        Wegpunkt_div.onclick = function() {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Wegpunkt(self);
            }
        };

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Wegpunkt_div);

        this.Wegpunkt_div = Wegpunkt_div;

        this.verstecken();
    }

    anzeigen() {
        this.Wegpunkt_div.style.display = "";
        if (this.Spiel.Entwickler_Modus) {
            this.Wegpunkt_div.style.border = "1px solid red";
        } else {
            this.Wegpunkt_div.style.border = "0px";
        }
    }

    verstecken() {
        this.Wegpunkt_div.style.display = "none";
    }

    gehe_zu() {
        this.Spiel.Spieler.gehe_zu(this);
    }
}
