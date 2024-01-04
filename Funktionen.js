Array.prototype.entfernen = function( element ) {
    var index = this.indexOf( element );
    this.splice( index, 1 );
};

Array.prototype.hinzufügen = function( element ) {
    this.push( element );
};

function spiele_Sound_Effect(Sound_Name) {
    let player = document.getElementById("Sound_Effects");
    player.src = "./Sound_Effects/" + Sound_Name + ".wav";
    player.play();
}
