// Weil die "splice" Funktion so komisch ist, machen wir eine "entfernen" Funktion
Array.prototype.entfernen = function( element ) {
    var index = this.indexOf( element );
    this.splice( index, 1 );
};

Array.prototype.hinzufügen = function( element ) {
    this.push( element );
};

window.Spiel = (function(Orte, Gegenstände, Aktionen, Spielstand) {

    // Musik abspielen beim ersten Klick
    document.onclick = function() {
        document.getElementById("musik").play();
    } 

    // Orte mit "ihren" Gegenständen füllen
    for (var Ort_Name in Orte) {
        var Ort = Orte[Ort_Name];
        Orte[Ort_Name].Gegenstände = [];
    }
    for (var Gegenstand_Name in Gegenstände) {
        var Gegenstand = Gegenstände[Gegenstand_Name];
        if ( Gegenstand.wo ) {
            Orte[ Gegenstand.wo.Ort_Name ].Gegenstände.hinzufügen( Gegenstand );
        }
    }

    // mögliche_Aktionen im Ort mit Magie versehen
    for (var Ort_Name in Orte) {
        var Ort = Orte[Ort_Name];
        for (var Aktion_Name in Ort.mögliche_Aktionen) {
            var Aktion = Ort.mögliche_Aktionen[Aktion_Name];
            Aktion.ausführen = (function(Aktion_Name, Ort, Spielstand, Aktion) {
                return function() {
                    Aktionen[Aktion_Name]( "keiner", Ort, Spielstand, Aktion );
                };
            }( Aktion_Name, Ort, Spielstand, Aktion ));
        }        
    }

    // mögliche_Aktionen im Gegenstand mit Magie versehen
    for (var Gegenstand_Name in Gegenstände) {
        var Gegenstand = Gegenstände[Gegenstand_Name];
        for (var Aktion_Name in Gegenstand.mögliche_Aktionen) {
            var Aktion = Gegenstand.mögliche_Aktionen[Aktion_Name];
            Aktion.ausführen = (function( Aktion_Name, Gegenstand, Orte, Spielstand, Aktion ) {
                return function() {
                    Aktionen[Aktion_Name]( Gegenstand, Orte[Spielstand.aktueller_Ort_Name], Spielstand, Aktion );
                };
            }( Aktion_Name, Gegenstand, Orte, Spielstand, Aktion ));
        }
    }

    return {
        Orte: Orte,
        Gegenstände: Gegenstände,
        Aktionen: Aktionen,
        Spielstand: Spielstand
    };

} (window.Orte, window.Gegenstände, window.Aktionen, window.Spielstand));





// "Ausgabe" -- der folgende Code macht das Spiel im HTML-Dokument sichtbar.


function Gegenstände_in_Besitz_anzeigen() {
    for (var Gegenstand_Name in Spiel.Gegenstände) {
        var Gegenstand = Spiel.Gegenstände[Gegenstand_Name];
        var element = document.getElementById( "Gegenstand_in_Besitz_" + Gegenstand_Name );

        if (element != null) {
            if (Spielstand.Gegenstände_in_Besitz.includes(Gegenstand)) {
                element.style.display = ""; // display von CSS erben
            } else {
                element.style.display = "none"; // display mit "none" übersteuern
            }
        }
    }
}

function Gegenstände_im_Ort_anzeigen() {
    var Ort = Spiel.Orte[Spiel.Spielstand.aktueller_Ort_Name];

    for (var Gegenstand_Name in Spiel.Gegenstände) {
        var Gegenstand = Spiel.Gegenstände[Gegenstand_Name];
        var visibility;
        if (Ort.Gegenstände.includes(Gegenstand)) {
            visibility = "visible";
        } else {
            visibility = "hidden";
        }

        var element_id = "Gegenstand_" + Gegenstand_Name;

        document.getElementById( element_id ).style.visibility = visibility;
    }
}

function ausgewählte_Aktion_anzeigen() {
    for (var Aktion_Name in Spiel.Aktionen) {
        var element_id = "Aktion-" + Aktion_Name;
        var element = document.getElementById(element_id);

        element.classList.remove("aktiv");
        if ( Spielstand.aktuelle_Aktion_Name == Aktion_Name ) {
            element.classList.add("aktiv");
        }
    }
}

