import React from 'react';

const MadLibStory = ({ userWords }) => {
  return (
    <div className="story-container">
      <p>Hello {userWords.name1}! This is a {userWords.adj1} story about nothing!
      It's basically {userWords.noun1}. So stop {userWords.verb1} and pay attention!</p>
    </div>
  )
}

export default MadLibStory;