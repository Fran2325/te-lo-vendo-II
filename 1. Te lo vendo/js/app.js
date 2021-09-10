
let d = new Date();
let f = ('Fecha: '+d.getDate()+'<br>Dia de la semana: '+d.getDay()+'<br>Mes (0 al 11): '+d.getMonth()+'<br>Año: '+d.getFullYear()+'<br>Hora: '+d.getHours()+'<br>Hora UTC: '+d.getUTCHours()+'<br>Minutos: '+d.getMinutes()+'<br>Segundos: '+d.getSeconds());

document.getElementById("datos").innerHTML=f;


let r = new Date();
document.getElementById("Fecha").innerHTML=r;
