function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Winston is a fat cat",
    autoStart: true,
    Delay: 1,
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
