class Personaje {
    constructor(vida, ataque, nombre, nivel) {
        this.vida = vida;
        this.vidaTotal = vida;
        this.ataque = ataque;
        this.nombre = nombre;
        this.nivel = nivel;
    }

    get getVida() {
        return this.vida;
    }

    set setVida(_vida) {
        this.vida = _vida;
    }
    get getVidaTotal() {
        return this.vida;
    }

    set setVidaTotal(_vida) {
        this.vida = _vida;
    }
    get getAtaque() {
        return this.ataque;
    }

    set setAtaque(_ataque) {
        this.vida = _ataque;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(_nombre) {
        this.nombre = _nombre;
    }

    get getNivel() {
        return this.nivel;
    }

    set setNivel(_nivel) {
        this.nivel = _nivel;
    }

    reducirEnergia(daño) {
        this.vida = this.vida - daño;
    }

    confirmarMuerte() {
        return this.vida <= 0 ? true : false;
    }


}
