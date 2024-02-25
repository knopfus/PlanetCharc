Array.prototype.entfernen = function( element ) {
    var index = this.indexOf( element );
    this.splice( index, 1 );
};

Array.prototype.hinzufügen = function( element ) {
    this.push( element );
};

Array.prototype.ist_gleich = function( array ) {
    return JSON.stringify(array) === JSON.stringify(this);
}

function spiele_Sound_Effect(Sound_Name) {
    let player = document.getElementById("Sound_Effects");
    player.src = "./Sound_Effects/" + Sound_Name + ".wav";
    player.play();
}

function sind_näher_als(Koordinaten_1, Koordinaten_2, Abstand) {
    let AbstandXQuadrat = (Koordinaten_1.links - Koordinaten_2.links) ** 2;
    let AbstandYQuadrat = (Koordinaten_1.oben - Koordinaten_2.oben) ** 2;
    let AbstandQuadrat = AbstandXQuadrat + AbstandYQuadrat;

    return AbstandQuadrat < Abstand ** 2;
}