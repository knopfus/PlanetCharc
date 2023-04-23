
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

    Lavawelt: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Dschungel_1", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

    },

    Grosse_Wiese: {

        mögliche_Aktionen: { 
            gehe_zu: { Ziel_Ort_Name: "Dschungel_1", Skyly_10: { links: 420, oben: 255, kommt_von: { links: 110, oben: 410 } }, Skyly_12: { links: 310, oben: 445, kommt_von: { links: 0, oben: 300 } } }
        }

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

    "Zeitmaschine_Höhle_Vergangenheit": {

        wo: { Ort_Name: "Höhle_Vergangenheit", links: 619, oben: -9, breit: 100, hoch: 170, gedreht: 263 },

        mögliche_Aktionen: {
            gehe_zu: {
                wo: "im_Ort",
                Ziel_Ort_Name: "Zimmer_Gegenwart",
                Luan_10: { links: 520, oben: 72, kommt_von: { links: 550, oben: 71 } },
                Luan_12: { links: 400, oben: 72, kommt_von: { links: 300, oben: 72 } }
            }
        }

    }
    */
    
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
    }

};


window.Aktionen = {

    gehe_zu: function( Gegenstand, Ort, Spielstand, Aktion ) {

        Spielstand.vorheriger_Ort_Name = Spielstand.aktueller_Ort_Name;
        Spielstand.aktueller_Ort_Name = Aktion.Ziel_Ort_Name;

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

    einfallen: function( Gegenstand, Ort, Spielstand, Aktion ) {

        if (Aktion.eingefallen == false) {
            Spielstand.aktuelle_Ideen += Aktion.zusätzliche_Ideen;
        }

        Aktion.eingefallen = true;

    },

    lernen: function( Gegenstand, Ort, Spielstand, Aktion ) {

        if (Aktion.gelernt == false) {
            Spielstand.aktueller_IQ += Aktion.zusätzlicher_IQ;
        }

        Aktion.gelernt = true;

    }

}


window.Spielstand = {

    aktueller_Ort_Name: "Silberne_Lichtung",
    vorheriger_Ort_Name: "",

    Skyly_10: { links: 200, oben: 490 },

    Skyly_12: { links: -500, oben: -500 },

    aktuelle_Aktion_Name: "",

    Gegenstände_in_Besitz: []
}
