
window.Räume = {

    Silberne_Lichtung: {

        mögliche_Aktionen: {
            gehe_zu: { Ziel_Raum_Name: "Dschungel_1", Luan_10: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Dschungel_1: {

        mögliche_Aktionen: {}

    }
};

window.Gegenstände = {

};


window.Aktionen = {

    gehe_zu: function( Gegenstand, Raum, Spielstand, Aktion ) {

        Spielstand.vorheriger_Raum_Name = Spielstand.aktueller_Raum_Name;
        Spielstand.aktueller_Raum_Name = Aktion.Ziel_Raum_Name;

        Spielstand.Luan_10.links = Aktion.Luan_10.links;
        Spielstand.Luan_10.oben = Aktion.Luan_10.oben;
        Spielstand.Luan_10.kommt_von = Aktion.Luan_10.kommt_von;

        if (Aktion.Luan_12) {
            Spielstand.Luan_12.links = Aktion.Luan_12.links;
            Spielstand.Luan_12.oben = Aktion.Luan_12.oben;
            Spielstand.Luan_12.kommt_von = Aktion.Luan_12.kommt_von;
        }
    },

    nehmen: function( Gegenstand, Raum, Spielstand, Aktion ) {

        Raum.Gegenstände.entfernen( Gegenstand );
        Spielstand.Gegenstände_in_Besitz.hinzufügen( Gegenstand );

    },

    einfallen: function( Gegenstand, Raum, Spielstand, Aktion ) {

        if (Aktion.eingefallen == false) {
            Spielstand.aktuelle_Ideen += Aktion.zusätzliche_Ideen;
        }

        Aktion.eingefallen = true;

    },

    lernen: function( Gegenstand, Raum, Spielstand, Aktion ) {

        if (Aktion.gelernt == false) {
            Spielstand.aktueller_IQ += Aktion.zusätzlicher_IQ;
        }

        Aktion.gelernt = true;

    }

}


window.Spielstand = {

    aktueller_Raum_Name: "Silberne_Lichtung",
    vorheriger_Raum_Name: "",

    Luan_10: { links: 200, oben: 490 },

    Luan_12: { links: -500, oben: -500 },

    aktuelle_Aktion_Name: "",

    Gegenstände_in_Besitz: [],

    aktueller_IQ: 130,

    aktuelle_Ideen: 0
}
