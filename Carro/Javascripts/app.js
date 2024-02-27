/* var colorTitulo = document.querySelector ('h1')
colorTitulo.addEventListener ('click', cambioColor)

var estado = 0

function cambioColor () {
     if (estado === 0) {
        colorTitulo.style.color = "Red"
        estado = 1
        colorTitulo.innerHTML = "Tengo hambre"
    }
    else if (estado === 1) {
        colorTitulo.style.color = "Blue"
        estado = 2
        colorTitulo.innerHTML = "Tengo sueño"
    }

    else if (estado === 2) {
        colorTitulo.style.color = "Black"
        estado = 0
        colorTitulo.innerHTML = "Andrews"
    }
}

var ocultarImagen = document.querySelector ('.oculto')
var quitarImg = document.querySelector ('.imagen')

ocultarImagen.addEventListener ('click', aparecerImagen)

function aparecerImagen () {
    quitarImg.classList.remove('quitar')
}
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


var animacionFondo = document.querySelector('.contenedor')
var animacionCarro = document.querySelector ('.carro')
var animacionLlanta1 = document.querySelector ('.llanta1')
var animacionLlanta2 = document.querySelector ('.llanta2')
var animacionLuces = document.querySelector ('.luces')
var animacionSprite = document.querySelector ('.sprite')


animacionFondo.addEventListener ('click', fondoMover)

function fondoMover () {
    animacionFondo.classList.add ('contenedorMover')
    animacionCarro.classList.add ('carroMover')
    animacionLlanta1.classList.add ('llanta1Mover')
    animacionLlanta2.classList.add ('llanta2Mover')
    animacionLuces.classList.add ('lucesMover')
    animacionLuces.classList.remove ('lucesOcultas')
    animacionSprite.classList.add ('spriteMover')
    animacionSprite.classList.remove ('spriteOculto')
}