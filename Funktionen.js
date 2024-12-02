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

async function spiele_Sound_Effect(Sound_Name) {
    let player = document.createElement("audio");
    player.src = "./Sound_Effects/" + Sound_Name + ".wav";

    try {
        await player.play();
    }
    catch (error) {
        if (error.message.includes("no supported source")) {
            console.log("Sound Effect '" + Sound_Name + "' fehlt (noch).");
        } else {
            console.error(error);
        }
    }    
}

async function spiele_Musik(Musik_Name, wiederholen) {
    let player = document.getElementById("musik");
    player.src = "./Musik/" + Musik_Name + ".wav";
    player.loop = !!wiederholen;

    try {
        await player.play();
    }
    catch (error) {
        if (error.message.includes("no supported source")) {
            console.log("Musik '" + Musik_Name + "' fehlt (noch).");
        } else {
            console.error(error);
        }
    }    
}

async function stoppe_Musik() {
    let player = document.getElementById("musik");
    player.pause();
    player.currentTime = 0;
}

function sind_näher_als(Koordinaten_1, Koordinaten_2, Abstand) {
    let AbstandXQuadrat = (Koordinaten_1.links - Koordinaten_2.links) ** 2;
    let AbstandYQuadrat = (Koordinaten_1.oben - Koordinaten_2.oben) ** 2;
    let AbstandQuadrat = AbstandXQuadrat + AbstandYQuadrat;

    return AbstandQuadrat < Abstand ** 2;
}

const rot13 = str => {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < str.length; i++) {
        const index = input.indexOf(str[i]);
        encoded += output[index];
    }

    return encoded;
}
