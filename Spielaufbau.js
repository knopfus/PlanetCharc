var Spielaufbau = {
    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung:  { Portale: { Nord: { zu: "Dschungel_1",
                                                 links: 50, oben: 0, breit: 1340, hoch: 50 },
                                         Ost:  { zu: "Dschungel_2",
                                                 links: 1390, oben: 50, breit: 50, hoch: 721 } } },
        Dschungel_1:        { Portale: {  } },

        Unerreichbarer_Ort: { }
    },

    Gegenstände: {

        "Klauenspringer-Zahn": { in: "Dschungel_1", links: 470, oben: 287.5, breit: 50, hoch: 85, gedreht: 263 }

    },

    Aktionen: {
        gehe_zu: {
            auf_Portal: function(Portal) {
                Portal.gehe_zu();
            }
        },

        nehmen: {
            auf_Gegenstand: function(Gegenstand) {
                Gegenstand.nehmen();
            }
        }
    },

    Ich: { in: "Silberne_Lichtung" }
}
