class Ein_Ort {
    constructor(Name, Spiel) {
        this.Name = Name;
        this.Spiel = Spiel;
        
        this.Gegenstände = [];
        this.Portale = {};

        this.Status_Ort_element = document.getElementById("Status-Ort");
        this.Ort_Bild_div = document.getElementById("Ort-Bild");
    }

    verlassen() {
        for (let Gegenstand of this.Gegenstände) {
            Gegenstand.verstecken();
        }
    }

    betreten() {
        this.Status_Ort_element.innerText = this.Name;
        this.Ort_Bild_div.src = "Orte/" + this.Name + ".png?nocache=" + Date.now();

        for (let Gegenstand of this.Gegenstände) {
            Gegenstand.anzeigen();
        }
    
        for (let Portal_Name in this.Spiel.Portale) {
            let Portal = this.Spiel.Portale[Portal_Name];
            Portal.wechsle_zu(this);
        }
    }

    hinzufügen(Gegenstand) {
        this.Gegenstände.hinzufügen(Gegenstand);
    }

    entfernen(Gegenstand) {
        this.Gegenstände.entfernen(Gegenstand);
    }

    portal(Portal_Name, Eigenschaften) {
        this.Portale[Portal_Name] = Eigenschaften;
    }
}
