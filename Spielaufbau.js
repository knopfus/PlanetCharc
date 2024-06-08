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
            Pfade: [
                [{"links":500,"oben":544,"vorne":103,"Radius":500}],
            ]
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
                    {"links":192,"oben":382,"vorne":94,"Radius":261, Portal: "Silberne_Lichtung"},
                    {"links":492,"oben":486,"vorne":146,"Radius":4},
                    {"links":586,"oben":614,"vorne":142,"Radius":5},
                    {"links":702,"oben":652,"vorne":169,"Radius":5},
                    {"links":808,"oben":664,"vorne":177,"Radius":6},
                    {"links":776,"oben":597,"vorne":143,"Radius":7},
                    {"links":1357,"oben":460,"vorne":107,"Radius":357, Portal: "Fluss"}
                ]
            ]
        },
        Fluss: {
            Kürzel: "f",
            Pfade: [
                [
                    {"links":17,"oben":567,"vorne":304,"Radius":253, Portal: "Dschungel_2"},
                    {"links":334,"oben":475,"vorne":160,"Radius":6, Kreuzung: true},
                    {"links":303,"oben":378,"vorne":138,"Radius":5},
                    {"links":628,"oben":399,"vorne":92,"Radius":5},
                    {"links":692,"oben":392,"vorne":76,"Radius":6},
                    {"links":857,"oben":379,"vorne":69,"Radius":6},
                    {"links":978,"oben":343,"vorne":43,"Radius":197, Portal: "Quelle_des_Lichts"}
                ],[
                    {"links":418,"oben":547,"vorne":164,"Radius":5, Kreuzung: true},
                    {"links":851,"oben":603,"vorne":185,"Radius":5},
                    {"links":1236,"oben":520,"vorne":186,"Radius":6},
                    {"links":1434,"oben":488,"vorne":237,"Radius":180}
                ]
            ]
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
                    {"links":1400,"oben":847,"vorne":263,"Radius":269, Portal: "Fluss"},
                    {"links":1033,"oben":723,"vorne":225,"Radius":5},
                    {"links":1155,"oben":640,"vorne":201,"Radius":3},
                    {"links":865,"oben":749,"vorne":180,"Radius":3},
                    {"links":593,"oben":758,"vorne":186,"Radius":2},
                    {"links":406,"oben":660,"vorne":147,"Radius":2},
                    {"links":156,"oben":581,"vorne":115,"Radius":4},
                    {"links":8,"oben":431,"vorne":86,"Radius":2},
                    {"links":70,"oben":218,"vorne":60,"Radius":3},
                    {"links":601,"oben":308,"vorne":77,"Radius":4},
                    {"links":909,"oben":328,"vorne":81,"Radius":4},
                    {"links":1151,"oben":314,"vorne":87,"Radius":296, Portal: "Lavawelt"}
                ]
            ]
        },
        offene_Quelle_des_Lichts: { 
            Kürzel: "o",
            Pfade: [
                [
                    {"links":1400,"oben":847,"vorne":263,"Radius":269, Portal: "Fluss"},
                    {"links":1033,"oben":723,"vorne":225,"Radius":5},
                    {"links":1155,"oben":640,"vorne":201,"Radius":3,Kreuzung:true},
                    {"links":865,"oben":749,"vorne":180,"Radius":3},
                    {"links":593,"oben":758,"vorne":186,"Radius":2},
                    {"links":406,"oben":660,"vorne":147,"Radius":2},
                    {"links":156,"oben":581,"vorne":115,"Radius":4},
                    {"links":8,"oben":431,"vorne":86,"Radius":2},
                    {"links":70,"oben":218,"vorne":60,"Radius":3},
                    {"links":601,"oben":278,"vorne":77,"Radius":4},
                    {"links":909,"oben":308,"vorne":81,"Radius":4},
                    {"links":1151,"oben":314,"vorne":87,"Radius":296, Portal: "Lavawelt"}
                ],[
                    {"links":986,"oben":656,"vorne":119,"Radius":2,Kreuzung:true},
                    {"links":909,"oben":613,"vorne":91,"Radius":2},
                    {"links":639,"oben":595,"vorne":77,"Radius":3},
                    {"links":539,"oben":565,"vorne":77,"Radius":3},
                    {"links":533,"oben":501,"vorne":76,"Radius":2},
                    {"links":610,"oben":490,"vorne":58,"Radius":133, Portal: "Grotte_des_Lichts"}
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
                    {"links":4,"oben":425,"vorne":77,"Radius":102,Portal: "Berge_der_Angst"},
                    {"links":78,"oben":420,"vorne":75,"Radius":5},
                    {"links":158,"oben":416,"vorne":75,"Radius":104, Portal: "Lavawelt_Mechanik"},
                    {"links":288,"oben":467,"vorne":101,"Radius":6},
                    {"links":431,"oben":431,"vorne":94,"Radius":117}
                ],[
                    {"links":616,"oben":299,"vorne":45,"Radius":98, Portal: "Reich_des_Giganten"},
                    {"links":697,"oben":384,"vorne":67,"Radius":8},
                    {"links":889,"oben":421,"vorne":63,"Radius":6},
                    {"links":929,"oben":443,"vorne":68,"Radius":6},
                    {"links":967,"oben":434,"vorne":71,"Radius":7},
                    {"links":1058,"oben":420,"vorne":82,"Radius":7},
                    {"links":1200,"oben":490,"vorne":108,"Radius":6},
                    {"links":1294,"oben":455,"vorne":109,"Radius":6},
                    {"links":1425,"oben":426,"vorne":113,"Radius":149, Portal: "Quelle_des_Lichts"}
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
            links: 470, oben: 385, breit: 50, hoch: 85, gedreht: 10,
            nehmbar: true,
            anwenden: function(Gegenstand, Spiel) {
                Spiel.Spieler.Kraft = Spiel.Spieler.Kraft + 1;
                Spiel.Spieler.feststellen("Den werde ich verwenden, um mich zu verteidigen.")

                Gegenstand.aus_Besitz_entfernen();

                return true; // Aktion deaktivieren
            }
        },
        "Miau": {
            in: "Unerreichbarer_Ort",
            links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0,
            anwenden: function(Gegenstand, Spiel) {
                Spiel.Spieler.Kraft = Spiel.Spieler.Kraft + 1;
                Spiel.Spieler.feststellen("So kuschlig!")


            }
        },
        
        "Holz": {
            in: "Unerreichbarer_Ort",
            feststellen: "Holz werde ich gut brauchen können.",
            feststellen_im_Besitz: "Holz werde ich gut brauchen können.",
            links: 600, oben: 500, breit: 50, hoch: 85,
            nehmbar: true,
            anwenden: function(Gegenstand, Spiel) {
                Gegenstand.aus_Besitz_entfernen();
                return true; // Aktion deaktivieren
            }
        },

        "Dokument": {
            in: "Unerreichbarer_Ort",
            feststellen: "Sieht nach einem alten Dokument aus.",
            feststellen_im_Besitz: "Die Bäume saugen dem Wasser die Seele, \n\nwelches das Feuer erstickt. \n\nDas Feuer vertreibt die Luft und den Wind, \n\nder Wind wird die Bäume ausreissen.",
            links: 470, oben: 325, breit: 50, hoch: 85,
            nehmbar: true
        },

        Lavawelt_Mechanik: {
            in: "Lavawelt",
            feststellen: "Ist das eine Kritzelei?",
            links: 109, oben: 310, breit: 144, hoch: 82,

            gehe_zu: function(Gegenstand) {
                Gegenstand.Ort.Weg.Eintritte.Lavawelt_Mechanik.gehe_zu();
            }
        },

        "Lavawelt_Mechanik_Kreuz": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbole in ihrer Anordnungen sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192, breit: 591, hoch: 513,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Wasser": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbole in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192, breit: 306, hoch: 220,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Pflanze": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbole in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453+345, oben: 192, breit: 246, hoch: 255,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Feuer": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbole in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
            links: 453, oben: 192+234, breit: 265, hoch: 236,
            Zustand: "aus"
        },
        "Lavawelt_Mechanik_Wind": {
            in: "Lavawelt_Mechanik",
            feststellen: "Diese alten Symbole in ihrer Anordnung sehen fast ein bisschen wie ein Rätsel aus.",
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
            nehmbar: true,
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
            nehmbar: true,
            anwenden: function() {
                // Noch nichts zu tun, der Gegenstand soll auf etwas angewendet werden können, daher Aktion
                // nicht deaktivieren
                return false;
            }
        },

        "Baum": {
            in: "Dschungel_1",
            links: 500, oben: 320, breit: 300, hoch: 500, gedreht: 0,

            Lebenspunkte: 80,
            Belohnung: "Holz"
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
            Belohnung: "Miau"
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
            },

            auf_Gegenstand: function(Gegenstand) {
                if (Gegenstand.Eigenschaften.gehe_zu) {
                    Gegenstand.gehe_zu();
                    return true;
                }
            }
        },

        nehmen: {
            auf_Gegenstand: function(Gegenstand, Spiel) {
                if (Gegenstand.Eigenschaften.nehmbar) {
                    if (sind_näher_als(Spiel.Spieler.Koordinaten, Gegenstand.Eigenschaften, 200)) {
                        Gegenstand.nehmen();
                    } else {
                        Spiel.Spieler.feststellen("Das ist zu weit weg, ich komme da nicht ran.");
                    }
                    return true; // Aktion deaktivieren
                }
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
            },
            auf_Gegenstand: function(Gegenstand, Spiel) {
                Gegenstand.Eigenschaften.Lebenspunkte = Gegenstand.Eigenschaften.Lebenspunkte - Spiel.Spieler.Kraft;
                if (Gegenstand.Eigenschaften.Lebenspunkte < 0) {
                    Spiel.Gegenstände[Gegenstand.Eigenschaften.Belohnung].platziere_in(Gegenstand.Ort);
                    Gegenstand.entferne_aus(Gegenstand.Ort);
                    return true;
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
