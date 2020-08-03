import React from 'react';

const MadLibStory = ({ storyWords }) => {
  const {name1, adj1, noun1, verb1} = storyWords;
  return (
    <div className="story-container">
      <p>Hello {name1}! This is a {adj1} story about nothing!
      It's basically {noun1}. So stop {verb1} and pay attention!</p>
    </div>
  )
}

export default MadLibStory;