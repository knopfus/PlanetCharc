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
