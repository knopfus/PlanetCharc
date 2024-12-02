var Spielaufbau = {
    Spieler: {
        in: "Fluss",
        Lebenspunkte: 100,
        Kraft: 3
    },

    Portale: [ "Nord", "Ost", "Süd", "West" ],

    Orte: {

        Silberne_Lichtung: {
            Kürzel: "s",
            Bilder_vorne: [ 80, 190 ],
            Pfade: [
                [
                    {"links":21,"oben":718,"vorne":186,"Radius":187,"Portal":"Dschungel_1"},
                    {"links":551,"oben":652,"vorne":150,"Radius":122,"Kreuzung":true},
                    {"links":493,"oben":526,"vorne":138,"Radius":5},
                    {"links":557,"oben":398,"vorne":130,"Radius":5},
                    {"links":771,"oben":368,"vorne":96,"Radius":7},
                    {"links":859,"oben":496,"vorne":84,"Radius":5},
                    {"links":927,"oben":544,"vorne":93,"Radius":100},
                    {"links":1000,"oben":534,"vorne":81,"Radius":2},
                    {"links":1012,"oben":504,"vorne":75,"Radius":2},
                    {"links":1113,"oben":517,"vorne":67,"Radius":83},
                    {"links":1381,"oben":513,"vorne":61,"Radius":254,"Portal":"Dschungel_2"}
                ],[
                    {"links":546,"oben":723,"vorne":193,"Radius":3,"Kreuzung":true},
                    {"links":310,"oben":511,"vorne":206,"Radius":55},
                    {"links":146,"oben":357,"vorne":221,"Radius":153}
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
            Bilder_vorne: [ 1010 ],          
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
                    {"links":520,"oben":347,"vorne":27,"Radius":116}
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
            Kürzel: "g",
            Pfade: [
                [
                    {"links":5,"oben":565,"vorne":140,"Radius":175, Portal: "Berge_der_Angst"},
                    {"links":185,"oben":534,"vorne":109,"Radius":3},
                    {"links":429,"oben":531,"vorne":91,"Radius":5},
                    {"links":657,"oben":533,"vorne":74,"Radius":5},
                    {"links":941,"oben":489,"vorne":49,"Radius":6},
                    {"links":952,"oben":465,"vorne":39,"Radius":5, Kreuzung: true},
                    {"links":882,"oben":448,"vorne":37,"Radius":5},
                    {"links":757,"oben":421,"vorne":31,"Radius":5},
                    {"links":605,"oben":327,"vorne":17,"Radius":2},
                    {"links":626,"oben":321,"vorne":14,"Radius":2},
                    {"links":643,"oben":304,"vorne":11,"Radius":2},
                    {"links":631,"oben":290,"vorne":12,"Radius":1},
                    {"links":651,"oben":257,"vorne":10,"Radius":1},
                    {"links":663,"oben":232,"vorne":10,"Radius":71, Portal: "Nichts"}
                ],[
                    {"links":1007,"oben":432,"vorne":18,"Radius":4, Kreuzung: true},
                    {"links":985,"oben":422,"vorne":17,"Radius":3},
                    {"links":1047,"oben":410,"vorne":15,"Radius":60}
                ]
            ]
        },
        Grosse_Wiese: {
            Kürzel: "w",
            Bilder_vorne: [ 15 ],
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
            Bilder_vorne: [ 140, 190 ],
            Pfade: [
                [
                    {"links":50,"oben":640,"Radius":141,"vorne":141},
                    {"links":187,"oben":674,"Radius":8,"vorne":143},
                    {"links":389,"oben":710,"Radius":177,"vorne":173},
                    {"links":604,"oben":687,"Radius":8,"vorne":145},
                    {"links":905,"oben":671,"Radius":7,"vorne":134,"Kreuzung":true},
                    {"links":1137,"oben":691,"Radius":5,"vorne":148},
                    {"links":1012,"oben":719,"Radius":3,"vorne":155},
                    {"links":1371,"oben":792,"Radius":229,"vorne":201,"Portal":"Grosse_Wiese"}
                ],[
                    {"links":762,"oben":659,"Radius":7,"vorne":139,"Kreuzung":true},
                    {"links":539,"oben":643,"Radius":283,"vorne":135,"Portal":"Höhle_Yeti"}
                ]
            ]
        },
        Höhle_Yeti: {
            Kürzel: "y",
            Pfade: [
                [
                    {"links":1440,"oben":799,"Radius":224,"vorne":302,"Portal":"Ewiges_Eis"},
                    {"links":1268,"oben":669,"Radius":94,"vorne":226},
                    {"links":1076,"oben":538,"Radius":7,"vorne":171},
                    {"links":856,"oben":482,"Radius":120,"vorne":150},
                    {"links":663,"oben":439,"Radius":130,"vorne":124},
                    {"links":515,"oben":447,"Radius":115,"vorne":153},
                    {"links":309,"oben":477,"Radius":7,"vorne":158},
                    {"links":50,"oben":487,"Radius":183,"vorne":157}
                ]
            ]
        },

        Dschungel_2: { 
            Bilder_vorne: [ 1010 ],
            Pfade: [
                [
                    {"links":283,"oben":481,"vorne":162,"Radius":290,"Portal":"Silberne_Lichtung"},
                    {"links":492,"oben":486,"vorne":146,"Radius":4},
                    {"links":579,"oben":602,"vorne":183,"Radius":98},
                    {"links":698,"oben":670,"vorne":188,"Radius":5},
                    {"links":815,"oben":676,"vorne":200,"Radius":105},
                    {"links":776,"oben":597,"vorne":143,"Radius":7},
                    {"links":955,"oben":547,"vorne":169,"Radius":108},
                    {"links":1266,"oben":573,"vorne":173,"Radius":268,"Portal":"Fluss"}
                ]
            ]
        },
        Fluss: {
            Kürzel: "f",
            feststellen: "Autsch. Da haben wir ja mal Glück gehabt, dass mein Sturz durch die Bäume und das Wasser gebremst wurde, und dass die Schwerkraft auf diesem kleinen fremden Planeten so klein ist. Aber dass meine Leute mit dem Raumschiff nun ohne mich von zuhause geflüchtet sind, ist eine Misere! War ja klar, dass ich mich nicht unendlich lange am Fahrgestell festhalten konnte. Dabei war ich doch kaum ein paar Sekunden zu spät beim Raumschiff, als sie losflogen! Na ja, lieber hier einsam gelandet sein als in der Heimat vom Kometen erschlagen werden. Nur, wie werde ich meine Freunde jemals informieren können, dass ich hier bin?",
            nach: 9,
            Bilder_vorne: [ 100, 1010 ],
            Pfade: [
                [
                    {"links":46,"oben":604,"vorne":301,"Radius":217,"Portal":"Dschungel_2"},
                    {"links":267,"oben":546,"vorne":199,"Radius":5,"Kreuzung":true},
                    {"links":278,"oben":420,"vorne":141,"Radius":79},
                    {"links":351,"oben":410,"vorne":126,"Radius":4},
                    {"links":408,"oben":421,"vorne":98,"Radius":12},
                    {"links":463,"oben":391,"vorne":94,"Radius":3},
                    {"links":574,"oben":408,"vorne":97,"Radius":65},
                    {"links":692,"oben":392,"vorne":76,"Radius":6},
                    {"links":857,"oben":379,"vorne":69,"Radius":6},
                    {"links":968,"oben":379,"vorne":72,"Radius":412,"Portal":"Quelle_des_Lichts"}
                ],[
                    {"links":418,"oben":547,"vorne":173,"Radius":63,"Kreuzung":true},
                    {"links":855,"oben":604,"vorne":187,"Radius":93,"Start":true},
                    {"links":1193,"oben":508,"vorne":186,"Radius":81},
                    {"links":1369,"oben":501,"vorne":240,"Radius":119}
                ]
            ]
        },
        Grotte_des_Lichts: {
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
            Bilder_vorne: [ 1010 ],
            Pfade: [
                [
                    {"links":1400,"oben":847,"vorne":263,"Radius":269, Portal: "Fluss"},
                    {"links":1033,"oben":723,"vorne":225,"Radius":150},
                    {"links":1155,"oben":640,"vorne":201,"Radius":3},
                    {"links":865,"oben":749,"vorne":180,"Radius":3},
                    {"links":593,"oben":758,"vorne":186,"Radius":2},
                    {"links":406,"oben":660,"vorne":147,"Radius":2},
                    {"links":156,"oben":581,"vorne":115,"Radius":4},
                    {"links":8,"oben":431,"vorne":86,"Radius":2},
                    {"links":70,"oben":218,"vorne":60,"Radius":3},
                    {"links":601,"oben":308,"vorne":77,"Radius":4},
                    {"links":909,"oben":328,"vorne":81,"Radius":4},
                    {"links":1051,"oben":314,"vorne":87,"Radius":200, Portal: "Lavawelt"}
                ]
            ]
        },
        offene_Quelle_des_Lichts: { 
            Kürzel: "o",
            Bilder_vorne: [ 1010 ],
            Pfade: [
                [
                    {"links":1400,"oben":847,"vorne":263,"Radius":269, Portal: "Fluss"},
                    {"links":1033,"oben":723,"vorne":225,"Radius":150},
                    {"links":1155,"oben":640,"vorne":201,"Radius":3,Kreuzung:true},
                    {"links":865,"oben":749,"vorne":180,"Radius":3},
                    {"links":593,"oben":758,"vorne":186,"Radius":2},
                    {"links":406,"oben":660,"vorne":147,"Radius":2},
                    {"links":156,"oben":581,"vorne":115,"Radius":4},
                    {"links":8,"oben":431,"vorne":86,"Radius":2},
                    {"links":70,"oben":218,"vorne":60,"Radius":3},
                    {"links":601,"oben":278,"vorne":77,"Radius":4},
                    {"links":909,"oben":308,"vorne":81,"Radius":4},
                    {"links":1051,"oben":314,"vorne":87,"Radius":200, Portal: "Lavawelt"}
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
                    {"links":1400,"oben":847,"vorne":263,"Radius":269, Portal: "Fluss"},
                    {"links":1033,"oben":723,"vorne":225,"Radius":150},
                    {"links":1155,"oben":640,"vorne":201,"Radius":3,Kreuzung:true},
                    {"links":865,"oben":749,"vorne":180,"Radius":3},
                    {"links":593,"oben":758,"vorne":186,"Radius":2},
                    {"links":406,"oben":660,"vorne":147,"Radius":2},
                    {"links":156,"oben":581,"vorne":115,"Radius":4},
                    {"links":8,"oben":431,"vorne":86,"Radius":2},
                    {"links":70,"oben":218,"vorne":60,"Radius":3},
                    {"links":601,"oben":278,"vorne":77,"Radius":4},
                    {"links":909,"oben":308,"vorne":81,"Radius":4},
                    {"links":1051,"oben":314,"vorne":87,"Radius":200, Portal: "Lavawelt"}
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

        Lavawelt: {
            Kürzel: "l",
            Pfade: [
                [
                    {"links":4,"oben":405,"vorne":77,"Radius":70,"Portal":"Berge_der_Angst"},
                    {"links":98,"oben":420,"vorne":75,"Radius":70},
                    {"links":158,"oben":416,"vorne":75,"Radius":5,"Portal":"Lavawelt_Mechanik"},
                    {"links":288,"oben":467,"vorne":101,"Radius":6},
                    {"links":431,"oben":431,"vorne":94,"Radius":117}
                ],[
                    {"links":627,"oben":339,"vorne":37,"Radius":118,"Portal":"Reich_des_Giganten"},
                    {"links":700,"oben":320,"vorne":61,"Radius":8},
                    {"links":889,"oben":421,"vorne":63,"Radius":6},
                    {"links":929,"oben":443,"vorne":68,"Radius":6},
                    {"links":967,"oben":434,"vorne":71,"Radius":7},
                    {"links":1058,"oben":420,"vorne":82,"Radius":7},
                    {"links":1200,"oben":490,"vorne":108,"Radius":6},
                    {"links":1294,"oben":455,"vorne":109,"Radius":6},
                    {"links":1425,"oben":426,"vorne":113,"Radius":149,"Portal":"Quelle_des_Lichts"}
                ]
            ]
        },
    
        Lavawelt_Mechanik: {
            Kürzel: "m",
            Pfade: [
                [
                    {"links":-1,"oben":336,"Radius":6000,"vorne":0,Portal: "Lavawelt"}
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

        Nichts: {
            Kürzel: 'n',
            Pfade: [
                [
                    {"links":604,"oben":1007,"vorne":362,"Radius":3},
                    {"links":604,"oben":1007,"vorne":362,"Radius":6000,Portal: "Gipfel"}
                ]
            ]
        },


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

        "Feuerschwert": {
            in: "Unerreichbarer_Ort",
            feststellen: "Oh, da ist etwas liegen geblieben. Sieht aus wie ein Zahn von diesem Monster.",
            links: 300, oben: 440, breit: 50, hoch: 85, gedreht: 10,
            nehmbar: true,
            anwenden: function(Gegenstand, Spiel) {
                Spiel.Spieler.Kraft = Spiel.Spieler.Kraft + 10;
                Spiel.Spieler.feststellen("Das ist eine perfekte Waffe gegen gefährliche Kreaturen.")

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


            },
            nehmbar: true
        },

        "Holz": {
            in: "Unerreichbarer_Ort",
            feststellen: "Holz werde ich gut brauchen können.",
            feststellen_im_Besitz: "Holz werde ich gut brauchen können.",
            links: 600, oben: 500, breit: 50, hoch: 85,
            nehmbar: true,
            anwenden: function() {
                return false;
            }
        },

        "Dokument": {
            in: "Höhle_Yeti",
            feststellen: "Ein altes Dokument. Hier muss jemand gewesen sein!",
            feststellen_im_Besitz: "Diese Schrift wurde früher auf meinem Planeten benutzt, ich kann sie ungefähr entziffern:\n\nDie Bäume saugen dem Wasser die Seele, \nwelches das Feuer erstickt. \nDas Feuer vertreibt die Luft und den Wind, \nder Wind wird die Bäume ausreissen.",
            links: 535, oben: 380, breit: 50, hoch: 85, gedreht: 40,
            nehmbar: true
        },

        "Axt": {
            Kürzel: "1",
            in: "Höhle_Yeti",
            feststellen: "Eine etwas notdürftige Axt.",
            feststellen_im_Besitz: "Das ist eine Axt, die höchstwahrscheinlich bentutz wurde, um Holz zu hacken.",
            links: 555, oben: 400, breit: 50, hoch: 85, gedreht: 40,
            nehmbar: true,
            Kraft: 3,
            anwenden: function() {
                return false;
            }
        },

        "Stock": {
            Kürzel: "2",
            in: "Unerreichbarer_Ort",
            feststellen: "Der Stock ist alles, was von meiner Axt übrig geblieben ist.",
            feststellen_im_Besitz: "Den Stock werde ich bestimmt noch zu was gebrauchen können.",
            links: 667, oben: 504, breit: 90, hoch: 90, gedreht: 20,
            nehmbar: true,
            anwenden: function() {
                return false;
            }
        },

        "Fackel": {
            Kürzel: "3",
            in: "Unerreichbarer_Ort",
            anwenden: function() {
                // Noch nichts zu tun, der Gegenstand soll auf etwas angewendet werden können, daher Aktion
                // nicht deaktivieren
                return false;
            }
        },

        "Lava": {
            in: "Lavawelt",
            feststellen: "Glühend heisse Lava. Diese würde sofort alles in Brand setzen, was sie berührt.",
            links: 429, oben: 210, breit: 94, hoch: 190,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Stock") {
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Fackel.nehmen();
                    Spiel.Spieler.feststellen("Der Stock brennt. Eine Fackel dabei zu haben, kann sicher nicht schaden.");
                }
            }
        },

        "Eingefrorenes_Tagebuch": {
            in: "Höhle_Yeti",
            feststellen: "Da ist irgendetwas im Eis eingefroren.",
            links: 376, oben: 309, breit: 89, hoch: 88,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Fackel") {
                    Gegenstand.entferne_aus(Spiel.Orte.Höhle_Yeti);
                    Spiel.Gegenstände.Tagebuch.platziere_in(Spiel.Orte.Höhle_Yeti);
                }
            }
        },

        "Tagebuch": {
            in: "Unerreichbarer_Ort",
            feststellen: "Das ist ein altes Buch! Hier hat wohl jemand gelebt.",
            links: 401, oben: 340, breit: 52, hoch: 54,
            nehmbar: true
        },

        "Staubsterne": {
            in: "Nichts",
            feststellen: "Die leuchten wie Sterne.",
            feststellen_im_Besitz: "Diese leuchtenden Sterne sind fein wie Sand.",
            links: 208, oben: 475, breit: 405, hoch: 200,
            nehmbar: true,
            anwenden: function() {
                // Noch nichts zu tun, der Gegenstand soll auf etwas angewendet werden können, daher Aktion
                // nicht deaktivieren
                return false;
            }
        },
        
        "Wasser": {
            mehrere:[
                { in: "Quelle_des_Lichts", links: 470, oben: 500, breit: 500, hoch: 500 },
                { in: "offene_Quelle_des_Lichts", links: 470, oben: 500, breit: 500, hoch: 500 }
            ],
            feststellen: "Hier ist eine ruhige Stelle an der man Wasser schöpfen könnte.",
            nehmbar: false,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Reparierte_Vase") {
                    spiele_Sound_Effect("Wasser_schöpfen");
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Gefüllte_Vase.nehmen();
                    return true;
                } else {
                    Spiel.Spieler.feststellen("Ich weiss nicht, was ich damit Sinnvolles machen könnte.");
                    return true;
                }
            }
        },
        "Lichtwasser": {
            in: "aktivierte_Quelle_des_Lichts",
            feststellen: "Hier ist eine ruhige Stelle an der man das leuchtende Wasser schöpfen könnte.",
            links: 470, oben: 500, breit: 500, hoch: 500,
            nehmbar: false,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Reparierte_Vase") {
                    spiele_Sound_Effect("Lichtwasser_schöpfen");
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Gefüllte_Vase_mit_Licht.nehmen();
                    return true;
                } else {
                    Spiel.Spieler.feststellen("Ich weiss nicht, was ich damit Sinnvolles machen könnte.");
                    return true;
                }
            }
        },
        
        "Seltsame_Konstruktion": {
            in: "Silberne_Lichtung",
            feststellen: "Eine seltsame Konstruktion...",
            links: 760, oben: 480, breit: 135, hoch: 90,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Gefüllte_Vase_mit_Licht") {
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Befüllte_Konstruktion.platziere_in(Gegenstand.Ort);
                    Gegenstand.entferne_aus(Gegenstand.Ort);
                    spiele_Sound_Effect("Lichtwasser_schöpfen")
                } else {
                    return true;
                }
            }
            
        },

        "Befüllte_Konstruktion": {
            in: "Unerreichbarer_Ort",
            feststellen: "Es scheint zu leuchten, aber etwas scheint zu fehlen...",
            links: 760, oben: 480, breit: 135, hoch: 90,
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Staubsterne") {
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Aktivierte_Konstruktion.platziere_in(Gegenstand.Ort);
                    Gegenstand.entferne_aus(Gegenstand.Ort);
                } else {
                    return true;
                }
            }
        },

        "Aktivierte_Konstruktion": {
            in: "Unerreichbarer_Ort",
            feststellen: "Eine seltsame Konstruktion...",
            links: 760, oben: -117, breit: 135, hoch: 687,
        },

        "Zerbrochene_Vase": {
            in: "Silberne_Lichtung",
            feststellen: "Sieht nach einer zerstörten Vase aus. Sehr merkwürdig. Wie kommt die auf einen einsamen Planeten?",
            feststellen_im_Besitz: "So zerbrochen ist die Vase leider ziemlich unbrauchbar.",
            links: 970, oben: 530, breit: 50, hoch: 60,
            nehmbar: true, 
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Holz") {
                    Spiel.Spieler.feststellen("Mit dem Holz kann ich die Vase behelfsmässig reparieren.");
                    anderer_Gegenstand.aus_Besitz_entfernen();
                    Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Reparierte_Vase.nehmen();
                    return true;
                } else {
                    Spiel.Spieler.feststellen("Ich weiss nicht, was ich damit Sinnvolles machen könnte.");
                    return true;
                }
            }
        },
        
        "Reparierte_Vase": {
            in: "Unerreichbarer_Ort",
            feststellen_im_Besitz: "So kann ich die Vase wieder verwenden.",
            links: 850, oben: 530, breit: 50, hoch: 60,
            anwenden: function() {
                return false;
            }
        },

        "Gefüllte_Vase_mit_Licht": {
            in: "Unerreichbarer_Ort",
            feststellen_im_Besitz: "Jetzt ist meine Vase mit Licht gefüllt. Wie schön! Was soll ich damit bloss machen?",
            links: 850, oben: 530, breit: 50, hoch: 60,
            anwenden: function() {
                // Noch nichts zu tun, der Gegenstand soll auf etwas angewendet werden können, daher Aktion
                // nicht deaktivieren
                return false;
            }
        },

        "Gefüllte_Vase": {
            in: "Unerreichbarer_Ort",
            feststellen_im_Besitz: "Das Wasser wirkt sehr klar und trinkbar.",
            links: 850, oben: 530, breit: 50, hoch: 60,
            anwenden: function(Gegenstand, Spiel) {
                if (Spiel.Spieler.Lebenspunkte < Spielaufbau.Spieler.Lebenspunkte) {
                    Spiel.Spieler.Lebenspunkte_verändern(10);
                    Gegenstand.aus_Besitz_entfernen();
                    Spiel.Gegenstände.Reparierte_Vase.nehmen()

                    Spiel.Spieler.feststellen("Erfrischend!");
                } else {
                    Spiel.Spieler.feststellen("Ich habe gerade keinen Durst.");
                }
                return true;
            }
        },


        "Lavawelt_Mechanik": {
            in: "Lavawelt",
            feststellen: "Ist das eine Kritzelei?",
            links: 109, oben: 310, breit: 144, hoch: 82, vorne: 900,

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
            mehrere: [
                { in: "Silberne_Lichtung", links: 930, oben: 545, breit: 37, hoch: 37 / 685 * 845, gedreht: 0, feststellen: "Seltsam, es wachsen nirgens solche Blumen als genau hier neben diesem zerbrochenen Gefäss.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" },
                { in: "Silberne_Lichtung", links: 1010, oben: 525, breit: 25, hoch: 29 / 685 * 845, gedreht: 10, feststellen: "Seltsam, es wachsen nirgens solche Blumen als genau hier neben diesem zerbrochenen Gefäss.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" },
                { in: "Silberne_Lichtung", links: 901, oben: 535, breit: 32, hoch: 31 / 685 * 845, gedreht: -10, feststellen: "Seltsam, es wachsen nirgens solche Blumen als genau hier neben diesem zerbrochenen Gefäss.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" },
                { in: "aktivierte_Quelle_des_Lichts", links: 840, oben: 575, breit: 40, hoch: 40 / 685 * 845, gedreht: 0, feststellen: "Jetzt wachsen hier plötzlich dieselben Blumen wie bei der zerbrochenen Vase.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" },
                { in: "aktivierte_Quelle_des_Lichts", links: 1040, oben: 515, breit: 28, hoch: 32 / 685 * 845, gedreht: 10, feststellen: "Jetzt wachsen hier plötzlich dieselben Blumen wie bei der zerbrochenen Vase.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" },
                { in: "aktivierte_Quelle_des_Lichts", links: 1011, oben: 515, breit: 35, hoch: 35 / 685 * 845, gedreht: -10, feststellen: "Jetzt wachsen hier plötzlich dieselben Blumen wie bei der zerbrochenen Vase.", feststellen_im_Besitz: "Diese Blumen leuchten magisch und duften herrlich. Ob sie wohl essbar sind?" }
            ],
            nehmbar: true,
            anwenden: function(Gegenstand, Spiel) {
                if (Spiel.Spieler.Lebenspunkte < Spielaufbau.Spieler.Lebenspunkte) {
                    Spiel.Spieler.Lebenspunkte_verändern(20);
                    Gegenstand.aus_Besitz_entfernen();
                    Gegenstand.regeneriere_in(20);

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
            Belohnung: "Holz",
            anderen_Gegenstand_auf_diesen_anwenden: function(Gegenstand, anderer_Gegenstand, Spiel) {
                if (anderer_Gegenstand.Name == "Axt") {
                    spiele_Sound_Effect("hack");
                    Gegenstand.Eigenschaften.Lebenspunkte = Gegenstand.Eigenschaften.Lebenspunkte - anderer_Gegenstand.Eigenschaften.Kraft;
                    if (Gegenstand.Eigenschaften.Lebenspunkte < 0) {
                        Spiel.Gegenstände[Gegenstand.Eigenschaften.Belohnung].platziere_in(Gegenstand.Ort);
                        Gegenstand.entferne_aus(Gegenstand.Ort);

                        Spiel.Gegenstände.Stock.platziere_in(Gegenstand.Ort);
                        anderer_Gegenstand.aus_Besitz_entfernen();
                        Spiel.Spieler.feststellen("Just mit dem letzten Schlag ist meine Axt zerfallen.");

                        return true;
                    }
                    return false;
                }
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
        "Troll": {
            Orte: [
                { in: "Gipfel", links: 300, oben: 340, breit: 200, hoch: 200, gedreht: 0 },
                { in: "Unerreichbarer_Ort" }
            ],
    
            Lebenspunkte: 150,
            Kraft: 10,

            Belohnung: "Feuerschwert"
        },
        "Yeti": {
            Orte: [
                { in: "Höhle_Yeti", links: 420, oben: 255, breit: 800, hoch: 671, gedreht: 0 }            
            ],
    
            Lebenspunkte: 140,
            Kraft: 12
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
            },

            auf_Portal: function(Portal) {
                Portal.gehe_zu();
            },

            auf_Gegenstand: function(Gegenstand) {
                if (Gegenstand.Eigenschaften.gehe_zu) {
                    Gegenstand.gehe_zu();
                }
            },

            beim_Aktivieren: function(Spiel) {
                Spiel.Spiel_div.classList.add("gehe_zu");
            },

            beim_Deaktivieren: function(Spiel) {
                Spiel.Spiel_div.classList.remove("gehe_zu");
                return true;
            }
        },

        nehmen: {
            auf_Gegenstand: function(Gegenstand, Spiel) {
                if (Gegenstand.Eigenschaften.nehmbar) {
                    if (sind_näher_als(Spiel.Spieler.Koordinaten, Gegenstand.Eigenschaften, 100 + Spiel.Spieler.Koordinaten.vorne)) {
                        Gegenstand.nehmen();
                    } else {
                        Spiel.Spieler.feststellen("Das ist zu weit weg, ich komme da nicht ran.");
                    }
                }
            }
        },

        drücken: {
            auf_Gegenstand: function(Gegenstand, Spiel) {
                Gegenstand.drücken();
            }
        },

        anwenden: {
            auf_Gegenstand_im_Besitz: function(Gegenstand, Spiel, Aktion) {
                if (Aktion.Status.anzuwendender_Gegenstand_Name) {
                    let deaktivieren = Gegenstand.anderen_Gegenstand_auf_diesen_anwenden(Aktion.Status.anzuwendender_Gegenstand_Name);
                    return deaktivieren;
                }
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
            },
            auf_Gegenstand_im_Besitz: function(Gegenstand) {
                Gegenstand.anschauen_im_Besitz();
            }
        },

        Weg_Design: {
            Entwickler_Modus: true,
            beim_Aktivieren: function(Spiel, Aktion) {
                Aktion.Status.Pfad_Nummer = 0;
                Aktion.Status.Modus = "platzieren";
                spiele_Sound_Effect("Pfad_Nummer_0_Wegpunkt_platzieren");
            },
            auf_Wegpunkt: function(Wegpunkt, Spiel, Aktion) {
                if (Aktion.Status.Modus == "schieben") {
                    // Wir sind bereits am Schieben und haben nun auf den verschobenen Wegpunkt
                    // geklickt, d.h. wir wollen ihn hier stehen lassen und nun Eigenschaft "vorne"
                    // einstellen.
                    Aktion.Status.Modus = "vorne";
                    spiele_Sound_Effect("Eigenschaft_vorne_einstellen");
                    return false;
                } else {
                    Aktion.Status.Wegpunkt_Entwurf = Wegpunkt.Eigenschaften;
                    Aktion.Status.Pfad_Nummer = Wegpunkt.Pfad_Nummer;
                    Aktion.Status.Nummer = Wegpunkt.Nummer;
    
                    // Nächster Modus: "vorne", d.h. beim nächsten Klick werden wir die Eigenschaft
                    // "vorne" setzen (blauer Kreis).
                    Aktion.Status.Modus = "schieben";
                    //spiele_Sound_Effect("Eigenschaft_vorne_einstellen");
    
                    // Ab jetzt reagieren wir auf "hover", also wenn die Maus sich bewegt.
                    Aktion.hover = true;
                }

                return false;
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
                // Wenn man vorher einen bestehenden Wegpunkt angeklickt hatte, wird beim hovern zuerst
                // der bestehende Wegpunkt verschoben, danach kann man "vorne" und "Radius" ändern.
                if (Aktion.Status.Modus == "schieben") {
                    let links2 = event.offsetX;
                    let oben2 = event.offsetY;
                    Aktion.Status.Wegpunkt_Entwurf.links = links2;
                    Aktion.Status.Wegpunkt_Entwurf.oben = oben2;
                }

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
                }

                Ort.Weg.anzeigen();
                let Wegpunkt = Ort.Weg.Pfade[Aktion.Status.Pfad_Nummer][Aktion.Status.Nummer];
                Spiel.Spieler.platziere_bei_Wegpunkt(Wegpunkt);
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
