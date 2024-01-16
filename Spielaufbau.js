var Spielaufbau = {
    Spieler: {
        in: "Silberne_Lichtung",
        Lebenspunkte: 100,
        Kraft: 3
    },

    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            Pfade: [
                [
                    { links: 170,  oben: 110,  Radius: 120, zoom: 100 },
                    { links: 103,  oben: 159, Radius: 120, zoom: 100 },
                    { links: 120,  oben: 270, Radius: 120, zoom: 100 },
                    { links: 145,  oben: 393, Radius: 120, zoom: 100 },
                    { links: 265,  oben: 460, Radius: 120, zoom: 100 },
                    { links: 344,  oben: 534, Radius: 120, zoom: 100 },
                    { links: 410,  oben: 650, Radius: 120, zoom: 100, Kreuzung: true },
                    { links: 570,  oben: 650, Radius: 120, zoom: 100, Start: true },
                    { links: 546,  oben: 554, Radius: 120, zoom: 100 },
                    { links: 500,  oben: 470, Radius: 120, zoom: 100 },
                    { links: 610,  oben: 385, Radius: 120, zoom: 100 },
                    { links: 750,  oben: 380, Radius: 120, zoom: 100 },
                    { links: 831,  oben: 451, Radius: 120, zoom: 100 },
                    { links: 905,  oben: 520, Radius: 120, zoom: 100 },
                    { links: 1010, oben: 557, Radius: 120, zoom: 100 },
                    { links: 1134, oben: 504, Radius: 120, zoom: 100 },
                    { links: 1252, oben: 469, Radius: 120, zoom: 100, Portal: "Dschungel_2" }
                ],[
                    { links: 260,  oben: 650, Radius: 120, zoom: 100, Kreuzung: true },
                    { links: 109,  oben: 662, Radius: 120, zoom: 100, Portal: "Dschungel_1" }
                ]
            ]
        },
        Dschungel_1: {             
            Pfade: [
                [
                    { links: 69,   oben: 426, Radius: 120, zoom: 100, Portal: "Grosse_Wiese" },
                    { links: 203,  oben: 484, Radius: 120, zoom: 100 },
                    { links: 281,  oben: 557, Radius: 120, zoom: 100 },
                    { links: 450,  oben: 570, Radius: 120, zoom: 100 },
                    { links: 569,  oben: 534, Radius: 120, zoom: 100 },
                    { links: 715,  oben: 565, Radius: 120, zoom: 100 },
                    { links: 892,  oben: 511, Radius: 120, zoom: 100 },
                    { links: 898,  oben: 397, Radius: 120, zoom: 100 },
                    { links: 847,  oben: 352, Radius: 120, zoom: 100, Portal: "Berge_der_Angst" },
                    { links: 1120, oben: 387, Radius: 120, zoom: 100 },
                    { links: 1236, oben: 505, Radius: 120, zoom: 100 },
                    { links: 1380, oben: 511, Radius: 120, zoom: 100, Portal: "Silberne_Lichtung" }
                ]
            ]
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
        Grosse_Wiese: {             
            
            Pfade: [
                [
                    { links: 867,  oben: 706, Radius: 120, zoom: 120, Portal: "Dschungel_1" },
                    { links: 914,  oben: 609, Radius: 120, zoom: 100 },
                    { links: 904,  oben: 496, Radius: 120, zoom: 90 },
                    { links: 834,  oben: 449, Radius: 120, zoom: 80 },
                    { links: 707,  oben: 425, Radius: 120, zoom: 70 },
                    { links: 518,  oben: 423, Radius: 120, zoom: 60 },
                    { links: 437,  oben: 397, Radius: 120, zoom: 50, Kreuzung: true },
                    { links: 400,  oben: 318, Radius: 120, zoom: 30 },
                    { links: 302,  oben: 284, Radius: 120, zoom: 20, Portal: "Berge_der_Angst" }
                ],
                [
                    { links: 64,  oben: 454, Radius: 120, zoom: 50, Portal: "Ewiges_Eis" },
                    { links: 209,  oben: 456, Radius: 120, zoom: 50 },
                    { links: 309,  oben: 412, Radius: 120, zoom: 50 },
                    { links: 437,  oben: 397, Radius: 120, zoom: 50, Kreuzung: true },
                    { links: 491,  oben: 378, Radius: 120, zoom: 50 },
                    { links: 614,  oben: 341, Radius: 120, zoom: 50 },
                    { links: 792,  oben: 331, Radius: 120, zoom: 50 },
                    { links: 995,  oben: 359, Radius: 120, zoom: 50 },
                    { links: 1123,  oben: 360, Radius: 120, zoom: 50 },
                    { links: 1229,  oben: 367, Radius: 120, zoom: 50 },
                    { links: 1388,  oben: 365, Radius: 120, zoom: 50 }
                ]
            ]
        },
        Ewiges_Eis: {
            Kürzel: "e",
            Pfade: [
                [
                    {"links":50,"oben":626,"Radius":125.2,"zoom":125.2},
                    {"links":187,"oben":664,"Radius":132.8,"zoom":132.8},
                    {"links":400,"oben":705,"Radius":141,"zoom":141},
                    {"links":653,"oben":677,"Radius":80,"zoom":135.4},
                    {"links":873,"oben":665,"Radius":80,"zoom":133,"Kreuzung":true},
                    {"links":1062,"oben":671,"Radius":80,"zoom":134.2},
                    {"links":1197,"oben":710,"Radius":142,"zoom":142},
                    {"links":1386,"oben":709,"Radius":141.8,"zoom":141.8, Portal: "Grosse_Wiese"}
                ],[
                    {"links":763,"oben":625,"Radius":117,"zoom":117,"Kreuzung":true},
                    {"links":603,"oben":605,"Radius":109,"zoom":109, Portal: "Höhle_Yeti"}
                ]
            ]
        },
        Höhle_Yeti: { Portale: {
            Ost:  { zu: "Ewiges_Eis",           links: 1390, oben: 50, breit: 50, hoch: 611 }
        } },

        Dschungel_2: { 
            
            Pfade: [
                [
                    { links: 1053, oben: 83,  Radius: 120, zoom: 100, Portal: "Silberne_Lichtung" },
                    { links: 966,  oben: 123, Radius: 120, zoom: 100 },
                    { links: 869,  oben: 169, Radius: 120, zoom: 100 },
                    { links: 781,  oben: 213, Radius: 120, zoom: 100 },
                    { links: 694,  oben: 267, Radius: 120, zoom: 100 },
                    { links: 599,  oben: 304, Radius: 120, zoom: 100 },
                    { links: 569,  oben: 478, Radius: 120, zoom: 100 },
                    { links: 469,  oben: 513, Radius: 120, zoom: 100 },
                    { links: 377,  oben: 598, Radius: 120, zoom: 100 },
                    { links: 489,  oben: 664, Radius: 120, zoom: 100 },
                    { links: 610,  oben: 673, Radius: 120, zoom: 100 },
                    { links: 713,  oben: 675, Radius: 120, zoom: 100 },
                    { links: 828,  oben: 639, Radius: 120, zoom: 100 },
                    { links: 791,  oben: 587, Radius: 120, zoom: 100 },
                    { links: 851,  oben: 527, Radius: 120, zoom: 100, Portal: "Fluss" }
                ]
            ]
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
                return true; // Aktion deaktivieren
            },

            auf_Portal: function(Portal) {
                Portal.gehe_zu();
                return true; // Aktion deaktivieren
            }
        },

        nehmen: {
            auf_Gegenstand: function(Gegenstand) {
                Gegenstand.nehmen();
                return true; // Aktion deaktivieren
            }
        },

        kämpfen: {
            auf_Monster: function(Monster, Spiel) {
                Monster.bekämpfen(Spiel.Kraft);
                if (Monster.tot()) {
                    return true; // Aktion deaktivieren
                }
            }
        },

        unsterblich: {
            Entwickler_Modus: true,
            beim_Aktivieren: function(Spiel) {
                Spiel.unsterblich();
                return true; // Aktion deaktivieren
            }
        },

        Weg_Design: {
            Entwickler_Modus: true,
            beim_Aktivieren: function(Spiel) {
                Spiel.Weg_Design_Pfad_Nummer = Spiel.Ort.Weg.Pfade.length;
            },
            auf_Ort: function(Ort, Spiel, event) {
                Ort.Weg.Wegpunkt_hinzufügen(Spiel.Weg_Design_Pfad_Nummer, { links: event.offsetX, oben: event.offsetY, Radius: event.offsetY / 5, zoom: event.offsetY / 5 });
                Ort.Weg.anzeigen();
            },
            auf_Wegpunkt: function(Wegpunkt) {
                Wegpunkt.Eigenschaften.Kreuzung = true;
            },
            beim_Deaktivieren: function(Spiel) {
                Spiel.Weg_Design_Pfad_Nummer = Spiel.Ort.Weg.Pfade.length;
                if (Spiel.Weg_Design_Pfad_Nummer >= 2) {
                    // Nicht mehr als 2 Pfade möglich
                    // -> aufhören zu designen, Wegpunkte ausgeben und Aktion wirklich deaktivieren

                    let json = "Pfade: [\n";
                    for (let i = 0; i < Spiel.Ort.Weg.Pfade.length; i++) {
                        let Pfad = Spiel.Ort.Weg.Pfade[i];
                        if (i > 0) {
                            json += "    ],[\n";
                        } else {
                            json += "    [\n";
                        }

                        let Anzahl = Pfad.length;
                        for (let Wegpunkt of Pfad) {
                            if (Wegpunkt.Nummer < Anzahl - 1) {
                                json += "        " + JSON.stringify(Wegpunkt.Eigenschaften) + ",\n";
                            } else {
                                json += "        " + JSON.stringify(Wegpunkt.Eigenschaften) + "\n";
                            }
                        }
                    }
                    json += "    ]\n";
                    json += "]\n";
                    console.log(json);       

                    return true;
                }
            }
        }
    }
}
