class Ein_Wegpunkt {
    constructor(Nummer, Spiel) {
        this.Nummer = Nummer;
        this.Spiel = Spiel;

        let Wegpunkt_Vorlage = document.getElementById("Wegpunkt_Vorlage");
        let Wegpunkt_div = Wegpunkt_Vorlage.cloneNode(true);

        Wegpunkt_div.setAttribute("id", "Wegpunkt_" + Nummer);

        let self = this;
        Wegpunkt_div.onclick = function() {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Wegpunkt(self);
            }
        };

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Wegpunkt_div);

        this.Wegpunkt_div = Wegpunkt_div;
    }

    wechsle_zu(Ort) {
        this.Ort = Ort;
        if (Ort.Wegpunkte) {
            this.Eigenschaften = Ort.Wegpunkte[this.Nummer];
        } else {
            this.Eigenschaften = null;
        }

        if (this.Eigenschaften) {
            // Dieses Wegpunkt ist für diesen Ort definiert
            this.Wegpunkt_div.style.left = this.Eigenschaften.links - this.Eigenschaften.Radius + "px";
            this.Wegpunkt_div.style.top = this.Eigenschaften.oben - this.Eigenschaften.Radius + "px";
            this.Wegpunkt_div.style.width = 2 * this.Eigenschaften.Radius + "px";
            this.Wegpunkt_div.style.height = 2 * this.Eigenschaften.Radius + "px";
            this.Wegpunkt_div.style.visibility = "visible";
        } else {
            // Dieses Wegpunkt ist für diesen Ort nicht definiert worden, daher finden sich im Ort
            // unter diesem Wegpunktnamen keine Eigenschaften
            this.Wegpunkt_div.style.visibility = "hidden";
        }
    }

    gehe_zu() {
        this.Spiel.Spieler.gehe_zu(this);
    }
}
