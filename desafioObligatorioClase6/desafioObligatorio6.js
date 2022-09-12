class Deberes {
    constructor(tema, alumno, materia){
    this.tema = tema,
    this.alumno = alumno,
    this.materia = materia
    }
    mostrarData(){
        console.log(`hola de nuevo lucas giordano, bienvenido al listado de tareas de coderhouse nuevamente.
                    Cuestion debe corregir un examen de ${this.alumno} que practicamente el examen es sobre ${this.tema} de la materia ${this.materia} `)
    }
}



const tarea1 = new Deberes ("backend","Yoel Kovach","programacion")
const tarea2 = new Deberes ("angular", "Luciano Pereyra","programacion" )
const tarea3 = new Deberes ("photoshop", "Gonzalo Zelarayan", "artes digitales")
const tarea4 = new Deberes ("data science", "Claudio Kovach", "data")
const tarea5 = new Deberes ("ciberseguridad","Francisco", "ciberseguridad")

const laburo = [tarea1, tarea2, tarea3, tarea4, tarea5]

let respuesta = prompt(`Hola Lucas Giordano buen dia le gustaria tener un breve resumen de los deberes de hoy?
responde si o no`)

function mostrarDeberes(array){
    alert("en la consola puede ver sus deberes de hoy")
    array.forEach((deber)=>{ deber.mostrarData() })
}
if(respuesta == "si" ){
    mostrarDeberes(laburo)
}else if(respuesta == "no"){
    alert("okey cuando necesite la informacion se puede comunicar")
}





























