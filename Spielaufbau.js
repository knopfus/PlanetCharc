var Spielaufbau = {
    Orte: {

        Silberne_Lichtung:  { zu: "Dschungel_1" },
        Dschungel_1:        { zu: "Silberne_Lichtung" },

        Unerreichbarer_Ort: { }
    },

    Gegenstände: {

        "Klauenspringer-Zahn": { in: "Dschungel_1", links: 470, oben: 287.5, breit: 50, hoch: 85, gedreht: 263 }

    },

    Aktionen: {
        gehe_zu: {
            auf_Ort: function(Spiel) {
                Spiel.gehe_weiter();
            }
        },

        nehmen: {
            auf_Gegenstand: function(Gegenstand, Spiel) {
                Gegenstand.nehmen();
            }
        }
    },

    Ich: { in: "Dschungel_1" }
}
