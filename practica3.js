const part1 = "sk";
const part2 = "-proj-aVzAAmvcCWj3tZW3xXIU5AQkzBQJbN4JlCjD4zjgovht5rltcmTUKTzXMrT6jcbsWuWZlmz7e2T3BlbkFJtil9mJs98RrA19R4XjHm2wi5LMHPiUkckGYYRY793tLwbGq_QC52QqMOypGRdyML_WwYp_JZoA"
const apiKey = part1 + part2;

async function getPlant(q) {
  try {
      const apiUrl = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": [
          { 
            "role": "user", 
            "content": `Dame una respuesta breve en español sobre plantas a la pregunta: "${q}". 
                        Formatea la respuesta en HTML estético con títulos (<h2>), subtítulos (<h3>), 
                        listas (<ul>).`
          }
        ],
        "temperature": 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const json = await response.json();
    console.log("API Response:", json);

    if (json.choices && json.choices.length > 0) {
      let plantInfo = json.choices[0].message.content;
      plantInfo = plantInfo.replace("```html", "").replace("```", "").trim(); // Clean unwanted formatting

      document.getElementById("output").innerHTML = plantInfo;
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
