class Ein_Wegpunkt {
    constructor(Nummer, Pfad_Nummer, Eigenschaften, Weg, Spiel) {
        this.Nummer = Nummer;
        this.Pfad_Nummer = Pfad_Nummer;
        this.Eigenschaften = Eigenschaften;
        this.Weg = Weg;
        this.Spiel = Spiel;

        let Wegpunkt_Vorlage = document.getElementById("Wegpunkt_Vorlage");
        let Wegpunkt_div = Wegpunkt_Vorlage.cloneNode(true);
        let Wegpunkt_vorne_div = Wegpunkt_div.getElementsByClassName("Wegpunkt-vorne")[0];
        let Wegpunkt_Nummer_div = Wegpunkt_div.getElementsByClassName("Wegpunkt-Nummer")[0];

        Wegpunkt_div.setAttribute("id", "Wegpunkt_" + Weg.Ort.Name + "_" + Pfad_Nummer + "_" + Nummer);

        let self = this;
        Wegpunkt_div.onclick = function(event) {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Wegpunkt(self, event);
            }
        };

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Wegpunkt_div);

        Wegpunkt_Nummer_div.innerText = this.Pfad_Nummer + "." + this.Nummer;

        this.Wegpunkt_div = Wegpunkt_div;
        this.Wegpunkt_vorne_div = Wegpunkt_vorne_div;
        this.Wegpunkt_Nummer_div = Wegpunkt_Nummer_div;

        this.verstecken();
    }

    anzeigen() {
        this.Wegpunkt_div.style.left = this.Eigenschaften.links - this.Eigenschaften.Radius + "px";
        this.Wegpunkt_div.style.top = this.Eigenschaften.oben - this.Eigenschaften.Radius * 2 + "px";
        this.Wegpunkt_div.style.width = 2 * this.Eigenschaften.Radius + "px";
        this.Wegpunkt_div.style.height = 2 * this.Eigenschaften.Radius + "px";
        this.Wegpunkt_div.style.visibility = "visible";

        this.Wegpunkt_vorne_div.style.left = this.Eigenschaften.Radius - this.Eigenschaften.vorne / 2 + "px";
        this.Wegpunkt_vorne_div.style.top = this.Eigenschaften.Radius * 2 - this.Eigenschaften.vorne + "px";
        this.Wegpunkt_vorne_div.style.width = 2 * this.Eigenschaften.vorne / 2 + "px";
        this.Wegpunkt_vorne_div.style.height = 2 * this.Eigenschaften.vorne / 2 + "px";

        this.Wegpunkt_div.style.display = "";

        if (this.Eigenschaften.Entwurf) {
            this.Wegpunkt_div.style["pointer-events"] = "none";
        } else {
            this.Wegpunkt_div.style.removeProperty("pointer-events");
        }
    }

    verstecken() {
        this.Wegpunkt_div.style.display = "none";
    }

    gehe_zu() {
        this.Spiel.Spieler.gehe_zu(this);
    }
}
