import React from 'react';

const MadLibStory = ({ madLibText, storyTitle }) => {
  return (
    <div className="story-container">
      <h3>{storyTitle}</h3>
      <p>{madLibText}</p>
    </div>
  )
}

export default MadLibStory;