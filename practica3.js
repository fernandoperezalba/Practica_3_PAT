
// function getPlant(q){
//   $.ajax({
//     url:"https://trefle.io/api/v1/plants/search?token=VldyjaIcaB83LyYTcMQuBBIe0YfvefwNoDYkfQdfhr0&q=${q}",
//     success: function(res) {

//       document.getElementById("output").innerHTML="<br><br><h1>"+res.data[0].common_name+" - "
//       +res.data[0].scientific_name+"</h1><br><img src='"
//       +res.data[0].image_url+"' /><br>Descubierto en el año: "
//       +res.data[0].year + "por: "+res.data[0].author
//     },
//     error: function(xhr, status, error) {
//       console.error("Error en la solicitud AJAX:", error);
//       document.getElementById("output").innerHTML = "Se produjo un error al cargar los datos.";
//     }
//   });
// }

// async function getPlant(q) {
//   try {
//     const response = await fetch(`http://trefle.io/api/v1/plants/search?token=VldyjaIcaB83LyYTcMQuBBIe0YfvefwNoDYkfQdfhr0&q=${q}`);
//     // if (!response.ok) {
//     //   throw new Error('La solicitud a la API falló');
//     // }
//     const json = await response.json();

//     if (json.data && json.data.length > 0) {
//       const plant = json.data[0];
//       document.getElementById("output").innerHTML = `<br><br><h1>${plant.common_name} - ${plant.scientific_name}</h1><br><img src='${plant.image_url}' /><br>Descubierto en el año: ${plant.year} por: ${plant.author}`;
//     } else {
//       document.getElementById("output").innerHTML = "No se encontraron resultados.";
//     }
//   } catch (error) {
//     console.error("Error en la solicitud:", error);
//     document.getElementById("output").innerHTML = "Se produjo un error al cargar los datos.";
//   }
// }

function getPlant(q){
  $.ajax({
    url:`https://trefle.io/api/v1/plants/search?token=VldyjaIcaB83LyYTcMQuBBIe0YfvefwNoDYkfQdfhr0&q=${q}`,
    success: function(res) {

      document.getElementById("output").innerHTML="<br><br><h1>"+res.data[0].common_name+" - "
      +res.data[0].scientific_name+"</h1><br><img src='"
      +res.data[0].image_url+"' /><br>Descubierto en el año: "
      +res.data[0].year + "por: "+res.data[0].author
    },
    error: function(xhr, status, error) {
      console.error("Error en la solicitud AJAX:", error);
      document.getElementById("output").innerHTML = "Se produjo un error al cargar los datos.";
    }
  });
}



function validateUser(user,pass) {
  if (correo.length!=0 && pass.length!=0){
    alert('Se ha suscrito con éxito. Recibirá un correo cada mes desde el cual podrá acceder a la revista.');
  }else{
    alert('Introduzca valores en todos los campos.');
  }
}