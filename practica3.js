async function getPlant(q) {
  try {
      const apiKey = "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"; // Replace with your actual API key
      const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

      const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              "model": "google/gemini-2.0-pro-exp-02-05:free",
              "messages": [
                  { "role": "user", "content": `Give me a plant related short answer in spanish to the question: "${q}". Format the response in aesthetic HTML with clear headings (<h2>), subheadings (<h3>), and lists (<ul>) where appropriate, but do NOT include any code blocks, markdown formatting, or backticks.` }
                  // { "role": "user", "content": `Give me a plant related very short answer in spanish to the question: "${q}". Format the response in HTML` }
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
