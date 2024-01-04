class Ein_Spiel {
    constructor(Spielaufbau) {
        this.Portale = {};
        for (let Portal_Name of Spielaufbau.Portale) {
            let Portal = new Ein_Portal(Portal_Name, this);
            this.Portale[Portal_Name] = Portal;
        }

        this.Orte = {};
        for (let Ort_Name in Spielaufbau.Orte) {
            let Ort = new Ein_Ort(Ort_Name, this);
            this.Orte[Ort_Name] = Ort;
        }

        for (let Ort_Name in Spielaufbau.Orte) {
            let Eigenschaften = Spielaufbau.Orte[Ort_Name];

            let Ort = this.Orte[Ort_Name];
            for (let Portal_Name in Eigenschaften.Portale) {
                let Portal_Eigenschaften = Eigenschaften.Portale[Portal_Name];
                let zu = this.Orte[Portal_Eigenschaften.zu];
                Ort.portal(Portal_Name, { zu: zu, links: Portal_Eigenschaften.links, oben: Portal_Eigenschaften.oben, breit: Portal_Eigenschaften.breit, hoch: Portal_Eigenschaften.hoch });
            }
        }

        this.Gegenstände = {};
        for (let Gegenstand_Name in Spielaufbau.Gegenstände) {
            let Eigenschaften = Spielaufbau.Gegenstände[Gegenstand_Name];

            let Gegenstand = new Ein_Gegenstand(Gegenstand_Name, Eigenschaften, this);
            this.Gegenstände[Gegenstand_Name] = Gegenstand;
            
            if ( Eigenschaften.in ) {
                Gegenstand.platziere_in(this.Orte[Eigenschaften.in]);
            }
        }

        this.Monster = {};
        for (let Monster_Name in Spielaufbau.Monster) {
            let Eigenschaften = Spielaufbau.Monster[Monster_Name];

            let Monster = new Ein_Monster(Monster_Name, Eigenschaften, this);
            this.Monster[Monster_Name] = Monster;
        }

        this.Aktionen = {};
        for (let Aktion_Name in Spielaufbau.Aktionen) {
            let Eigenschaften = Spielaufbau.Aktionen[Aktion_Name];

            let Aktion = new Eine_Aktion(Aktion_Name, Eigenschaften, this);
            this.Aktionen[Aktion_Name] = Aktion;
        }

        let self = this;
        document.getElementById("Ort-Bild").onclick = function() {
            if (self.aktive_Aktion) {
                self.aktive_Aktion.ausführen_auf_Ort();
            }
        };

        this.Kraft = 20;

        this.Ort = null;
        this.gehe_zu_Ort(this.Orte[Spielaufbau.Ich.in]);

        this.aktive_Aktion = null;
    }

    gehe_zu_Ort(Ort) {
        if (this.Ort) {
            this.Ort.verlassen();
        }

        this.Ort = Ort;
        this.Ort.betreten();

        for (var Monster_Name in this.Monster) {
            let Monster = this.Monster[Monster_Name];
            Monster.gehe_in_zufälligen_Ort();
        }
    }
}