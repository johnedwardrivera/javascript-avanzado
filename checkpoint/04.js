// 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 4️⃣
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//  🟢 Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
//
// Tip: Podés usar el operador delete para los objetos.

function atenderClientes(clientes) {
  // Tu código aquí:
  // obtener el tamaño del objecto

  let obj = Object.keys(clientes);
  if (obj.length == 0) {
    return clientes;
  }
  delete clientes[obj.length];

  return atenderClientes(clientes);
}
const lista1 = {
  1: "Franco",
  2: "María",
  3: "Alejo",
};
let prueba = atenderClientes(lista1);
console.log(prueba);

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  atenderClientes,
};
