Array.prototype.entfernen = function( element ) {
    var index = this.indexOf( element );
    this.splice( index, 1 );
};

Array.prototype.hinzufügen = function( element ) {
    this.push( element );
};
