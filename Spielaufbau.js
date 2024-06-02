var Spielaufbau = {
    Spieler: {
        in: "Silberne_Lichtung",
        Lebenspunkte: 100,
        Kraft: 3
    },

    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            feststellen: "Er musste mit seinem Volk vom Planeten fliehen, der von einem unmittelbaren Kometeneinschlag bedroht war. Aber er verpasste den Abflug mit dem Ortschiff und konnte sich nur noch aussen festhalten, wobei er auf dem Flug zum Ziel-Planeten den Halt verlor und auf dem Planeten CHARC landete. Deshalb muss er sich nun zurechtfinden, sich ernähren und zugleich versuchen mit seinem Volk Kontakt aufzunehmen um abgeholt zu werden.\n\nKlicke hier um zu starten.",
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
                    {"links":940,"oben":493,"Radius":98.6,"zoom":98.6, Kreuzung: true},
                    {"links":1095,"oben":456,"Radius":91.2,"zoom":91.2},
                    {"links":977,"oben":397,"Radius":79.4,"zoom":79.4},
                    {"links":1084,"oben":362,"Radius":72.4,"zoom":72.4}
                ],[
                    {"links":840,"oben":434,"Radius":86.8,"zoom":86.8, Kreuzung: true},
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
        Fluss: {
            Portale: {
                Nord: { zu: "Quelle_des_Lichts",    links: 50, oben: 0, breit: 1340, hoch: 50 },
                West: { zu: "Dschungel_2",          links: 0, oben: 50, breit: 50, hoch: 611 }
            },
            Pfade: [
                [
                    {"links":58,"oben":556,"Radius":111.2,"zoom":111.2, Portal: "Dschungel_2"},
                    {"links":232,"oben":532,"Radius":106.4,"zoom":106.4},
                    {"links":343,"oben":455,"Radius":91,"zoom":91},
                    {"links":277,"oben":383,"Radius":76.6,"zoom":76.6},
                    {"links":366,"oben":359,"Radius":71.8,"zoom":71.8},
                    {"links":473,"oben":385,"Radius":77,"zoom":77},
                    {"links":591,"oben":387,"Radius":77.4,"zoom":77.4},
                    {"links":701,"oben":378,"Radius":75.6,"zoom":75.6},
                    {"links":809,"oben":357,"Radius":71.4,"zoom":71.4},
                    {"links":925,"oben":341,"Radius":68.2,"zoom":68.2, Portal: "Quelle_des_Lichts"}
                ]
            ],
            Kürzel: "f"
        },
        Grotte_des_Lichts: {
            Kürzel: "g",
            Pfade: [
                [
                    {"links":504,"oben":667,"Radius":133.4,"zoom":133.4},
                    {"links":255,"oben":521,"Radius":104.2,"zoom":104.2},
                    {"links":410,"oben":381,"Radius":76.2,"zoom":76.2},
                    {"links":560,"oben":365,"Radius":73,"zoom":73},
                    {"links":676,"oben":370,"Radius":74,"zoom":74},
                    {"links":843,"oben":402,"Radius":80.4,"zoom":80.4},
                    {"links":948,"oben":354,"Radius":70.8,"zoom":70.8},
                    {"links":1053,"oben":296,"Radius":59.2,"zoom":59.2,Portal:"offene_Quelle_des_Lichts"}
                ]
            ]
        },
        Quelle_des_Lichts: { 
            Kürzel: "q",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"zoom":54, Portal: "Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"zoom":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"zoom":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"zoom":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"zoom":61.2},
                    {"links":805,"oben":315,"Radius":63,"zoom":63},
                    {"links":897,"oben":323,"Radius":64.6,"zoom":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"zoom":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"zoom":87.4},
                    {"links":996,"oben":510,"Radius":102,"zoom":102},
                    {"links":1091,"oben":594,"Radius":118.8,"zoom":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"zoom":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"zoom":131.912},
                    {"links":1409,"oben":695,"Radius":139,"zoom":139, Portal: "Fluss"}
                ]
            ]
        },
        offene_Quelle_des_Lichts: { 
            Kürzel: "o",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"zoom":54,"Portal":"Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"zoom":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"zoom":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"zoom":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"zoom":61.2},
                    {"links":805,"oben":315,"Radius":63,"zoom":63},
                    {"links":897,"oben":323,"Radius":64.6,"zoom":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"zoom":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"zoom":87.4},
                    {"links":996,"oben":510,"Radius":102,"zoom":102,Kreuzung:true},
                    {"links":1091,"oben":594,"Radius":118.8,"zoom":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"zoom":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"zoom":131.912},
                    {"links":1409,"oben":695,"Radius":139,"zoom":139,"Portal":"Fluss"}
                ],[
                    {"links":896,"oben":552,"Radius":50,"zoom":110.4,Kreuzung:true},
                    {"links":782,"oben":564,"Radius":50,"zoom":112.8},
                    {"links":668,"oben":552,"Radius":50,"zoom":110.4},
                    {"links":550,"oben":486,"Radius":97.2,"zoom":97.2},
                    {"links":714,"oben":465,"Radius":150,"zoom":89, Portal: "Grotte_des_Lichts"}
                ]
            ]
        },

        aktivierte_Quelle_des_Lichts: { 
            Kürzel: "a",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"zoom":54,"Portal":"Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"zoom":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"zoom":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"zoom":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"zoom":61.2},
                    {"links":805,"oben":315,"Radius":63,"zoom":63},
                    {"links":897,"oben":323,"Radius":64.6,"zoom":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"zoom":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"zoom":87.4},
                    {"links":996,"oben":510,"Radius":102,"zoom":102,Kreuzung:true},
                    {"links":1091,"oben":594,"Radius":118.8,"zoom":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"zoom":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"zoom":131.912},
                    {"links":1409,"oben":695,"Radius":139,"zoom":139,"Portal":"Fluss"}
                ],[
                    {"links":896,"oben":552,"Radius":50,"zoom":110.4,Kreuzung:true},
                    {"links":782,"oben":564,"Radius":50,"zoom":112.8},
                    {"links":668,"oben":552,"Radius":50,"zoom":110.4},
                    {"links":550,"oben":486,"Radius":97.2,"zoom":97.2},
                    {"links":714,"oben":465,"Radius":150,"zoom":89, Portal: "Grotte_des_Lichts"}
                ]
            ]
        },

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


        Unerreichbarer_Ort: { Kürzel: "x" }
    },

    Gegenstände: {

        "Klauenspringer-Zahn": {
            in: "Unerreichbarer_Ort",
            feststellen: "Oh, da ist etwas liegen geblieben. Sieht aus wie ein Zahn von diesem Monster.",
            links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 263
        },

        "Lavawelt_Mechanik_Kreuz": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbolen in ihrer Anordnungen sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192, breit: 591, hoch: 513,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Wasser": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbolen in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192, breit: 306, hoch: 220,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Pflanze": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbolen in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453+345, oben: 192, breit: 246, hoch: 255,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Feuer": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbolen in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192+234, breit: 265, hoch: 236,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Wind": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbolen in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453+305, oben: 192+295, breit: 285, hoch: 218,
            Zustand: "aus"
        },
        "Mondblume": {
            feststellen: "Diese Blumen leuchten so magisch und duften herrlich, da würde ich am liebsten reinbeissen.",
            mehrere: [
                { in: "Silberne_Lichtung", links: 840, oben: 575, breit: 40, hoch: 40 / 685 * 845, gedreht: 0 },
                { in: "Silberne_Lichtung", links: 1040, oben: 515, breit: 28, hoch: 32 / 685 * 845, gedreht: 10 },
                { in: "Silberne_Lichtung", links: 1011, oben: 515, breit: 35, hoch: 35 / 685 * 845, gedreht: -10 }
            ],
            anwenden: function(Gegenstand, Spiel) {
                if (Spiel.Lebenspunkte < Spielaufbau.Spieler.Lebenspunkte) {
                    Spiel.Lebenspunkte_verändern(10);
                    Gegenstand.aus_Besitz_entfernen();
                    Gegenstand.regeneriere_in(10);

                    Spiel.Spieler.feststellen("Mhm, die war fein. Jetzt fühle mich wieder gestärkt!");
                } else {
                    Gegenstand.aus_Besitz_entfernen();

                    Spiel.Spieler.feststellen("Mhm, lecker... irgendwie bin ich jetzt etwas high!");
                    Gegenstand.regeneriere_in(10);
                }
                return true;
            }
        },

        "Lichtkristall_Einkerbung": {
            in: "Grotte_des_Lichts",
            links: 155, oben: 455, breit: 50, hoch: 85, gedreht: 0,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Lichtkristall") {
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.leuchtender_Lichtkristall.platziere_in(Spiel.Orte.Grotte_des_Lichts);
                    Spiel.Quelle_des_Lichts_aktivieren();
                } else {
                    return true;
                }
            }
        },
        "leuchtender_Lichtkristall": {
            in: "Unerreichbarer_Ort",
            links: 155, oben: 455, breit: 50, hoch: 85, gedreht: 0,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                // TO DO: Was soll hier passieren (wenn der Lichtkristall angewendet wird?)
                
            }
        },
        "Lichtkristall": {
            in: "Unerreichbarer_Ort",
            links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 0,
            anwenden: function(Gegenstand, Spiel) {
                // Noch nichts zu tun, der Gegenstand soll auf etwas angewendet werden können, daher Aktion
                // nicht deaktivieren
                return false;
            }
        }

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

    Mechaniken: {
        Lavawelt_Mechanik: {
            Zugehörige_Gegenstände: [ "Lavawelt_Mechanik_Pflanze","Lavawelt_Mechanik_Wasser","Lavawelt_Mechanik_Feuer","Lavawelt_Mechanik_Wind" ],
            Richtiger_Code: [ "Lavawelt_Mechanik_Pflanze","Lavawelt_Mechanik_Wasser","Lavawelt_Mechanik_Feuer","Lavawelt_Mechanik_Wind" ],

            gelöst: function(Spiel) {
                Spiel.Wasserfall_teilen();
            }
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
                if (sind_näher_als(Spiel.Spieler.Koordinaten, Gegenstand.Eigenschaften, 200)) {
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

        anwenden: {
            auf_Gegenstand_in_Besitz: function(Gegenstand, Spiel, Aktion) {
                let deaktivieren = Gegenstand.anwenden();
                if (deaktivieren) {
                    // Dies trifft auf Gegenstände zu, die man direkt anwenden kann, z.B. Mondblumen
                    // => Wir geben true zurück um die Aktion wieder zu deaktivieren
                    return true;
                } else {
                    // Wenn der Gegenstand im Besitz beim anwenden "false" zurück gab, d.h. die Aktion wird
                    // noch nicht deaktiviert, bedeutet das, dass der Gegenstand auf etwas im Ort angewendet
                    // werden kann. Wir merken uns den Gegenstand.
                    Aktion.Status.anzuwendender_Gegenstand_Name = Gegenstand.Name;
                    return false; // Aktion noch nicht deaktivieren
                }
            },
            auf_Gegenstand: function(Gegenstand, Spiel, Aktion) {
                // Wenn man bei der Aktion "anwenden" zuerst auf einen Gegenstand in Besitz geklickt hat, der
                // auf etwas anderes angewendet werden kann, dann wenden wir diesen jetzt auf den betroffenen
                // Gegenstand an (sofern er das kann)
                if (Aktion.Status.anzuwendender_Gegenstand_Name) {
                    let deaktivieren = Gegenstand.anderen_Gegenstand_auf_diesen_anwenden(Aktion.Status.anzuwendender_Gegenstand_Name);
                    return deaktivieren;
                }
            },
            beim_Deaktivieren: function(Spiel, Aktion) {
                if (Aktion.Status.anzuwendender_Gegenstand_Name) {
                    delete Aktion.Status.anzuwendender_Gegenstand_Name; // Keinen Gegenstand mehr merken
                }
                return true;
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
            },
            auf_Gegenstand_in_Besitz: function(Gegenstand) {
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
