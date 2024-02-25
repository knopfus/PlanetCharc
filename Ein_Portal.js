class Ein_Portal {
    constructor(Name, Spiel) {
        this.Name = Name;
        this.Spiel = Spiel;

        let Portal_Vorlage = document.getElementById("Portal_Vorlage");
        let Portal_div = Portal_Vorlage.cloneNode(true);

        Portal_div.setAttribute("id", "Portal_" + Name);

        let self = this;
        Portal_div.onclick = function() {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Portal(self);
            }
        };

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Portal_div);

        this.Portal_div = Portal_div;
    }

    wechsle_zu(Ort) {
        this.Ort = Ort;
        this.Eigenschaften = Ort.Portale[this.Name];

        if (this.Eigenschaften) {
            // Dieses Portal ist für diesen Ort definiert
            this.Portal_div.style.left = this.Eigenschaften.links + "px";
            this.Portal_div.style.top = this.Eigenschaften.oben + "px";
            this.Portal_div.style.width = this.Eigenschaften.breit + "px";
            this.Portal_div.style.height = this.Eigenschaften.hoch + "px";
            this.Portal_div.style.visibility = "visible";
        } else {
            // Dieses Portal ist für diesen Ort nicht definiert worden, daher finden sich im Ort
            // unter diesem Portalnamen keine Eigenschaften
            this.Portal_div.style.visibility = "hidden";
        }

        
    }

    anzeigen() {
        this.Portal_div.style.display = "";
        if (this.Spiel.Entwickler_Modus) {
            this.Portal_div.style.border = "1px solid red";
        } else {
            this.Portal_div.style.border = "0px";
        }
    }

    gehe_zu() {
        let Ort = this.Eigenschaften.zu;
        this.Spiel.gehe_zu_Ort(Ort);
    }
}
