class Eine_Sprechblase {
    constructor() {
        let Sprechblase_div = document.getElementById("Sprechblase");
        this.Sprechblase_div = Sprechblase_div;
        this.verstecken();
        
        let self = this;
        Sprechblase_div.onclick = function() {
            self.verstecken();
        };
    }

    anzeigen(text) {
        this.Sprechblase_div.innerText = text;
        this.Sprechblase_div.style.display = "";
    }

    verstecken() {
        this.Sprechblase_div.style.display = "none";
    }
}
