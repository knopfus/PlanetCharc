class Ein_Gegenstand {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Eigenschaften = Eigenschaften;
        this.Spiel = Spiel;

        let Gegenstand_Vorlage = document.getElementById("Gegenstand_Vorlage");
        let Gegenstand_div = Gegenstand_Vorlage.cloneNode(true);

        Gegenstand_div.setAttribute("id", "Gegenstand_" + Name);
        if (Eigenschaften.links)    { Gegenstand_div.style.left         = Eigenschaften.links + "px"; }
        if (Eigenschaften.oben)     { Gegenstand_div.style.top          = Eigenschaften.oben + "px"; }
        if (Eigenschaften.breit)    { Gegenstand_div.style.width        = Eigenschaften.breit + "px"; }
        if (Eigenschaften.hoch)     { Gegenstand_div.style.height       = Eigenschaften.hoch + "px"; }
        if (Eigenschaften.gedreht)  { Gegenstand_div.style.transform    = "rotate(" + Eigenschaften.gedreht + "deg)"; }

        let self = this;
        Gegenstand_div.onclick = function() {
            if (self.Spiel.aktive_Aktion) {
                self.Spiel.aktive_Aktion.ausführen_auf_Gegenstand(self);
            }
        };

        let Gegenstand_img = Gegenstand_div.getElementsByTagName("img")[0];
        Gegenstand_img.setAttribute("src", "Gegenstaende/" + Name + ".png?nocache=" + Date.now());

        let Ort_div = document.getElementById("Ort");
        Ort_div.appendChild(Gegenstand_div);

        this.Gegenstand_div = Gegenstand_div;


        let Gegenstand_in_Besitz_Vorlage = document.getElementById("Gegenstand_in_Besitz_Vorlage");
        let Gegenstand_in_Besitz_div = Gegenstand_in_Besitz_Vorlage.cloneNode(true);

        Gegenstand_in_Besitz_div.setAttribute("id", "Gegenstand_in_Besitz_" + Name);
        Gegenstand_in_Besitz_div.style.display = "none";

        let Gegenstand_in_Besitz_img = Gegenstand_in_Besitz_div.getElementsByTagName("img")[0];
        Gegenstand_in_Besitz_img.setAttribute("src", "Gegenstaende/" + Name + ".png?nocache=" + Date.now());

        let Besitz_div = document.getElementById("Besitz");
        Besitz_div.appendChild(Gegenstand_in_Besitz_div);

        this.Gegenstand_in_Besitz_div = Gegenstand_in_Besitz_div;

    }

    entferne_aus(Ort) {
        this.Ort.entfernen(this);
        this.verstecken();
    }

    platziere_in(Ort) {
        if (this.Ort) {
            this.entferne_aus(this.Ort);
        }
        this.Ort = Ort;
        Ort.hinzufügen(this);
        if (this.Ort == this.Spiel.Ort) {
            this.anzeigen();
        }
    }

    nehmen() {
        if (this.Ort) {
            this.entferne_aus(this.Ort);
        }

        this.Ort = null;
        this.ist_in_Besitz = true;
        this.im_Besitz_anzeigen();
    }

    anschauen() {
        if (this.Eigenschaften.feststellen) {
            this.Spiel.Sprechblase.anzeigen(this.Eigenschaften.feststellen);
        }
    }

    anzeigen() {
        this.Gegenstand_div.style.visibility = "visible";
    }

    verstecken() {
        this.Gegenstand_div.style.visibility = "hidden";
    }

    im_Besitz_anzeigen() {
        this.Gegenstand_in_Besitz_div.style.display = "";
    }
}
