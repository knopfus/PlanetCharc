class Ein_Ort {
    constructor(Name) {
        this.Name = Name;
        this.Gegenstände = [];
        this.Portale = {};
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
