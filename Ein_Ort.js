class Ein_Ort {
    constructor(Name) {
        this.Name = Name;
        this.Gegenstände = [];
    }

    hinzufügen(Gegenstand) {
        this.Gegenstände.hinzufügen(Gegenstand);
    }

    entfernen(Gegenstand) {
        this.Gegenstände.entfernen(Gegenstand);
    }

    zu(Ziel_Ort) {
        this.Ziel_Ort = Ziel_Ort;
    }
}
