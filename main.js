
let nombreInvitado = prompt("Ingresa tu nombre o ESC para salir");
let edadInvitado = Number(prompt("Ingresa tu edad o ESC para salir"))

function Invitado(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
let registroInvitados = [];
while (nombreInvitado != 'ESC' && edadInvitado != 'ESC') {
    registrar()
}

function registrar() {
    nuevoInvitado = new Invitado(nombreInvitado, edadInvitado)
    registroInvitados.push(nuevoInvitado);
    console.log(registroInvitados)
    document.write("<br>Nombre del invitado: " + nombreInvitado, "<br> Edad: <br/>" + edadInvitado)
    nombreInvitado = prompt("Ingresa tu nombre o ESC para salir");
    edadInvitado = Number(prompt("Ingresa tu edad o ESC para salir"))
}