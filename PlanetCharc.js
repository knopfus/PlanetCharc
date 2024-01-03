
window.Orte = {

    Silberne_Lichtung: {

        mögliche_Aktionen: {
            gehe_zu: { Ziel_Ort_Name: "Dschungel_1", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } },
        
        }

    },

    Dschungel_1: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Silberne_Lichtung", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Dschungel_2: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Fluss", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Fluss: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Quelle_des_Lichts", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Quelle_des_Lichts: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Lavawelt", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Lavawelt: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Berge_der_Angst", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Berge_der_Angst: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Gipfel", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Gipfel: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Berge_der_Angst", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Grosse_Wiese: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Ewiges_Eis", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Ewiges_Eis: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Höhle_Yeti", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Höhle_Yeti: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Ewiges_Eis", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Unerreichbarer_Ort: {
        
    }
};

window.AlleMonster = {
    "Klauenspringer": {
        mögliche_Orte: [
            { Ort_Name: "Lavawelt", links: 420, oben: 255 },
            { Ort_Name: "Unerreichbarer_Ort", links: 420, oben: 255 }
        ],

        Ort_Name: "Lavawelt", links: 420, oben: 255,
        
        mögliche_Aktionen: {
            kaempfen: {}
        },

        Lebenspunkte: 100,

        lebendig: true
    },

    "Zwerggreif": {
        mögliche_Orte: [
            { Ort_Name: "Dschungel_1", links: 350, oben: 25 },
            { Ort_Name: "Unerreichbarer_Ort", links: 420, oben: 255 }
        ],

        Ort_Name: "Dschungel_1", links: 420, oben: 255,
        
        mögliche_Aktionen: {
            kaempfen: {}
        },

        Lebenspunkte: 80,

        lebendig: true
    }
};

window.Gegenstände = {


    /* Beispiele:

    "Computer": {

        wo: { Ort_Name: "Zimmer_Gegenwart", links: 500, oben: 350, breit: 100, hoch: 75 },

        mögliche_Aktionen: {
            nehmen: { wo: "im_Ort" },
            lernen: { wo: "im_Besitz", zusätzlicher_IQ: 3, gelernt: false }
        }

    },
    */

    "Klauenspringer-Zahn": {

        wo: { Ort_Name: "Unerreichbarer_Ort", links: 470, oben: 287.5, breit: 50, hoch: 85, gedreht: 263 },

        mögliche_Aktionen: {
            nehmen: { wo: "im_Ort"}
        }

    },

    "Portal_von_Dschungel_1_zu_Lavawelt": {    

        wo: { Ort_Name: "Dschungel_1", links: 120, oben: 580, breit: 100, hoch: 170 },

        mögliche_Aktionen: {

            gehe_zu: {
                wo: "im_Ort",
                Ziel_Ort_Name: "Lavawelt",
                Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, 
                Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } }
            }

        }
    },

    "Portal_von_Dschungel_1_zu_Grosse_Wiese": {    

        wo: { Ort_Name: "Dschungel_1", links: 1340, oben: 440, breit: 100, hoch: 170 },

        mögliche_Aktionen: {

            gehe_zu: {
                wo: "im_Ort",
                Ziel_Ort_Name: "Grosse_Wiese",
                Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, 
                Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } }
            }

        }
    },

    "Portal_von_Silberne_Lichtung_zu_Dschungel_1": {    

        wo: { Ort_Name: "Silberne_Lichtung", links: 120, oben: 580, breit: 100, hoch: 170 },

        mögliche_Aktionen: {

            gehe_zu: {
                wo: "im_Ort",
                Ziel_Ort_Name: "Dschungel_1",
                Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, 
                Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } }
            }

        }
    },

    "Portal_von_Silberne_Lichtung_zu_Dschungel_2": {    

        wo: { Ort_Name: "Silberne_Lichtung", links: 1340, oben: 440, breit: 100, hoch: 170 },

        mögliche_Aktionen: {

            gehe_zu: {
                wo: "im_Ort",
                Ziel_Ort_Name: "Dschungel_2",
                Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, 
                Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } }
            }

        }
    }

};


