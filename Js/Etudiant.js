"use strict";

class Etudiant {
    constructor(nom, note1, note2, note3) {
        this.nom = nom;
        this.note1 = Number(note1);
        this.note2 = Number(note2);
        this.note3 = Number(note3);
    }

    // Getter et setter
    get nom() {
        return this._nom;
    }

    set nom(value) {
        if (typeof value != null) {
            this._nom = value;
        } else {
            console.error("Nom invalide");
        }
    }

    get note1() {
        return this._note1;
    }

    set note1(value) {
        if (value >= 0 && value <= 20) {
            this._note1 = value;
        } else {
            console.error("Note1 invalide");
        }
    }

    get note2() {
        return this._note2;
    }

    set note2(value) {
        if (value >= 0 && value <= 20) {
            this._note2 = value;
        } else {
            console.error("Note2 invalide");
        }
    }

    get note3() {
        return this._note3;
    }

    set note3(value) {
        if (value >= 0 && value <= 20) {
            this._note3 = value;
        } else {
            console.error("Note3 invalide");
        }
    }

    moyenne() {
        return (this.note1 + this.note2 + this.note3) / 3;
    }

    toString() {
        return `${this.nom} - [${this.note1}, ${this.note2},${this.note3}], Moyenne : ${this.moyenne().toFixed(2)}`;
    }

}

let groupe1 = [
    new Etudiant("Maurice", 12, 10, 15),
    new Etudiant("Ravao", 13, 12, 10),
    new Etudiant("Joseph", 14, 10, 14),
    new Etudiant("Veronic", 10, 10, 10)
];

for(const e of groupe1){
    console.log(e.toString())
}

