function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let topicElement = document.querySelector("#topic-form-input");
  let apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
  let context =
    "You are a romantic AI author that creates stories that are unique and short";
  let prompt = `Write 4 short sentences about ${topicElement.value}. Style in basic HTML without saying HTML and each sentence on a new line. Sign the bottom with " - ❤️ AI"`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="blink">✍️ Generating a short story about ${topicElement.value}....</div>`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
