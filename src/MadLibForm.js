import React from 'react';

const MadLibForm = ( { story, handleChange} ) => {
  return (
    <form>
      <label htmlFor="story-select">Choose your MadLib!</label>
      <select id="story-select" name="story" value={story.name} onChange={handleChange}>
        <option value='select story' disabled hidden>Select Story...</option>
        <option value='1'>Story 1</option>
        <option value='2'>Story 2</option>
        <option value='3'>Story 3</option>
      </select>
    </form>
  )
}

export default MadLibForm;