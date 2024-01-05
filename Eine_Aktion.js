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

    ausführen_auf_Ort(Ort, event) {
        if (this.Eigenschaften.auf_Ort) {
            this.Eigenschaften.auf_Ort(Ort, this.Spiel, event);
        }

        this.deaktivieren();
    }

    ausführen_auf_Gegenstand(Gegenstand) {
        if (this.Eigenschaften.auf_Gegenstand) {
            this.Eigenschaften.auf_Gegenstand(Gegenstand, this.Spiel);
        }

        this.deaktivieren();
    }

    ausführen_auf_Wegpunkt(Wegpunkt) {
        if (this.Eigenschaften.auf_Wegpunkt) {
            this.Eigenschaften.auf_Wegpunkt(Wegpunkt, this.Spiel);
        }

        this.deaktivieren();
    }

    ausführen_auf_Portal(Portal) {
        if (this.Eigenschaften.auf_Portal) {
            this.Eigenschaften.auf_Portal(Portal, this.Spiel);
        }

        this.deaktivieren();
    }

    ausführen_auf_Monster(Monster) {
        if (this.Eigenschaften.auf_Monster) {
            this.Eigenschaften.auf_Monster(Monster, this.Spiel);
        }

        this.deaktivieren();
    }
}
