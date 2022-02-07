function main() {

    $(".enemigo").css({
        'color': 'red',
        'font-size': '16pt',
    });

    $("#container").css({
        'display': 'flex',
        'flex-flow': 'row wrap'
    });
    $('#container > div').css({ 'border': 'solid 2px black', 'margin': '25px', 'padding': '15px' })

    var nombreEnemigo = simple_user_input("Introduce un nombre para el enemigo")
    var enemigo = new Enemigo(100, 70, nombreEnemigo, 1);
    console.log(enemigo.getVida);
    console.log(enemigo.getAtaque);
    console.log(enemigo.getNombre);
    console.log(enemigo.getNivel);
    $('#vidaTotalEnemigo').html(enemigo.getVida);


    var nombreHeroe = simple_user_input("Introduce un nombre para el heroe")
    var heroe = new Heroe(100, 80, nombreHeroe, 1);
    console.log(heroe.getVida);
    console.log(heroe.getAtaque);
    console.log(heroe.getNombre);
    console.log(heroe.getNivel);
    console.log(heroe.getExperiencia);
    $('#vidaTotal').html(heroe.getVida);

    var combates = 5;
    for (numCombate = 1; numCombate <= combates; numCombate++) {
        //enemigo = generadorEnemigos();

        var ultimo_turno = 0;
        while (!heroe.confirmarMuerte() && !enemigo.confirmarMuerte()) {
            if (ultimo_turno >= 0) {
                var ataqueHeroe = heroe.dañoAtaque()
                enemigo.reducirEnergia(ataqueHeroe)
                ultimo_turno = -1;
                $('#vidaEnemigo').html(enemigo.getVida)

            } else {
                var ataqueEnemigo = enemigo.getAtaque
                heroe.reducirEnergia(ataqueEnemigo)
                ultimo_turno = 1;
                $('#vida').html(heroe.getVida)
            }
            console.log(heroe.getNombre + ": " + heroe.getVida)
            console.log(enemigo.getNombre + ": " + enemigo.getVida)

        }

        if (!heroe.confirmarMuerte()) {
            var experiencia = enemigo.devolverXP(1)
            heroe.aumentarNivel(experiencia)
        }

    }
    // do {
    //     alert("Has ganado")
    //     var experiencia = devolverXp(experiencia)
    // } while (!heroe.confirmarMuerte() && enemigo.confirmarMuerte());

    $(".enemigo").fadeOut("slow");


    $('#nivel').html(heroe.getNivel)
    $('#experiencia').html(heroe.getExperiencia)
}

//generadorEnemigos() {
//    var enemigos = ['mercenario', 'asesino', 'demonio', 'dragon']
//    var enemigo = enemigos[Math.floor(a.length * Math.random())]
//}

main()