/* Seleccionamos el segundo párrafo por medio de su Id 
Utilizaremos el selector individual  document.getElementById(' ') */

/* Creamos una variable para guardar la selección */

/* Utilizamos la función del botón para seleccionar y escribir el texto en el párrafo dos */
function EscribirTexto() {
    var segundoP= document.getElementById('tercerParrafo')
segundoP.innerHTML=arregloNombres.sort() } 

// Selector para seleccionar elementos por medio de su id, clase o etiqueta 
var sParrafo=document.querySelector('#segundoParrafo')
//var sParrafo=document.querySelector('parrafo') 
// var sParrafo=document.querySelector('p')

/*Cargar el arreglo con nombres de personas: 
Luego ordenar mediante el metodo sort() */

/* Utilizar un parrafo para mostrar los nombres sin ordenar: */
var arregloNombres=['Lourdes', 'Ximena','Raul','Ana','Eliana','Paula']
var sinOrdenar=document.querySelector('#segundoParrafo')
sinOrdenar.innerHTML=arregloNombres.join(', ')

/* Utilizar un párrafo para imprimir los nombres ordenados en un tercer párrafo */

/*Parrafo en el metodo map*/
var arregloPrecios=[420, 600, 100, 200, 560, 777]
var sinOrdenar=document.querySelector('#quintoParrafo')
sinOrdenar.innerHTML=arregloPrecios.join(', ')
  
function aumentarArreglo() {
    var aumentar= document.getElementById('sextoParrafo')
aumentar.innerHTML=arregloPrecios.map((arregloPrecios)=>arregloPrecios+(arregloPrecios*0.10))

}