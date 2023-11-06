let contactos = [
    { id: 1, nombres: "Juan", apellidos: "Pérez", telefono: "555-1234", ubicaciones: [{ ciudad: "Ciudad 1", dirección: "Calle 123" }] },
    { id: 2, nombres: "Ana", apellidos: "Sanchez", telefono: "555-2345", ubicaciones: [{ ciudad: "Ciudad 2", dirección: "Calle 456" }] },
    { id: 3, nombres: "Pedro", apellidos: "Gonzales", telefono: "555-3456", ubicaciones: [{ ciudad: "Ciudad 3", dirección: "Calle 789" }] }
];
function addContacto(id, nombres, apellidos, telefono, ubicaciones) {
    contactos.push({ id, nombres, apellidos, telefono, ubicaciones });
}
function removeContacto(id) {
    contactos = contactos.filter(contacto => contacto.id !== id);
}
function printContactos() {
    for (let i = 0; i < contactos.length; i++) {
        console.log(`${i + 1}. ${contactos[i].nombres} ${contactos[i].apellidos} - Teléfono: ${contactos[i].telefono} - Ubicación: ${contactos[i].ubicaciones[0].ciudad}, ${contactos[i].ubicaciones[0].dirección}`);
    }
}
function updateContacto(id, nombre) {
    contactos = contactos.map(contacto => {
        if (contacto.id === id) {
            return { id, nombre };
        }
        return contacto;
    });
}
