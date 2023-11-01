let contactos = ["Juan Perez", "Ana Sánchez", "Pedro González"];
function agregarContacto(nombre_completo) {

    contactos.push(nombre_completo);

}
function borrarContacto(nombre_completo) {

    let index = contactos.indexOf(nombre_completo);

    if (index !== -1) {

        contactos.splice(index, 1);

    }

}
function imprimirContactos() {

    for (let i = 0; i < contactos.length; i++) {

        console.log(contactos[i]);

    }
}
