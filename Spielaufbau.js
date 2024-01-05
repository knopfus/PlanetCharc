var Spielaufbau = {
    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            Wegpunkte: [
                { links: 170,  oben: 70,  Radius: 50, zoom: 100 },
                { links: 103,  oben: 159, Radius: 50, zoom: 100 },
                { links: 120,  oben: 270, Radius: 50, zoom: 100 },
                { links: 145,  oben: 393, Radius: 50, zoom: 100 },
                { links: 265,  oben: 460, Radius: 50, zoom: 100 },
                { links: 344,  oben: 534, Radius: 50, zoom: 100 },
                { links: 410,  oben: 650, Radius: 50, zoom: 100 },
                { links: 570,  oben: 650, Radius: 50, zoom: 100 },
                { links: 546,  oben: 554, Radius: 50, zoom: 100 },
                { links: 500,  oben: 470, Radius: 50, zoom: 100 },
                { links: 610,  oben: 405, Radius: 50, zoom: 100 },
                { links: 750,  oben: 400, Radius: 50, zoom: 100 },
                { links: 831,  oben: 451, Radius: 50, zoom: 100 },
                { links: 905,  oben: 520, Radius: 50, zoom: 100 },
                { links: 1705, oben: 505, Radius: 50, zoom: 100 },
                { links: 1010, oben: 557, Radius: 50, zoom: 100 },
                { links: 1134, oben: 504, Radius: 50, zoom: 100 },
                { links: 1252, oben: 469, Radius: 50, zoom: 100 }
            ],
            Portale: {
                West: { zu: "Dschungel_1",      links: 0, oben: 50, breit: 50, hoch: 611 },
                Ost:  { zu: "Dschungel_2",      links: 1390, oben: 50, breit: 50, hoch: 611 }
            }
        },
        Dschungel_1: {             
            
            Portale: {
                Nord: { zu: "Berge_der_Angst",      links: 50, oben: 0, breit: 1340, hoch: 50 },
                Ost:  { zu: "Silberne_Lichtung",    links: 1390, oben: 50, breit: 50, hoch: 611 },
                West: { zu: "Grosse_Wiese",         links: 0, oben: 50, breit: 50, hoch: 611 }
            } 
        },
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

        Dschungel_2: { 
            
            Wegpunkte: [
                { links: 1053, oben: 83,  Radius: 50, zoom: 100 },
                { links: 966,  oben: 123, Radius: 50, zoom: 100 },
                { links: 869,  oben: 169, Radius: 50, zoom: 100 },
                { links: 781,  oben: 213, Radius: 50, zoom: 100 },
                { links: 694,  oben: 267, Radius: 50, zoom: 100 },
                { links: 599,  oben: 304, Radius: 50, zoom: 100 },
                { links: 569,  oben: 478, Radius: 50, zoom: 100 },
                { links: 469,  oben: 513, Radius: 50, zoom: 100 },
                { links: 377,  oben: 598, Radius: 50, zoom: 100 },
                { links: 489,  oben: 664, Radius: 50, zoom: 100 },
                { links: 610,  oben: 673, Radius: 50, zoom: 100 },
                { links: 713,  oben: 675, Radius: 50, zoom: 100 },
                { links: 828,  oben: 639, Radius: 50, zoom: 100 },
                { links: 791,  oben: 587, Radius: 50, zoom: 100 },
                { links: 851,  oben: 527, Radius: 50, zoom: 100 }
                
            ],
            
            Portale: {
                Ost:  { zu: "Fluss",                links: 1390, oben: 50, breit: 50, hoch: 611 },
                West: { zu: "Silberne_Lichtung",    links: 0, oben: 50, breit: 50, hoch: 611 }
            } 
        },
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

        "Klauenspringer-Zahn": { in: "Unerreichbarer_Ort", links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 263 },

        "Lichtkristall": { in: "Unerreichbarer_Ort", links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 0 }

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
        "Yeti": {
            Orte: [
                { in: "Höhle_Yeti", links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0 }            
            ],
    
            Lebenspunkte: 110,
            Kraft: 9,

            Belohnung: "Lichtkristall"
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
            auf_Wegpunkt: function(Wegpunkt) {
                Wegpunkt.gehe_zu();
            },

            auf_Portal: function(Portal) {
                Portal.gehe_zu();
            },

            auf_Ort: function(Ort, Spiel, event) {
                Spiel.Spieler.gehe_zu({ links: event.offsetX, oben: event.offsetY, breite: 150, höhe: 150 });
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
