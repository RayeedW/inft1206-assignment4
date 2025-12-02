// This file makes a random silly story when you click the button. 

const customName = document.getElementById('customName');
const generateButton = document.getElementById('generate');
const story = document.getElementById('story');

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk.
When they got to :inserty:, they stared in horror for a few moments, then :insertz:.
Bob saw the whole thing, but was not surprised — :insertx: is always like that.`;

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle', 'turned into a slug'];

function randomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

generateButton.addEventListener('click', () => {
  let newStory = storyText;

  const xItem = randomValue(insertX);
  const yItem = randomValue(insertY);
  const zItem = randomValue(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  story.textContent = newStory;
});
