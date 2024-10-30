var datosSecciones = {
  "seccion1": [ // Horarios
    { titulo: "Horario de atención", descripcion: "Lunes a Viernes: 9:00 - 18:00 y Sabado: 10:00 - 15:00" },
    
  ],
  "seccion2": [ // Contactos
    { titulo: "Numero de soporte", descripcion: "*235" },
    { titulo: "Whatsapp Soporte de OXXOCEL", descripcion: "528127170000" },
    { titulo: "Lamada soporte OXXOCEL", descripcion: "525591284999" },
    { titulo: "Call center de celulares a credito", descripcion: "8185262197" },
  ],
  "seccion3": [ // Ubicaciones
    { titulo: "Ubicaciones de tiendas", descripcion: "<a href='https://drive.google.com/drive/folders/1WFfSh8cQJEzunrS3q2GkLx4V1ukbrTlo?usp=sharing' target='_blank'>Ver documentos</a>" } 
  ],
  "seccion4": [ // Catálogo de celulares
    { titulo: "Catalogo de Celulares", descripcion: "<a href='https://www.oxxo.com/telefonos-celulares-smartphones' target='_blank'>LINK</a>" }
  ],
  "seccion5": [ // Escuadrón OXXOCEL
    { titulo: "Escuadron OXXOCEL", descripcion: "<a href='https://forms.office.com/Pages/ResponsePage.aspx?id=hav5Zhre1EC3uyFWWtV8zguRxuaV9hhDqoLG4ADqfDpURUpSSktQSU8zSVNGRU5TN1ZPQktXNTUzSC4u&origin=QRCode'>Formulario</a>" }
  ],
  "seccion6": [ // Portabilidad
    { titulo: "Requisitos", descripcion: "<a href='https://www.oxxocel.com/portabilidad'>Información</a>" }
    
  ],
  "seccion7": [ // Registro de ventas
    { titulo: "Formulario de registro Oaxaca", descripcion: "<a href='https://docs.google.com/forms/d/1GFHBaZluWBS_1JVFHnS6-u0TxXjn_HEHLqjpPb6wg8M/edit'>Registrar venta</a>" },
    { titulo: "Formulario de registro Humaya", descripcion: "<a href='https://docs.google.com/forms/d/1XtpE72TD9C37ar8LTwgZ1t8rS5IouMe3mOQgt9602Fs/edit'>Registrar venta</a>" },
    { titulo: "Formulario de registro Mazatlan", descripcion: "<a href='https://docs.google.com/forms/d/1GPngc6buWjzRJIDV5GCE3hEHdi3mR7d7L6AmxV7nsI4/edit'>Registrar venta</a>" },
    { titulo: "Formulario de registro Manzanillo", descripcion: "<a href='https://docs.google.com/forms/d/1L27lf6g1ufTA8_zjk3fTjI6QSAFL5Pm4k0Ae8OvPN8o/edit'>Registrar venta</a>" },
    { titulo: "Formulario de registro Vallarta", descripcion: "<a href='https://docs.google.com/forms/d/e/1FAIpQLSf-tRx9vxELgml3whw5lik5-Jr0aOCdVXiIP0FuLwnNgPfzsw/viewform?usp=sf_link'>Registrar venta</a>" },
    { titulo: "Formulario de registro Cancun y Xcaret", descripcion: "<a href='https://docs.google.com/forms/d/e/1FAIpQLSfXSfZ2cMhM0okDJNtyPUIE1uf7c9L0ChB5N9VX8A_866qpdg/viewform?usp=sf_link'>Registrar venta</a>" },
  ],
  "seccion8": [ // Formato de asistencias
    { titulo: "Descargar formato", descripcion: "<a href='https://drive.google.com/file/d/1cNNlR681OuvPCX-QZZ1aHdkxoNopazRj/view?usp=sharing' download>Descargar</a>" },
  ],

  "seccion9": [ // Apoyo Audiovisual
    { titulo: "Audios y videos", descripcion: "<a href='https://drive.google.com/drive/folders/1WvXvBuFygbwW6o3RDY73wgAdLY1yt_73?usp=sharing'>Ver</a>" },
  ]

};

function mostrarSeccion(seccionId) {
  var seccion = document.getElementById(seccionId);
  if (seccion.style.display === "none" || seccion.style.display === "") {
    seccion.style.display = "block";
    // Obtener los datos de la sección
    var datos = datosSecciones[seccionId];

    // Mostrar los datos en la sección correspondiente
    seccion.innerHTML = ""; // Limpiar el contenido anterior
    for (var i = 0; i < datos.length; i++) {
      var elemento = datos[i];
      seccion.innerHTML += `
        <h2>${elemento.titulo}</h2>
        <p>${elemento.descripcion}</p>
      `;
    }
  } else {
    seccion.style.display = "none";
  }
}