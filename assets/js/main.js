//iterar el array de objetos con un ciclo for
/* for (let i = 0; i < dental.length; i++){
    console.log(dental[i].price)
} */

//for in

/* for (let diente in dental) {
    console.log(dental[diente].name)
} */

/* 
for (let diente of dental) {
    console.log(diente.name)
} */

const dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//segundo requerimiento mostrar la primera y ultima consulta npmbre y prevision"

document.write(`<p>Primera atencion: ${dental[0].paciente} -
${dental[0].prevision} | Última atención: ${
  dental[dental.length - 1].paciente
} - ${dental[dental.length - 1].prevision}.</p>`);

let tabla = "";
for (let i = 0; i < dental.length; i++) {
  tabla += `
  <tr>
  <td>${dental[i].hora}</td>
  <td>${dental[i].especialista}</td>
  <td>${dental[i].paciente}</td>
  <td>${dental[i].rut}</td>
  <td>${dental[i].prevision}</td>
  </tr>`;
}

console.log(tabla)

document.getElementById('cuerpo').innerHTML = tabla