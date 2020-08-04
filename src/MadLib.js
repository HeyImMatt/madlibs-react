import React, { useState, useEffect } from 'react';
import useToggleState from './hooks/useToggleState'
import useFormFields from './hooks/useFormFields';
import MadLibForm from './MadLibForm';
import MadLibStory from './MadLibStory';
import Story from './classStory'
import storyData from './storyData'

const MadLib = () => {
  const titles = Story.generateTitles();
  const [showMadLib, setShowMadLib] = useToggleState(false);
  const [showForm, setShowForm] = useState(false);
  const [storyWords, setStoryWords] = useState([]);
  const [storyTitle, setStoryTitle] = useState('select story')
  const [userWords, wordsFormHandleChange, wordsFormResetFormData] = useFormFields({})

  const handleTitleSelect = (e) => {
    setStoryTitle(e.target.value);
  }

  const submitUserWords = (e) => {
    e.preventDefault();
    setStoryWords((storyWords)=> ([...storyWords, userWords]));
    setShowMadLib(true);
    setShowForm(false);
    wordsFormResetFormData();
  }

  //Render different form fields based on selected story
  useEffect(() => {
    if (storyTitle !== 'select story') {
      for (let story of storyData) {
        if (story.title === storyTitle) {
          wordsFormResetFormData({...story.inputWords});
          setShowForm(true);
        }
      }
    }
  }, [storyTitle])

  return (
    <>
    <h2>Mad Libs!</h2>
    <label htmlFor="story-select">Choose your Mad Lib!</label>
    <select id="story-select" value={storyTitle} onChange={handleTitleSelect}>
      <option value='select story' disabled hidden>Select Story...</option>
      {Object.values(titles).map((title, idx) => (<option id={idx + 1} value={title}>{title}</option>)) }
    </select>
    {showForm && <MadLibForm 
    userWords={userWords} 
    wordsFormHandleChange={wordsFormHandleChange} 
    submitUserWords={submitUserWords} />}
    {showMadLib && <MadLibStory storyWords={storyWords[0]} />}
    </>
  )
}


export default MadLib;