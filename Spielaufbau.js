var Spielaufbau = {
    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: { Portale: {
            Nord: { zu: "Dschungel_1",          links: 50, oben: 0, breit: 1340, hoch: 50 },
            Ost:  { zu: "Dschungel_2",          links: 1390, oben: 50, breit: 50, hoch: 611 }
        } },
        Dschungel_1: { Portale: {
            Nord: { zu: "Berge_der_Angst",      links: 50, oben: 0, breit: 1340, hoch: 50 },
            Süd:  { zu: "Silberne_Lichtung",    links: 50, oben: 661, breit: 1340, hoch: 50 },
            West: { zu: "Grosse_Wiese",         links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Berge_der_Angst: { Portale: {
            Ost:  { zu: "Lavawelt",             links: 1390, oben: 50, breit: 50, hoch: 611 },
            Süd:  { zu: "Grosse_Wiese",         links: 50, oben: 661, breit: 1340, hoch: 50 },
            West: { zu: "Gipfel",               links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Gipfel: { Portale: {
            Nord: { zu: "Nichts",               links: 50, oben: 0, breit: 1340, hoch: 50 },
            Ost:  { zu: "Berge_der_Angst",      links: 1390, oben: 50, breit: 50, hoch: 611 }
        } },
        Grosse_Wiese: { Portale: {
            Nord: { zu: "Berge_der_Angst",      links: 50, oben: 0, breit: 1340, hoch: 50 },
            Ost:  { zu: "Dschungel_1",          links: 1390, oben: 50, breit: 50, hoch: 611 },
            West: { zu: "Ewiges_Eis",           links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Ewiges_Eis: { Portale: {
            Ost:  { zu: "Grosse_Wiese",         links: 1390, oben: 50, breit: 50, hoch: 611 },
            West: { zu: "Höhle_Yeti",           links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Höhle_Yeti: { Portale: {
            Ost:  { zu: "Ewiges_Eis",           links: 1390, oben: 50, breit: 50, hoch: 611 }
        } },

        Dschungel_2: { Portale: {
            Ost:  { zu: "Fluss",                links: 1390, oben: 50, breit: 50, hoch: 611 },
            West: { zu: "Silberne_Lichtung",    links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Fluss: { Portale: {
            Nord: { zu: "Quelle_des_Lichts",    links: 50, oben: 0, breit: 1340, hoch: 50 },
            West: { zu: "Dschungel_2",          links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Quelle_des_Lichts: { Portale: {
            Nord: { zu: "Lavawelt",             links: 50, oben: 0, breit: 1340, hoch: 50 },
            Süd:  { zu: "Fluss",                links: 50, oben: 661, breit: 1340, hoch: 50 }
        } },
        Lavawelt: { Portale: {
            Ost:  { zu: "Reich_des_Giganten",   links: 1390, oben: 50, breit: 50, hoch: 611 },
            Süd:  { zu: "Quelle_des_Lichts",    links: 50, oben: 661, breit: 1340, hoch: 50 },
            West: { zu: "Berge_der_Angst",      links: 0, oben: 50, breit: 50, hoch: 611 }
        } },
        Reich_des_Giganten: { Portale: {
            West: { zu: "Lavawelt",             links: 0, oben: 50, breit: 50, hoch: 611 }
        } },

        Nichts: { Portale: {
            Süd: { zu: "Gipfel",                links: 50, oben: 661, breit: 1340, hoch: 50}
        } },
    

        Unerreichbarer_Ort: { }
    },

    Gegenstände: {

        "Klauenspringer-Zahn": { in: "Unerreichbarer_Ort", links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 263 }

    },

    Monster: {
        "Klauenspringer": {
            Orte: [
                { in: "Lavawelt", links: 420, oben: 255, breit: 150, hoch: 150, gedreht: 0 },
                { in: "Unerreichbarer_Ort" }
            ],
    
            Lebenspunkte: 100,
            Kraft: 7,

            Belohnung: "Klauenspringer-Zahn"
        },
        "Zwerggreif": {
            Orte: [
                { in: "Dschungel_1", links: 1023, oben: 176, breit: 108, hoch: 108, gedreht: 10 },
                { in: "Unerreichbarer_Ort" }
            ],
    
            Lebenspunkte: 80,
            Kraft: 7
        }    
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
        },

        kämpfen: {
            auf_Monster: function(Monster, Spiel) {
                Monster.bekämpfen(Spiel.Kraft);
            }
        },

        unsterblich: {
            auf_Ort: function(Ort, Spiel) {
                Spiel.unsterblich();
            }
        }
    },

    Spieler: {
        in: "Silberne_Lichtung",
        Lebenspunkte: 100,
        Kraft: 20
    }
}
