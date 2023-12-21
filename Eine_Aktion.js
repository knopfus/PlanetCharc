class Eine_Aktion {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Eigenschaften = Eigenschaften;
        this.Spiel = Spiel;

        let Aktion_div = document.getElementById("Aktion-" + Name);
        let self = this;
        Aktion_div.onclick = function() {
            self.aktivieren();
        };
        this.Aktion_div = Aktion_div;
    }

    deaktivieren() {
        this.Spiel.aktive_Aktion = null;
        this.Aktion_div.classList.remove("aktiv");
    }

    aktivieren() {
        if (this.Spiel.aktive_Aktion) {
            this.Spiel.aktive_Aktion.deaktivieren();
        }

        this.Spiel.aktive_Aktion = this;
        document.getElementById("Status-Aktion").innerText = this.Name;

        this.Aktion_div.classList.add("aktiv");
    }

    ausführen_auf_Ort() {
        if (this.Eigenschaften.auf_Ort) {
            this.Eigenschaften.auf_Ort(this.Spiel);
        }

        this.deaktivieren();
    }

    ausführen_auf_Gegenstand(Gegenstand) {
        if (this.Eigenschaften.auf_Gegenstand) {
            this.Eigenschaften.auf_Gegenstand(Gegenstand, this.Spiel);
        }

        this.deaktivieren();
    }
}