window.Aktionen = {

    gehe_zu: function( Gegenstand, Ort, Spielstand, Aktion ) {

        // Ort wechseln
        Spielstand.vorheriger_Ort_Name = Spielstand.aktueller_Ort_Name;
        Spielstand.aktueller_Ort_Name = Aktion.Ziel_Ort_Name;

        // Klauenspringer bewegt sich
        var mögliche_Orte = window.AlleMonster.Klauenspringer.mögliche_Orte;
        var anzahl = mögliche_Orte.length;
        var index = Math.floor(Math.random() * anzahl);
        var ort = mögliche_Orte[index];

        Spielstand.Klauenspringer.Ort_Name = ort.Ort_Name;
        Spielstand.Klauenspringer.links = ort.links;
        Spielstand.Klauenspringer.oben = ort.oben;

        if (Spielstand.Klauenspringer.Ort_Name == Spielstand.aktueller_Ort_Name) {
            spiele_Sound_Effect("Klauenspringer");
        }

        // Zwerggreif bewegt sich
        var mögliche_Orte = window.AlleMonster.Zwerggreif.mögliche_Orte;
        var anzahl = mögliche_Orte.length;
        var index = Math.floor(Math.random() * anzahl);
        var ort = mögliche_Orte[index];

        Spielstand.Zwerggreif.Ort_Name = ort.Ort_Name;
        Spielstand.Zwerggreif.links = ort.links;
        Spielstand.Zwerggreif.oben = ort.oben;

        if (Spielstand.Zwerggreif.Ort_Name == Spielstand.aktueller_Ort_Name) {
            spiele_Sound_Effect("Zwerggreif");
        }


        // Skylys bewegen sich
        Spielstand.Skyly_10.links = Aktion.Skyly_10.links;
        Spielstand.Skyly_10.oben = Aktion.Skyly_10.oben;
        Spielstand.Skyly_10.kommt_von = Aktion.Skyly_10.kommt_von;

        if (Aktion.Skyly_12) {
            Spielstand.Skyly_12.links = Aktion.Skyly_12.links;
            Spielstand.Skyly_12.oben = Aktion.Skyly_12.oben;
            Spielstand.Skyly_12.kommt_von = Aktion.Skyly_12.kommt_von;
        }
    },

    nehmen: function( Gegenstand, Ort, Spielstand, Aktion ) {

        Ort.Gegenstände.entfernen( Gegenstand );
        Spielstand.Gegenstände_in_Besitz.hinzufügen( Gegenstand );
    },

    kaempfen: function( Gegenstand, Ort, Spielstand, Aktion, Monster ) {
        var wieviel = 20;

        Monster.Lebenspunkte = Monster.Lebenspunkte - wieviel;
        if (Monster.Lebenspunkte <= 0) {
            spiele_Sound_Effect("aargh");
            Monster.lebendig = false;
            

            if ( window.AlleMonster["Klauenspringer"].Ort_Name == Spielstand.aktueller_Ort_Name && window.AlleMonster["Klauenspringer"].lebendig == false) {
                Ort.Gegenstände.hinzufügen( window.Gegenstände["Klauenspringer-Zahn"] );
            }
        
        } else {
            spiele_Sound_Effect("autsch");
        }
    }

  
}


window.Spielstand = {

    aktueller_Ort_Name: "Silberne_Lichtung",
    vorheriger_Ort_Name: "",

    Skyly_10: { links: 200, oben: 490 },

    Skyly_12: { links: -500, oben: -500 },

    Klauenspringer: window.AlleMonster.Klauenspringer,

    Zwerggreif: window.AlleMonster.Zwerggreif,

    Lebenspunkte: 100,

    aktuelle_Aktion_Name: "",

    Gegenstände_in_Besitz: []
}