function bereite_Spiel_vor() {

    for (var Gegenstand_Name in Spiel.Gegenstände) {
        var Gegenstand = Gegenstände[Gegenstand_Name];

        // Hier benutzen wir ein Element ("Gegenstand_Vorlage") als Kopiervorlage.
        // Wir erzeugen automatisch nochmal genau das gleiche Element, verändern es und fügen
        // es dann hinzu. So entstehen automatisch weitere Elemente für jeden Gegenstand.

        var Gegenstand_Vorlage = document.getElementById("Gegenstand_Vorlage");
        var Ort_div = document.getElementById("Ort");
        var Gegenstand_div = Gegenstand_Vorlage.cloneNode(true);
        var Gegenstand_img = Gegenstand_div.getElementsByTagName("img")[0];

        Gegenstand_div.setAttribute("id", "Gegenstand_" + Gegenstand_Name);
        if (Gegenstand.wo.links) { Gegenstand_div.style.left = Gegenstand.wo.links + "px"; }
        if (Gegenstand.wo.oben) { Gegenstand_div.style.top = Gegenstand.wo.oben + "px"; }
        if (Gegenstand.wo.breit) { Gegenstand_div.style.width = Gegenstand.wo.breit + "px"; }
        if (Gegenstand.wo.hoch) { Gegenstand_div.style.height = Gegenstand.wo.hoch + "px"; }
        if (Gegenstand.wo.gedreht) {
            Gegenstand_div.style.transform = "rotate(" + Gegenstand.wo.gedreht + "deg)";
        }

        Gegenstand_img.setAttribute("src", "Gegenstaende/" + Gegenstand_Name + ".png?nocache=" + Date.now());

        Ort_div.appendChild(Gegenstand_div);


        // ... und nun nochmal das gleiche Prinzip im Besitz
        if (Gegenstand.mögliche_Aktionen && Gegenstand.mögliche_Aktionen.nehmen) {
            var Gegenstand_in_Besitz_Vorlage = document.getElementById("Gegenstand_in_Besitz_Vorlage");
            var Besitz_div = document.getElementById("Besitz");
            var Gegenstand_in_Besitz_div = Gegenstand_in_Besitz_Vorlage.cloneNode(true);
            var Gegenstand_in_Besitz_img = Gegenstand_in_Besitz_div.getElementsByTagName("img")[0];

            Gegenstand_in_Besitz_div.setAttribute("id", "Gegenstand_in_Besitz_" + Gegenstand_Name);
            Gegenstand_in_Besitz_img.setAttribute("src", "Gegenstaende/" + Gegenstand_Name + ".png?nocache=" + Date.now());
            Besitz_div.appendChild(Gegenstand_in_Besitz_div);
        }

    }

}

bereite_Spiel_vor();

function zeige_Spiel_an() {

    document.getElementById("Status-Ort").innerText = Spiel.Spielstand.aktueller_Ort_Name;
    document.getElementById("Status-Aktion").innerText = Spiel.Spielstand.aktuelle_Aktion_Name;

    zeige_Lebenspunkte_an();

    document.getElementById("Ort-Bild").src = "Orte/" + Spiel.Spielstand.aktueller_Ort_Name + ".png?nocache=" + Date.now();

    var Skyly_10 = Spiel.Spielstand.Skyly_10,
        Skyly_10_div = document.getElementById("Skyly_10");

    Skyly_10_div.style.transition = "";

    if (Skyly_10.kommt_von) {
        Skyly_10_div.style.left = Skyly_10.kommt_von.links + "px";
        Skyly_10_div.style.top = Skyly_10.kommt_von.oben + "px";
        Skyly_10.kommt_von = null;
        window.setTimeout(function() {
            Skyly_10_div.style.transition = "left 1s, top 1s";
            Skyly_10_div.style.left = Skyly_10.links + "px";
            Skyly_10_div.style.top = Skyly_10.oben + "px";
        }, 0);
    } else {
        Skyly_10_div.style.left = Skyly_10.links + "px";
        Skyly_10_div.style.top = Skyly_10.oben + "px";
    }

    var Skyly_12 = Spiel.Spielstand.Skyly_12,
    Skyly_12_div = document.getElementById("Skyly_12");

    Skyly_12_div.style.transition = "";

    if (Skyly_12.kommt_von) {
        Skyly_12_div.style.left = Skyly_12.kommt_von.links + "px";
        Skyly_12_div.style.top = Skyly_12.kommt_von.oben + "px";
        Skyly_12.kommt_von = null;
        window.setTimeout(function() {
            Skyly_12_div.style.transition = "left 1s, top 1s";
            Skyly_12_div.style.left = Skyly_12.links + "px";
            Skyly_12_div.style.top = Skyly_12.oben + "px";
        }, 0);
    } else {
        Skyly_12_div.style.left = Skyly_12.links + "px";
        Skyly_12_div.style.top = Skyly_12.oben + "px";
    }

    var Klauenspringer = Spiel.Spielstand.Klauenspringer;
    var Klauenspringer_div = document.getElementById("Klauenspringer");

    Klauenspringer_div.style.left = Klauenspringer.links + "px";
    Klauenspringer_div.style.top = Klauenspringer.oben + "px";

    if (Klauenspringer.Ort_Name == Spiel.Spielstand.aktueller_Ort_Name) {
        Klauenspringer_div.style.visibility = "visible";
    } else {
        Klauenspringer_div.style.visibility = "hidden";
    }

    Gegenstände_in_Besitz_anzeigen();
    Gegenstände_im_Ort_anzeigen();
    ausgewählte_Aktion_anzeigen();

}

