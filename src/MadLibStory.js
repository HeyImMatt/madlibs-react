import React from 'react';

const MadLibStory = ({ madLibText, storyTitle, startOver }) => {
  return (
    <div className="story-container">
      <h3>{storyTitle}</h3>
      <p>{madLibText}</p>
      <button type="button" onClick={startOver}>Start Over</button>
    </div>
  )
}

export default MadLibStory;