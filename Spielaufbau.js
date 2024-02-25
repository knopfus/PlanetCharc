var Spielaufbau = {
    Spieler: {
        in: "Silberne_Lichtung",
        Lebenspunkte: 100,
        Kraft: 3
    },

    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            feststellen: "Hallo Gavin!\n" +
                "Der Entwicklermodus ist jetzt richtig cool geworden:\n" +
                "Mit dem Weg-Designer kannst du Wege mit Mausklicks erstellen.\n" +
                "1. Aktivieren\n" +
                "2. Wegpunkte für den Pfad 0 per Klick erzeugen\n" +
                "3. Auf Aktion klicken (wie zum Deaktivieren, aber Aktion wird noch nicht deaktiviert)\n" +
                "4. Wegpunkte für den Pfad 1 per Klick erzeugen\n" +
                "5. Auf die Wegpunkte der beiden Pfade klicken, die als Kreuzung dienen sollen\n" +
                "6. Aktion deaktivieren, das JSON wird automatisch in der Konsole ausgegeben und kann kopiert werden.",
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
        Berge_der_Angst: {
            Kürzel: "b",
            Pfade: [
                [
                    {"links":3,"oben":642,"Radius":126.4,"zoom":126.4,Portal:"Grosse_Wiese"},
                    {"links":309,"oben":664,"Radius":130.8,"zoom":130.8},
                    {"links":577,"oben":707,"Radius":139.4,"zoom":139.4},
                    {"links":880,"oben":725,"Radius":120,"zoom":141,"Kreuzung":true},
                    {"links":1193,"oben":738,"Radius":140,"zoom":141.6},
                    {"links":1434,"oben":748,"Radius":140,"zoom":141.6,Portal: "Lavawelt"}
                ],[
                    {"links":884,"oben":720,"Radius":10,"zoom":100,"Kreuzung":true},
                    {"links":945,"oben":720,"Radius":10,"zoom":80},
                    {"links":930.4,"oben":707.4,"Radius":10,"zoom":70},
                    {"links":875.6,"oben":695.6,"Radius":10,"zoom":60},
                    {"links":841.92,"oben":663.92,"Radius":10,"zoom":50},
                    {"links":912.48,"oben":643.48,"Radius":10,"zoom":40},
                    {"links":977.784,"oben":621.784,"Radius":10,"zoom":30},
                    {"links":1056.84704,"oben":607.84704,"Radius":120,"zoom":20, Portal: "Gipfel"}
                ]
            ]
        },
        Gipfel: { 
            
            Pfade: [
                [
                    {"links":10,"oben":494,"Radius":98.8,"zoom":98.8},
                    {"links":230,"oben":519,"Radius":103.8,"zoom":103.8},
                    {"links":432,"oben":527,"Radius":105.4,"zoom":105.4},
                    {"links":665,"oben":534,"Radius":106.8,"zoom":106.8},
                    {"links":940,"oben":493,"Radius":98.6,"zoom":98.6},
                    {"links":1095,"oben":456,"Radius":91.2,"zoom":91.2},
                    {"links":977,"oben":397,"Radius":79.4,"zoom":79.4},
                    {"links":1084,"oben":362,"Radius":72.4,"zoom":72.4}
                ],[
                    {"links":840,"oben":434,"Radius":86.8,"zoom":86.8},
                    {"links":720,"oben":394,"Radius":78.8,"zoom":78.8},
                    {"links":616,"oben":333,"Radius":66.6,"zoom":66.6},
                    {"links":577,"oben":276,"Radius":55.2,"zoom":55.2}
                ]
            ],
            
            Portale: {
                Nord: { zu: "Nichts",               links: 50, oben: 0, breit: 1340, hoch: 50 },
                Ost:  { zu: "Berge_der_Angst",      links: 1390, oben: 50, breit: 50, hoch: 611 }
            }
        },
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
        Höhle_Yeti: {
            Kürzel: "y",
            Pfade: [
                [
                    {"links":1422,"oben":703,"Radius":140.6,"zoom":140.6, Portal: "Ewiges_Eis" },
                    {"links":1137,"oben":704,"Radius":140.8,"zoom":140.8},
                    {"links":614,"oben":653,"Radius":130.6,"zoom":130.6},
                    {"links":530,"oben":551,"Radius":110.2,"zoom":110.2},
                    {"links":805,"oben":542,"Radius":108.4,"zoom":108.4},
                    {"links":956,"oben":477,"Radius":95.4,"zoom":95.4},
                    {"links":595,"oben":421,"Radius":84.2,"zoom":84.2},
                    {"links":467,"oben":372,"Radius":74.4,"zoom":74.4}
                ]
            ]
        },

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
        Lavawelt: {
            Kürzel: "l",
            Pfade: [
                [
                    {"links":71,"oben":336,"Radius":67.2,"zoom":67.2,Portal: "Berge_der_Angst"},
                    {"links":99,"oben":414,"Radius":82.8,"zoom":82.8},
                    {"links":186,"oben":360,"Radius":72,"zoom":72, Portal: "Lavawelt_Mechanik"},
                    {"links":194,"oben":471,"Radius":94.2,"zoom":94.2},
                    {"links":312,"oben":444,"Radius":88.8,"zoom":88.8},
                    {"links":435,"oben":416,"Radius":83.2,"zoom":83.2}
                ],[
                    {"links":1428,"oben":398,"Radius":79.6,"zoom":79.6, Portal: "Quelle_des_Lichts"},
                    {"links":1325,"oben":450,"Radius":90,"zoom":90},
                    {"links":1205,"oben":454,"Radius":90.8,"zoom":90.8},
                    {"links":1114,"oben":412,"Radius":82.4,"zoom":82.4},
                    {"links":1026,"oben":397,"Radius":79.4,"zoom":79.4},
                    {"links":914,"oben":394,"Radius":78.8,"zoom":78.8},
                    {"links":801,"oben":368,"Radius":73.6,"zoom":73.6},
                    {"links":691,"oben":340,"Radius":68,"zoom":68, Portal: "Reich_des_Giganten"}
                ]
            ]
        },
    
        Lavawelt_Mechanik: {
            Kürzel: "m",
            Portale: {
                Nord: { zu: "Lavawelt",         links: 50, oben: 0, breit: 1340, hoch: 155 },
                Ost:  { zu: "Lavawelt",         links: 1130, oben: 50, breit: 310, hoch: 661 },
                West: { zu: "Lavawelt",         links: 0, oben: 50, breit: 379, hoch: 661 }
            },
            Pfade: [
                [
                    {"links":-100,"oben":336,"Radius":67.2,"zoom":67.2,Portal: "Lavawelt"}
                ]
            ]
        },

        Reich_des_Giganten: { 
            Pfade: [
                [
                    {"links":65,"oben":369,"Radius":73.8,"zoom":73.8, Portal: "Lavawelt"},
                    {"links":145,"oben":399,"Radius":79.8,"zoom":79.8},
                    {"links":225,"oben":448,"Radius":89.6,"zoom":89.6},
                    {"links":325,"oben":488,"Radius":97.6,"zoom":97.6},
                    {"links":437,"oben":496,"Radius":99.2,"zoom":99.2},
                    {"links":561,"oben":482,"Radius":96.4,"zoom":96.4,"Kreuzung":true},
                    {"links":680,"oben":491,"Radius":98.2,"zoom":98.2},
                    {"links":808,"oben":506,"Radius":101.2,"zoom":101.2},
                    {"links":924,"oben":550,"Radius":110,"zoom":110},
                    {"links":1066,"oben":568,"Radius":113.6,"zoom":113.6},
                    {"links":1205,"oben":582,"Radius":116.4,"zoom":116.4},
                    {"links":1379,"oben":550,"Radius":110,"zoom":110},
                    {"links":1324,"oben":425,"Radius":85,"zoom":85},
                    {"links":1250,"oben":369,"Radius":73.8,"zoom":73.8},
                    {"links":1334,"oben":307,"Radius":61.4,"zoom":61.4}
                ]
            ],
            
            Kürzel: "r"
        },

        Nichts: { Portale: {
            Süd: { zu: "Gipfel",                links: 50, oben: 661, breit: 1340, hoch: 50}
        } },
    

        Unerreichbarer_Ort: { }
    },

    Gegenstände: {

        "Klauenspringer-Zahn": {
            in: "Unerreichbarer_Ort",
            feststellen: "Oh, da ist etwas liegen geblieben. Sieht aus wie ein Zahn von diesem Monster.",
            links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 263
        },

        "Lavawelt_Mechanik_Kreuz": {
            in: "Lavawelt_Mechanik",
            feststellen: "Sieht aus als ob ich hier irgendetwas drücken muss.",
            links: 453, oben: 192, breit: 591, hoch: 513
        },
        "Lavawelt_Mechanik_Wasser": {
            in: "Lavawelt_Mechanik",
            feststellen: "Sieht aus als ob ich hier irgendetwas drücken muss.",
            links: 453, oben: 192, breit: 306, hoch: 220
        },
        "Lavawelt_Mechanik_Pflanze": {
            in: "Lavawelt_Mechanik",
            feststellen: "Sieht aus als ob ich hier irgendetwas drücken muss.",
            links: 453+345, oben: 192, breit: 246, hoch: 255
        },
        "Lavawelt_Mechanik_Feuer": {
            in: "Lavawelt_Mechanik",
            feststellen: "Sieht aus als ob ich hier irgendetwas drücken muss.",
            links: 453, oben: 192+234, breit: 265, hoch: 236
        },
        "Lavawelt_Mechanik_Wind": {
            in: "Lavawelt_Mechanik",
            feststellen: "Sieht aus als ob ich hier irgendetwas drücken muss.",
            links: 453+305, oben: 192+295, breit: 285, hoch: 218
        },

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
            auf_Gegenstand: function(Gegenstand, Spiel) {
                if (sind_näher_als(Spiel.Spieler.Koordinaten, Gegenstand.Eigenschaften, 100)) {
                    Gegenstand.nehmen();
                } else {
                    Spiel.Spieler.feststellen("Das ist zu weit weg, ich komme da nicht ran.");
                }
                return true; // Aktion deaktivieren
            }
        },

        drücken: {
            auf_Gegenstand: function(Gegenstand, Spiel) {
                Gegenstand.drücken();
                
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

        anschauen: {
            auf_Gegenstand: function(Gegenstand) {
                Gegenstand.anschauen();
                return true; // Aktion deaktivieren
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
            beim_Aktivieren: function(Spiel, Aktion) {
                Aktion.Status.Weg_Design_Pfad_Nummer = 0;
            },
            auf_Ort: function(Ort, Spiel, Aktion, event) {
                let links = event.offsetX;
                let oben = event.offsetY;
                let Pfad_Nummer = Aktion.Status.Weg_Design_Pfad_Nummer;
                Ort.Weg.Wegpunkt_hinzufügen(Pfad_Nummer, { links: links, oben: oben, Radius: oben / 5, zoom: oben / 5 });
                Ort.Weg.anzeigen();
            },
            auf_Wegpunkt: function(Wegpunkt, Spiel, Aktion, event) {
                let links = Wegpunkt.Eigenschaften.links - Wegpunkt.Eigenschaften.Radius + event.offsetX;
                let oben = Wegpunkt.Eigenschaften.oben - Wegpunkt.Eigenschaften.Radius + event.offsetY;
                let Pfad_Nummer = Aktion.Status.Weg_Design_Pfad_Nummer;
                Wegpunkt.Weg.Wegpunkt_hinzufügen(Pfad_Nummer, { links: links, oben: oben, Radius: oben / 5, zoom: oben / 5 });
                Wegpunkt.Weg.anzeigen();
            },
            beim_Deaktivieren: function(Spiel, Aktion) {
                Aktion.Status.Weg_Design_Pfad_Nummer++;
                if (Aktion.Status.Weg_Design_Pfad_Nummer >= 2) {
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
