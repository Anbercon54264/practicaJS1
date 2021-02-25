//ejercicio dia de la semana
//variable para almacenar el dia que ingrese el usaurio
let dia = prompt("Ingresa un dia de la semana");
//convertir todo a minusculas
dia = dia.toLowerCase();
// se valida que el dia este entre semana o fin de semana
if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "miércoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("Entre semana");
} else {
  if (dia == "sabado" || dia == "sábado" ||dia == "domingo") {
    alert("fin de semana");
  } else {
    alert("No es un dia");
  }
}
