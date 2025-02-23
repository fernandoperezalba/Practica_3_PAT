const part1 = "sk";
const part2 = "-or-v1-c78e0d085066450011e45847e308179dad0a565ba43788b3d17d91d5033843b5"
const apiKey = part1 + part2;

async function getPlant(q) {
  try {
      const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

      const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              "model": "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
              "messages": [
                  { "role": "user", "content": `Give me a plant related short answer in spanish to the question: "${q}". Format the response in aesthetic HTML with clear headings (<h2>), subheadings (<h3>), and lists (<ul>) where appropriate, but do NOT include any code blocks, markdown formatting, or backticks.` }
                ],
              "top_p": 1,
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
          plantInfo = plantInfo.replace(/^```html\s*/, "");
          plantInfo = plantInfo.replace(/```$/, "");
          // Displaying the response
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
