let productos = [
    {
        nombre : "Camiseta",
        precio : " $ 50.00 ",
        descripcion: "Camiseta negra Rock",
        imagem: "XXXX"
    }
]




function mostrarProductos(){
    const catalogo = document.getElementById("catalogo")
}

productos.forEach(function(camisetas){

    const tarjetaProductos = document.createElement("div")
    tarjetaProductos.classList.add("productos")

    const img = document.createElement("img")
    img.src = productos.imagem
    img.alt = productos.nombre
    tarjetaProductos.appendChild(img)

    const nombre = document.createElement("h2")
    nombre.textContent = productos.nombre
    tarjetaProductos.appendChild(h2)

    const descripcion = document.createElement("h3")
    descripcion.textContent = productos.descripcion
    tarjetaProductos.appendChild(h3)

    const precio = document.createElement("p")
    precio.textContent = productos.precio
    tarjetaProductos.appendChild(p)
    
})

mostrarProductos();


//  // Array de productos
//  const productos = [
//     {
//       nombre: "Camiseta básica",
//       precio: "$15.00",
//       descripcion: "Camiseta de algodón 100%, disponible en varios colores.",
//       imagen: "https://via.placeholder.com/200x150?text=Camiseta"
//     },
//     {
//       nombre: "Pantalones deportivos",
//       precio: "$25.00",
//       descripcion: "Pantalones deportivos cómodos y transpirables.",
//       imagen: "https://via.placeholder.com/200x150?text=Pantalones"
//     },
//     {
//       nombre: "Zapatos casuales",
//       precio: "$45.00",
//       descripcion: "Zapatos de cuero genuino, perfectos para el día a día.",
//       imagen: "https://via.placeholder.com/200x150?text=Zapatos"
//     },
//     {
//       nombre: "Chaqueta de invierno",
//       precio: "$60.00",
//       descripcion: "Chaqueta acolchada, ideal para el clima frío.",
//       imagen: "https://via.placeholder.com/200x150?text=Chaqueta"
//     },
//     {
//       nombre: "Gorra deportiva",
//       precio: "$10.00",
//       descripcion: "Gorra ajustable, perfecta para actividades al aire libre.",
//       imagen: "https://via.placeholder.com/200x150?text=Gorra"
//     }
//   ];

//   // Función para mostrar los productos en la página
//   function mostrarProductos() {
//     const catalogo = document.getElementById("catalogo");

//     // Recorrer el array de productos y crear elementos HTML
//     productos.forEach(producto => {
//       // Crear un contenedor para cada producto
//       const tarjetaProducto = document.createElement("div");
//       tarjetaProducto.classList.add("producto");

// //       // Agregar imagen
// //       const img = document.createElement("img");
// //       img.src = producto.imagen;
// //       img.alt = producto.nombre;
// //       tarjetaProducto.appendChild(img);

// //       // Agregar nombre
// //       const nombre = document.createElement("h2");
// //       nombre.textContent = producto.nombre;
// //       tarjetaProducto.appendChild(nombre);

// //       // Agregar descripción
// //       const descripcion = document.createElement("p");
// //       descripcion.textContent = producto.descripcion;
// //       tarjetaProducto.appendChild(descripcion);

// //       // Agregar precio
// //       const precio = document.createElement("p");
// //       precio.textContent = producto.precio;
// //       precio.classList.add("precio");
// //       tarjetaProducto.appendChild(precio);

// //       // Agregar la tarjeta al catálogo
// //       catalogo.appendChild(tarjetaProducto);
// //     });
// //   }

// //   // Llamar a la función para mostrar los productos
// //   mostrarProductos();
// //