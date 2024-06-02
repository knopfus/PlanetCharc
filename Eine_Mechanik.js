class Eine_Mechanik {
    constructor(Name, Eigenschaften, Spiel) {
        this.Name = Name;
        this.Eigenschaften = Eigenschaften;
        this.Spiel = Spiel;

        let Gegenstände = [];
        for (let Gegenstand_Name of Eigenschaften.Zugehörige_Gegenstände) {
            Gegenstände.hinzufügen(this.Spiel.Gegenstände[Gegenstand_Name]);
        }
        this.Zugehörige_Gegenstände = Gegenstände;
        this.Richtiger_Code = Eigenschaften.Richtiger_Code;
        this.gelöst = Eigenschaften.gelöst;

        this.gedrückte_Symbole = [];
    }

    enthält(Gegenstand) {
        for (var Zugehöriger_Gegenstand of this.Zugehörige_Gegenstände) {
            if (Gegenstand == Zugehöriger_Gegenstand) {
                return true;
            }
        }

        return false;
    }

    drücken(Gegenstand) {
        Gegenstand.ein();
        
        this.gedrückte_Symbole.hinzufügen(Gegenstand.Name);
        spiele_Sound_Effect("Knopf")
        if (this.gedrückte_Symbole.length == 4) {
            if (this.gedrückte_Symbole.ist_gleich(this.Richtiger_Code))
            {
                this.gelöst(this.Spiel);
            } else {
                this.gedrückte_Symbole = [];

                for (var Zugehöriger_Gegenstand of this.Zugehörige_Gegenstände) {
                    Zugehöriger_Gegenstand.aus();
                }
            };
        }
    }
}
