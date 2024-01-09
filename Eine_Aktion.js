class Eine_Aktion {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Eigenschaften = Eigenschaften;
        this.Spiel = Spiel;

        let Aktion_div = document.getElementById("Aktion-" + Name);
        let self = this;
        Aktion_div.onclick = function() {
            if (self.Spiel.aktive_Aktion == self) {
                self.deaktivieren();
            } else {
                self.aktivieren();
            }
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
            let deaktivieren = this.Eigenschaften.auf_Ort(Ort, this.Spiel, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }

    ausführen_auf_Gegenstand(Gegenstand) {
        if (this.Eigenschaften.auf_Gegenstand) {
            let deaktivieren = this.Eigenschaften.auf_Gegenstand(Gegenstand, this.Spiel);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }

    ausführen_auf_Wegpunkt(Wegpunkt) {
        if (this.Eigenschaften.auf_Wegpunkt) {
            let deaktivieren = this.Eigenschaften.auf_Wegpunkt(Wegpunkt, this.Spiel);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }

    ausführen_auf_Portal(Portal) {
        if (this.Eigenschaften.auf_Portal) {
            let deaktivieren = this.Eigenschaften.auf_Portal(Portal, this.Spiel);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }

    ausführen_auf_Monster(Monster) {
        if (this.Eigenschaften.auf_Monster) {
            let deaktivieren = this.Eigenschaften.auf_Monster(Monster, this.Spiel);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }
}
