async function getPlant(q) {
  try {
    const proxyUrl = 'https://api.allorigins.win/get?url='
    const apiUrl = 'https://trefle.io/api/v1/plants/search?token=VldyjaIcaB83LyYTcMQuBBIe0YfvefwNoDYkfQdfhr0&q=' + q
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl))
    if (!response.ok) {
      throw new Error('La solicitud a la API falló');
    }
    const json = await response.json();
    const nestedData = JSON.parse(json.contents)

    if (nestedData.data && nestedData.data.length > 0) {
      const plant = nestedData.data[0];
      document.getElementById("output").innerHTML = `<br><br><h1>${plant.common_name} - ${plant.scientific_name}</h1>
      <br>Descubierto en el año: ${plant.year} por: ${plant.author}<br><img src='${plant.image_url}' />`;

    } else {
      document.getElementById("output").innerHTML = "No se encontraron resultados.";
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    document.getElementById("output").innerHTML = "Se produjo un error al cargar los datos.";
  }
}


function validateUser(email, pass) {
  if (email.length!=0 && pass.length!=0 && email.includes('@')){
    alert('Se ha suscrito con éxito. Recibirá un correo cada mes desde el cual podrá acceder a la revista.');
  }else{
    alert('Introduzca valores en todos los campos y asegurese de que la dirección de correo es válida.');
  }
}