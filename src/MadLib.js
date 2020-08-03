import React, { useState, useEffect } from 'react';
import useToggleState from './hooks/useToggleState'
import useFormFields from './hooks/useFormFields';
import MadLibForm from './MadLibForm';
import MadLibStory from './MadLibStory';

const MadLib = () => {
  const [showMadLib, setShowMadLib] = useToggleState(false);
  const [showForm, setShowForm] = useToggleState(true);
  const [storyWords, setStoryWords] = useState([]);
  //const [story, handleChange] = useFormFields({name: 'select story'})
  const [userWords, wordsFormHandleChange, wordsFormResetFormData] = useFormFields({
    name1: '',
    adj1: '',
    noun1: '',
    verb1: ''
  })

  const submitUserWords = (e) => {
    e.preventDefault();
    setStoryWords((storyWords)=> ([...storyWords, userWords]));
    setShowMadLib(true);
    setShowForm(false);
    wordsFormResetFormData();
  }
  //Render different form fields based on selected story
  // useEffect(() => {
  //   if (story.name !== 'select story') {
  //     console.log(story)
  //   }
  // }, [story])

  return (
    <>
    <h2>Mad Libs!</h2>
    {/* <label htmlFor="story-select">Choose your Mad Lib!</label>
    <select id="story-select" name="name" value={story.name} onChange={handleChange}>
      <option value='select story' disabled hidden>Select Story...</option>
      <option value='1'>Story 1</option>
      <option value='2'>Story 2</option>
      <option value='3'>Story 3</option>
    </select> */}
    {showForm && <MadLibForm 
    userWords={userWords} 
    wordsFormHandleChange={wordsFormHandleChange} 
    submitUserWords={submitUserWords} />}
    {showMadLib && <MadLibStory storyWords={storyWords[0]} />}
    </>
  )
}


export default MadLib;