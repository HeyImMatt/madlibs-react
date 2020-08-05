import React from 'react';
import './StorySelect.css'

export default function StorySelect( {titles, storyTitle, handleTitleSelect}) {
  return (
    <>
      <label htmlFor="story-select">Choose your Mad Lib!</label>
      <select id="story-select" value={storyTitle} onChange={handleTitleSelect}>
        <option value='select story' disabled hidden>Select Story...</option>
        {Object.values(titles).map((title, idx) => (<option id={idx + 1} value={title} key={idx}>{title}</option>)) }
      </select>
    </>
  )  
}