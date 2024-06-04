var Spielaufbau = {
    Spieler: {
        in: "Silberne_Lichtung",
        Lebenspunkte: 100,
        Kraft: 3
    },

    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            Kürzel: "s",
            feststellen: "Er musste mit seinem Volk vom Planeten fliehen, der von einem unmittelbaren Kometeneinschlag bedroht war. Aber er verpasste den Abflug mit dem Ortschiff und konnte sich nur noch aussen festhalten, wobei er auf dem Flug zum Ziel-Planeten den Halt verlor und auf dem Planeten CHARC landete. Deshalb muss er sich nun zurechtfinden, sich ernähren und zugleich versuchen mit seinem Volk Kontakt aufzunehmen um abgeholt zu werden.\n\nKlicke hier um zu starten.",
            Pfade: [
                [
                    {"links":4,"oben":705,"vorne":230,"Radius":253, Portal: "Dschungel_1" },
                    {"links":551,"oben":652,"vorne":150,"Radius":5, Kreuzung: true, Start: true},
                    {"links":493,"oben":526,"vorne":138,"Radius":5},
                    {"links":557,"oben":398,"vorne":130,"Radius":5},
                    {"links":771,"oben":368,"vorne":96,"Radius":7},
                    {"links":859,"oben":496,"vorne":74,"Radius":5},
                    {"links":927,"oben":544,"vorne":103,"Radius":174},
                    {"links":1110,"oben":481,"vorne":77,"Radius":6},
                    {"links":1409,"oben":458,"vorne":65,"Radius":218, Portal: "Dschungel_2"}
                ],[
                    {"links":399,"oben":640,"vorne":197,"Radius":7, Kreuzung: true},
                    {"links":160,"oben":375,"vorne":191,"Radius":144}
                ]
            ]
        },
        Dimension_der_Kätzchen: {
            Kürzel: "k",
            feststellen: "Miau.",
        },
        Dschungel_1: {             
            Pfade: [
                [
                    {"links":49,"oben":473,"vorne":156,"Radius":216, Portal: "Grosse_Wiese"},
                    {"links":383,"oben":527,"vorne":149,"Radius":5, Kreuzung: true},
                    {"links":811,"oben":529,"vorne":144,"Radius":168},
                    {"links":1031,"oben":457,"vorne":123,"Radius":4},
                    {"links":1203,"oben":509,"vorne":146,"Radius":3},
                    {"links":1415,"oben":584,"vorne":191,"Radius":191, Portal: "Silberne_Lichtung"}
                ],[
                    {"links":495,"oben":424,"vorne":68,"Radius":2, Kreuzung: true},
                    {"links":520,"oben":347,"vorne":17,"Radius":116, Portal: "Berge_der_Angst"}
                ]
            ]
        },
        Berge_der_Angst: {
            Kürzel: "b",
            Pfade: [
                [
                    {"links":8,"oben":694,"vorne":147,"Radius":208,Portal:"Grosse_Wiese"},
                    {"links":239,"oben":681,"vorne":148,"Radius":4},
                    {"links":1010,"oben":759,"vorne":160,"Radius":1, Kreuzung: true},
                    {"links":1230,"oben":776,"vorne":156,"Radius":4},
                    {"links":1435,"oben":797,"vorne":189,"Radius":254,Portal: "Lavawelt"}
                ],[
                    {"links":925,"oben":715,"vorne":36,"Radius":2, Kreuzung: true},
                    {"links":850,"oben":683,"vorne":21,"Radius":3},
                    {"links":1060,"oben":610,"vorne":14,"Radius":142, Portal: "Gipfel"}
                ]
            ]
        },
        Gipfel: { 
            
            Pfade: [
                [
                    {"links":10,"oben":494,"Radius":98.8,"vorne":98.8, Portal: "Berge_der_Angst"},
                    {"links":230,"oben":519,"Radius":103.8,"vorne":103.8},
                    {"links":432,"oben":527,"Radius":105.4,"vorne":105.4},
                    {"links":665,"oben":534,"Radius":106.8,"vorne":106.8},
                    {"links":940,"oben":493,"Radius":98.6,"vorne":98.6, Kreuzung: true},
                    {"links":1095,"oben":456,"Radius":91.2,"vorne":91.2},
                    {"links":977,"oben":397,"Radius":79.4,"vorne":79.4},
                    {"links":1084,"oben":362,"Radius":72.4,"vorne":72.4}
                ],[
                    {"links":840,"oben":434,"Radius":86.8,"vorne":86.8, Kreuzung: true},
                    {"links":720,"oben":394,"Radius":78.8,"vorne":78.8},
                    {"links":616,"oben":333,"Radius":66.6,"vorne":66.6},
                    {"links":577,"oben":276,"Radius":55.2,"vorne":55.2, Portal: "Nichts" }
                ]
            ]
        },
        Grosse_Wiese: {             
            Kürzel: "w",
            Pfade: [
                [
                    {"links":887,"oben":795,"vorne":150,"Radius":250, Portal: "Dschungel_1"},
                    {"links":887,"oben":685,"vorne":145,"Radius":3},
                    {"links":921,"oben":474,"vorne":92,"Radius":3},
                    {"links":658,"oben":423,"vorne":67,"Radius":3},
                    {"links":440,"oben":416,"vorne":60,"Radius":4, Kreuzung: true},
                    {"links":176,"oben":384,"vorne":37,"Radius":5},
                    {"links":405,"oben":360,"vorne":24,"Radius":2},
                    {"links":411,"oben":334,"vorne":13,"Radius":3},
                    {"links":304,"oben":310,"vorne":9,"Radius":113, Portal: "Berge_der_Angst"}
                ],
                [
                    {"links":13,"oben":460,"vorne":71,"Radius":132, Portal: "Ewiges_Eis"},
                    {"links":261,"oben":433,"vorne":68,"Radius":2},
                    {"links":440,"oben":416,"vorne":60,"Radius":4, Kreuzung: true},
                    {"links":502,"oben":383,"vorne":34,"Radius":4},
                    {"links":797,"oben":395,"vorne":40,"Radius":3},
                    {"links":967,"oben":375,"vorne":35,"Radius":3},
                    {"links":1211,"oben":404,"vorne":45,"Radius":4},
                    {"links":1402,"oben":389,"vorne":38,"Radius":138}
                ]
            ]
        },
        Ewiges_Eis: {
            Kürzel: "e",
            Pfade: [
                [
                    {"links":50,"oben":626,"Radius":125.2,"vorne":125.2},
                    {"links":187,"oben":664,"Radius":132.8,"vorne":132.8},
                    {"links":400,"oben":705,"Radius":141,"vorne":141},
                    {"links":653,"oben":677,"Radius":80,"vorne":135.4},
                    {"links":873,"oben":665,"Radius":80,"vorne":133,"Kreuzung":true},
                    {"links":1062,"oben":671,"Radius":80,"vorne":134.2},
                    {"links":1197,"oben":710,"Radius":142,"vorne":142},
                    {"links":1386,"oben":709,"Radius":141.8,"vorne":141.8, Portal: "Grosse_Wiese"}
                ],[
                    {"links":763,"oben":625,"Radius":117,"vorne":117,"Kreuzung":true},
                    {"links":603,"oben":605,"Radius":109,"vorne":109, Portal: "Höhle_Yeti"}
                ]
            ]
        },
        Höhle_Yeti: {
            Kürzel: "y",
            Pfade: [
                [
                    {"links":1422,"oben":703,"Radius":140.6,"vorne":140.6, Portal: "Ewiges_Eis" },
                    {"links":1137,"oben":704,"Radius":140.8,"vorne":140.8},
                    {"links":614,"oben":653,"Radius":130.6,"vorne":130.6},
                    {"links":530,"oben":551,"Radius":110.2,"vorne":110.2},
                    {"links":805,"oben":542,"Radius":108.4,"vorne":108.4},
                    {"links":956,"oben":477,"Radius":95.4,"vorne":95.4},
                    {"links":595,"oben":421,"Radius":84.2,"vorne":84.2},
                    {"links":467,"oben":372,"Radius":74.4,"vorne":74.4}
                ]
            ]
        },

        Dschungel_2: { 
            
            Pfade: [
                [
                    { links: 1053, oben: 83,  Radius: 120, vorne: 100, Portal: "Silberne_Lichtung" },
                    { links: 966,  oben: 123, Radius: 120, vorne: 100 },
                    { links: 869,  oben: 169, Radius: 120, vorne: 100 },
                    { links: 781,  oben: 213, Radius: 120, vorne: 100 },
                    { links: 694,  oben: 267, Radius: 120, vorne: 100 },
                    { links: 599,  oben: 304, Radius: 120, vorne: 100 },
                    { links: 569,  oben: 478, Radius: 120, vorne: 100 },
                    { links: 469,  oben: 513, Radius: 120, vorne: 100 },
                    { links: 377,  oben: 598, Radius: 120, vorne: 100 },
                    { links: 489,  oben: 664, Radius: 120, vorne: 100 },
                    { links: 610,  oben: 673, Radius: 120, vorne: 100 },
                    { links: 713,  oben: 675, Radius: 120, vorne: 100 },
                    { links: 828,  oben: 639, Radius: 120, vorne: 100 },
                    { links: 791,  oben: 587, Radius: 120, vorne: 100 },
                    { links: 851,  oben: 527, Radius: 120, vorne: 100, Portal: "Fluss" }
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
                    {"links":58,"oben":556,"Radius":111.2,"vorne":111.2, Portal: "Dschungel_2"},
                    {"links":232,"oben":532,"Radius":106.4,"vorne":106.4},
                    {"links":343,"oben":455,"Radius":91,"vorne":91},
                    {"links":277,"oben":383,"Radius":76.6,"vorne":76.6},
                    {"links":366,"oben":359,"Radius":71.8,"vorne":71.8},
                    {"links":473,"oben":385,"Radius":77,"vorne":77},
                    {"links":591,"oben":387,"Radius":77.4,"vorne":77.4},
                    {"links":701,"oben":378,"Radius":75.6,"vorne":75.6},
                    {"links":809,"oben":357,"Radius":71.4,"vorne":71.4},
                    {"links":925,"oben":341,"Radius":68.2,"vorne":68.2, Portal: "Quelle_des_Lichts"}
                ]
            ],
            Kürzel: "f"
        },
        Grotte_des_Lichts: {
            Kürzel: "g",
            Pfade: [
                [
                    {"links":504,"oben":667,"Radius":133.4,"vorne":133.4},
                    {"links":255,"oben":521,"Radius":104.2,"vorne":104.2},
                    {"links":410,"oben":381,"Radius":76.2,"vorne":76.2},
                    {"links":560,"oben":365,"Radius":73,"vorne":73},
                    {"links":676,"oben":370,"Radius":74,"vorne":74},
                    {"links":843,"oben":402,"Radius":80.4,"vorne":80.4},
                    {"links":948,"oben":354,"Radius":70.8,"vorne":70.8},
                    {"links":1053,"oben":296,"Radius":59.2,"vorne":59.2,Portal:"offene_Quelle_des_Lichts"}
                ]
            ]
        },
        Quelle_des_Lichts: { 
            Kürzel: "q",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"vorne":54, Portal: "Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"vorne":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"vorne":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"vorne":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"vorne":61.2},
                    {"links":805,"oben":315,"Radius":63,"vorne":63},
                    {"links":897,"oben":323,"Radius":64.6,"vorne":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"vorne":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"vorne":87.4},
                    {"links":996,"oben":510,"Radius":102,"vorne":102},
                    {"links":1091,"oben":594,"Radius":118.8,"vorne":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"vorne":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"vorne":131.912},
                    {"links":1409,"oben":695,"Radius":139,"vorne":139, Portal: "Fluss"}
                ]
            ]
        },
        offene_Quelle_des_Lichts: { 
            Kürzel: "o",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"vorne":54,"Portal":"Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"vorne":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"vorne":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"vorne":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"vorne":61.2},
                    {"links":805,"oben":315,"Radius":63,"vorne":63},
                    {"links":897,"oben":323,"Radius":64.6,"vorne":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"vorne":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"vorne":87.4},
                    {"links":996,"oben":510,"Radius":102,"vorne":102,Kreuzung:true},
                    {"links":1091,"oben":594,"Radius":118.8,"vorne":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"vorne":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"vorne":131.912},
                    {"links":1409,"oben":695,"Radius":139,"vorne":139,"Portal":"Fluss"}
                ],[
                    {"links":896,"oben":552,"Radius":50,"vorne":110.4,Kreuzung:true},
                    {"links":782,"oben":564,"Radius":50,"vorne":112.8},
                    {"links":668,"oben":552,"Radius":50,"vorne":110.4},
                    {"links":550,"oben":486,"Radius":97.2,"vorne":97.2},
                    {"links":714,"oben":465,"Radius":150,"vorne":89, Portal: "Grotte_des_Lichts"}
                ]
            ]
        },

        aktivierte_Quelle_des_Lichts: { 
            Kürzel: "a",
            Pfade: [
                [
                    {"links":353,"oben":270,"Radius":54,"vorne":54,"Portal":"Lavawelt"},
                    {"links":484,"oben":286,"Radius":57.2,"vorne":57.2},
                    {"links":597,"oben":298,"Radius":59.6,"vorne":59.6},
                    {"links":641.4,"oben":288.4,"Radius":57.67999999999999,"vorne":57.67999999999999},
                    {"links":714,"oben":306,"Radius":61.2,"vorne":61.2},
                    {"links":805,"oben":315,"Radius":63,"vorne":63},
                    {"links":897,"oben":323,"Radius":64.6,"vorne":64.6},
                    {"links":960,"oben":361,"Radius":72.2,"vorne":72.2},
                    {"links":1057,"oben":437,"Radius":87.4,"vorne":87.4},
                    {"links":996,"oben":510,"Radius":102,"vorne":102,Kreuzung:true},
                    {"links":1091,"oben":594,"Radius":118.8,"vorne":118.8},
                    {"links":1156.2,"oben":638.2,"Radius":127.64000000000001,"vorne":127.64000000000001},
                    {"links":1227.56,"oben":659.5600000000001,"Radius":131.912,"vorne":131.912},
                    {"links":1409,"oben":695,"Radius":139,"vorne":139,"Portal":"Fluss"}
                ],[
                    {"links":896,"oben":552,"Radius":50,"vorne":110.4,Kreuzung:true},
                    {"links":782,"oben":564,"Radius":50,"vorne":112.8},
                    {"links":668,"oben":552,"Radius":50,"vorne":110.4},
                    {"links":550,"oben":486,"Radius":97.2,"vorne":97.2},
                    {"links":714,"oben":465,"Radius":150,"vorne":89, Portal: "Grotte_des_Lichts"}
                ]
            ]
        },

        Lavawelt: {
            Kürzel: "l",
            Pfade: [
                [
                    {"links":71,"oben":336,"Radius":67.2,"vorne":67.2,Portal: "Berge_der_Angst"},
                    {"links":99,"oben":414,"Radius":82.8,"vorne":82.8},
                    {"links":186,"oben":360,"Radius":72,"vorne":72, Portal: "Lavawelt_Mechanik"},
                    {"links":194,"oben":471,"Radius":94.2,"vorne":94.2},
                    {"links":312,"oben":444,"Radius":88.8,"vorne":88.8},
                    {"links":435,"oben":416,"Radius":83.2,"vorne":83.2}
                ],[
                    {"links":1428,"oben":398,"Radius":79.6,"vorne":79.6, Portal: "Quelle_des_Lichts"},
                    {"links":1325,"oben":450,"Radius":90,"vorne":90},
                    {"links":1205,"oben":454,"Radius":90.8,"vorne":90.8},
                    {"links":1114,"oben":412,"Radius":82.4,"vorne":82.4},
                    {"links":1026,"oben":397,"Radius":79.4,"vorne":79.4},
                    {"links":914,"oben":394,"Radius":78.8,"vorne":78.8},
                    {"links":801,"oben":368,"Radius":73.6,"vorne":73.6},
                    {"links":691,"oben":340,"Radius":68,"vorne":68, Portal: "Reich_des_Giganten"}
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
                    {"links":-100,"oben":336,"Radius":67.2,"vorne":67.2,Portal: "Lavawelt"}
                ]
            ]
        },

        Reich_des_Giganten: { 
            Pfade: [
                [
                    {"links":65,"oben":369,"Radius":73.8,"vorne":73.8, Portal: "Lavawelt"},
                    {"links":145,"oben":399,"Radius":79.8,"vorne":79.8},
                    {"links":225,"oben":448,"Radius":89.6,"vorne":89.6},
                    {"links":325,"oben":488,"Radius":97.6,"vorne":97.6},
                    {"links":437,"oben":496,"Radius":99.2,"vorne":99.2},
                    {"links":561,"oben":482,"Radius":96.4,"vorne":96.4,"Kreuzung":true},
                    {"links":680,"oben":491,"Radius":98.2,"vorne":98.2},
                    {"links":808,"oben":506,"Radius":101.2,"vorne":101.2},
                    {"links":924,"oben":550,"Radius":110,"vorne":110},
                    {"links":1066,"oben":568,"Radius":113.6,"vorne":113.6},
                    {"links":1205,"oben":582,"Radius":116.4,"vorne":116.4},
                    {"links":1379,"oben":550,"Radius":110,"vorne":110},
                    {"links":1324,"oben":425,"Radius":85,"vorne":85},
                    {"links":1250,"oben":369,"Radius":73.8,"vorne":73.8},
                    {"links":1334,"oben":307,"Radius":61.4,"vorne":61.4}
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

        "Klauenspringer_Zahn": {
            in: "Unerreichbarer_Ort",
            feststellen: "Oh, da ist etwas liegen geblieben. Sieht aus wie ein Zahn von diesem Monster.",
            links: 470, oben: 305, breit: 50, hoch: 85, gedreht: 263,
            anwenden: function(Gegenstand, Spiel) {
                Spiel.Spieler.Kraft = Spiel.Spieler.Kraft + 1;
                Spiel.Spieler.feststellen("Den werde ich verwenden, um mich zu verteidigen.")

                Gegenstand.aus_Besitz_entfernen();

                return true; // Aktion deaktivieren
            }
        },

        "Dokument": {
            in: "Unerreichbarer_Ort",
            feststellen: "Sieht nach einem alten Dokument aus.",
            feststellen_im_Besitz: "Text",
            links: 470, oben: 325, breit: 50, hoch: 85
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
                { in: "Silberne_Lichtung", links: 1011, oben: 515, breit: 35, hoch: 35 / 685 * 845, gedreht: -10 },
                { in: "aktivierte_Quelle_des_Lichts", links: 840, oben: 575, breit: 40, hoch: 40 / 685 * 845, gedreht: 0 },
                { in: "aktivierte_Quelle_des_Lichts", links: 1040, oben: 515, breit: 28, hoch: 32 / 685 * 845, gedreht: 10 },
                { in: "aktivierte_Quelle_des_Lichts", links: 1011, oben: 515, breit: 35, hoch: 35 / 685 * 845, gedreht: -10 }
            ],
            anwenden: function(Gegenstand, Spiel) {
                if (Spiel.Spieler.Lebenspunkte < Spielaufbau.Spieler.Lebenspunkte) {
                    Spiel.Spieler.Lebenspunkte_verändern(10);
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
        },
        "Wollknäuel": {
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

            Belohnung: "Klauenspringer_Zahn"
        },
        "Yeti": {
            Orte: [
                { in: "Höhle_Yeti", links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0 }            
            ],
    
            Lebenspunkte: 140,
            Kraft: 12,

            Belohnung: "Dokument"
        },
        "Zwerggreif": {
            Orte: [
                { in: "Dschungel_1", links: 1023, oben: 176, breit: 108, hoch: 108, gedreht: 10 },
                { in: "Unerreichbarer_Ort" }
            ],
    
            Lebenspunkte: 80,
            Kraft: 7
        },
       /* "Baum": {
            Orte: [
                { in: "Dschungel_1", links: 1023, oben: 176, breit: 108, hoch: 108, gedreht: 10 }                
            ],
    
            Lebenspunkte: 80,
            Kraft: 0,

            Belohnung: "Mondblume"

        },*/
        "Gigant": {
            Orte: [
                { in: "Reich_des_Giganten", links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0 },
            ],
    
            Lebenspunkte: 300,
            Kraft: 15,
            Belohnung: "Lichtkristall"
        },
        "Miau": {
            Orte: [
                { in: "Dimension_der_Kätzchen", links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0 },
            ],
    
            Lebenspunkte: 500,
            Kraft: 15,
            Belohnung: "Wollknäuel"
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
            auf_Gegenstand_im_Besitz: function(Gegenstand, Spiel, Aktion) {
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
                Monster.bekämpfen(Spiel.Spieler.Kraft);
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
            auf_Gegenstand_im_Besitz: function(Gegenstand) {
                Gegenstand.anschauen_im_Besitz();
                return true; // Aktion deaktivieren
            }
        },

        Weg_Design: {
            Entwickler_Modus: true,
            beim_Aktivieren: function(Spiel, Aktion) {
                Aktion.Status.Pfad_Nummer = 0;
                Aktion.Status.Modus = "platzieren";
                spiele_Sound_Effect("Pfad_Nummer_0_Wegpunkt_platzieren");
            },
            auf_Ort: function(Ort, Spiel, Aktion, event) {
                // Erster Klick: Wir sind im "platzieren" Modus. Ein neuer Wegpunkt wird hinzugefügt,
                // der aber noch nicht fertig ist.
                if (Aktion.Status.Modus == "platzieren") {
                    let Wegpunkt = Ort.Weg.Wegpunkt_hinzufügen(
                        Aktion.Status.Pfad_Nummer,
                        {
                            links: event.offsetX,
                            oben: event.offsetY,
                            vorne: 0,
                            Radius: 0,
                            Entwurf: true
                        });
                    Aktion.Status.Wegpunkt_Entwurf = Wegpunkt.Eigenschaften;
                    Aktion.Status.Nummer = Wegpunkt.Nummer;
                    Ort.Weg.anzeigen();

                    // Nächster Modus: "vorne", d.h. beim nächsten Klick werden wir die Eigenschaft
                    // "vorne" setzen (blauer Kreis).
                    Aktion.Status.Modus = "vorne";
                    spiele_Sound_Effect("Eigenschaft_vorne_einstellen");

                    // Ab jetzt reagieren wir auf "hover", also wenn die Maus sich bewegt.
                    Aktion.hover = true;
                    return false;
                }

                // Der zweite Klick geschieht im Modus "vorne": Die Eigenschaft "vorne" bleibt nun
                // fix, als nächstes wird der Radius geändert (roter Kreis).
                if (Aktion.Status.Modus == "vorne") {
                    Aktion.Status.Modus = "Radius";
                    spiele_Sound_Effect("Eigenschaft_Radius_einstellen");
                    Ort.Weg.anzeigen();
                    return false;
                }

                // Beim dritten Klick setzen wir den Radius und schliessen den Entwurf ab.
                if (Aktion.Status.Modus == "Radius") {
                    delete Aktion.hover;
                    delete Aktion.Status.Wegpunkt_Entwurf.Entwurf;
                    delete Aktion.Status.Nummer;
                    Aktion.Status.Modus = "platzieren";
                    spiele_Sound_Effect("Wegpunkt_platzieren");
                    Ort.Weg.anzeigen();
                    delete Aktion.Status.Wegpunkt_Entwurf;
                    return false;
                }
            },
            hover_auf_Ort: function(Ort, Spiel, Aktion, event) {
                // Beim hovern (mit der Maus bewegen) ändern wir immer sofort den 
                // Radius (roter Kreis) bzw. "vorne" (blauen Kreis), damit man sieht, wie gross es ist,
                // bevor man klickt.
                if (Aktion.Status.Modus == "vorne" || Aktion.Status.Modus == "Radius") {
                    let links2 = event.offsetX;
                    let oben2 = event.offsetY;

                    let abstand = Math.max(0, Math.floor(Math.sqrt(
                        (Aktion.Status.Wegpunkt_Entwurf.links - links2) ** 2 +
                        (Aktion.Status.Wegpunkt_Entwurf.oben - oben2) ** 2
                    )));

                    if (Aktion.Status.Modus == "vorne") {
                        Aktion.Status.Wegpunkt_Entwurf.vorne = abstand;
                    } else {
                        Aktion.Status.Wegpunkt_Entwurf.Radius = abstand;
                    }
                    
                    Ort.Weg.anzeigen();
                    let Wegpunkt = Ort.Weg.Pfade[Aktion.Status.Pfad_Nummer][Aktion.Status.Nummer];
                    Spiel.Spieler.platziere_bei_Wegpunkt(Wegpunkt);
                }
            },
            beim_Deaktivieren: function(Spiel, Aktion) {
                Aktion.Status.Pfad_Nummer++;
                if (Aktion.Status.Pfad_Nummer >= 2) {
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
                } else {
                    spiele_Sound_Effect("Pfad_Nummer_1_Wegpunkt_platzieren");
                }
            }
        }
    }
}