function zeige_Lebenspunkte_an() {
    var Lebenspunkte_div = document.getElementById("Lebenspunkte");
    var Lebenspunkte = Spiel.Spielstand.Lebenspunkte;
    Lebenspunkte_div.innerText = Lebenspunkte;
    Lebenspunkte_div.style.width = Lebenspunkte + "%";

    var max_color = 200;
    var g = Lebenspunkte / 100 * (2 * max_color);
    var r = 2 * max_color - g;
    var b = 0;
    if (g > max_color) { g = max_color; }
    if (r > max_color) { r = max_color; }
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    Lebenspunkte_div.style.backgroundColor = rgb;
}


// --- Nun versehen wir die Aktionsknöpfe mit Magie:
for (var Aktion_Name in Spiel.Aktionen) {
    document.getElementById("Aktion-" + Aktion_Name).onclick = (function(Aktion_Name) {
        return function() {
            Spiel.Spielstand.aktuelle_Aktion_Name = Aktion_Name;
            zeige_Spiel_an();
        };
    }( Aktion_Name ));
}



// --- Nun versehen wir die Gegenstände mit Magie:
for (var Gegenstand_Name in Spiel.Gegenstände) {
    var Gegenstand = Spiel.Gegenstände[Gegenstand_Name];

    document.getElementById( "Gegenstand_" + Gegenstand_Name ).onclick = (function(Gegenstand) {
        return function() {
            var Aktion_Name = Spiel.Spielstand.aktuelle_Aktion_Name;
            var Aktion = Gegenstand.mögliche_Aktionen[Aktion_Name];
            if ( Aktion && (Aktion.wo == "im_Ort" || Array.isArray(Aktion.wo) && Aktion.wo.includes("im_Ort") )) {
                if (Aktion_Name == "gehe_zu") {
                    var max_translate_x = 514,
                        max_translate_y = 293,
                        transition = "1s ease",
                        transform = " scale(3.5) translateX("
                            + Math.max( Math.min(720 - Gegenstand.wo.links, max_translate_x), -max_translate_x)
                            + "px) translateY("
                            + Math.max( Math.min(410 - Gegenstand.wo.oben, max_translate_y), -max_translate_y)
                            + "px)",
                        ortElement = document.getElementById("Ort");
                    window.setTimeout(function() {
                        ortElement.style.transition = transition;
                        ortElement.style.transform = transform;
                        window.setTimeout(function() {
                            ortElement.style.transition = "";
                            ortElement.style.transform = "";
                            Aktion.ausführen();
                            Spiel.Spielstand.aktuelle_Aktion_Name = "";
                            zeige_Spiel_an();
                        }, 1000);
                    }, 0);
                } else {
                    Aktion.ausführen();
                    Spiel.Spielstand.aktuelle_Aktion_Name = "";
                    zeige_Spiel_an();
                }
            }
        };
    }( Gegenstand ));

    var element = document.getElementById( "Gegenstand_in_Besitz_" + Gegenstand_Name );
    if (element != null) {
        element.onclick = (function(Gegenstand) {
            return function() {

                var Aktion = Gegenstand.mögliche_Aktionen[Spiel.Spielstand.aktuelle_Aktion_Name];
                if ( Aktion && (Aktion.wo == "im_Besitz" || Array.isArray(Aktion.wo) && Aktion.wo.includes("im_Besitz")) ) {
                    Aktion.ausführen();
                    Spiel.Spielstand.aktuelle_Aktion_Name = "";
                    zeige_Spiel_an();
                }
            };
        }( Gegenstand ));
    }
}


// --- Und man muss die Aktion auch ausführen können, indem man aufs Bild klickt
document.getElementById("Ort-Bild").onclick = function() {
    var Ort = Spiel.Orte[Spiel.Spielstand.aktueller_Ort_Name];
    var mögliche_Aktion = Ort.mögliche_Aktionen[Spiel.Spielstand.aktuelle_Aktion_Name];
    if ( mögliche_Aktion ) {
        mögliche_Aktion.ausführen();
        Spiel.Spielstand.aktuelle_Aktion_Name = "";
        zeige_Spiel_an();
    }
};


zeige_Spiel_an();
