class Eine_Aktion {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Eigenschaften = Eigenschaften;
        this.Spiel = Spiel;
        this.Status = {}; // Eine Aktion kann sich beim Ausführen Dinge merken, indem sie im Status gespeichert werden

        let Aktion_div = document.getElementById("Aktion-" + Name);
        this.Aktion_div = Aktion_div;
        if (Eigenschaften.Entwickler_Modus) {
            Aktion_div.style.float = "right";
            this.anzeigen_falls_Entwickler_Modus();
        }
        let self = this;
        Aktion_div.onclick = function() {
            if (self.Spiel.aktive_Aktion == self) {
                self.deaktivieren();
            } else {
                self.aktivieren();
                self.Spiel.Sprechblase.verstecken();
            }
        };
    }

    anzeigen_falls_Entwickler_Modus() {
        if (this.Eigenschaften.Entwickler_Modus && !this.Spiel.Entwickler_Modus) {
            this.Aktion_div.style.display = "none";
        } else {
            this.Aktion_div.style.display = "";
        }
    }

    deaktivieren() {
        let wirklich_deaktivieren = this.beim_Deaktivieren();
        if (wirklich_deaktivieren) {
            this.Spiel.aktive_Aktion = null;
            this.Aktion_div.classList.remove("aktiv");
        }
        this.Status_anzeigen();
    }

    aktivieren() {
        if (this.Spiel.aktive_Aktion) {
            this.Spiel.aktive_Aktion.deaktivieren();
        }

        this.Spiel.aktive_Aktion = this;

        this.Aktion_div.classList.add("aktiv");
        this.beim_Aktivieren();
        this.Status_anzeigen();
    }

    beim_Aktivieren() {
        if (this.Eigenschaften.beim_Aktivieren) {
            let deaktivieren = this.Eigenschaften.beim_Aktivieren(this.Spiel, this);
            if (deaktivieren) {
                this.deaktivieren();
            }
        }
    }

    beim_Deaktivieren() {
        if (this.Eigenschaften.beim_Deaktivieren) {
            return this.Eigenschaften.beim_Deaktivieren(this.Spiel, this);
        } else {
            return true; // wirklich_deaktivieren
        }
    }

    ausführen_auf_Ort(Ort, event) {
        if (this.Eigenschaften.auf_Ort) {
            let deaktivieren = this.Eigenschaften.auf_Ort(Ort, this.Spiel, this, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    ausführen_auf_Gegenstand(Gegenstand, event) {
        if (this.Eigenschaften.auf_Gegenstand) {
            let deaktivieren = this.Eigenschaften.auf_Gegenstand(Gegenstand, this.Spiel, this, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    ausführen_auf_Gegenstand_in_Besitz(Gegenstand, event) {
        if (this.Eigenschaften.auf_Gegenstand_in_Besitz) {
            let deaktivieren = this.Eigenschaften.auf_Gegenstand_in_Besitz(Gegenstand, this.Spiel, this, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    ausführen_auf_Wegpunkt(Wegpunkt, event) {
        if (this.Eigenschaften.auf_Wegpunkt) {
            let deaktivieren = this.Eigenschaften.auf_Wegpunkt(Wegpunkt, this.Spiel, this, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    ausführen_auf_Portal(Portal) {
        if (this.Eigenschaften.auf_Portal) {
            let deaktivieren = this.Eigenschaften.auf_Portal(Portal, this.Spiel);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    ausführen_auf_Monster(Monster, event) {
        if (this.Eigenschaften.auf_Monster) {
            let deaktivieren = this.Eigenschaften.auf_Monster(Monster, this.Spiel, this, event);
            if (deaktivieren) {
                this.deaktivieren();
            }
            this.Status_anzeigen();
        }
    }

    Status_anzeigen() {
        if (this.Spiel.aktive_Aktion == null) {
            document.getElementById("Status-Aktion").innerText = "keine";
        } else {
            document.getElementById("Status-Aktion").innerText = this.Spiel.aktive_Aktion.Name + " " + JSON.stringify(this.Spiel.aktive_Aktion.Status);
        }
    }
}
