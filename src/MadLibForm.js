import React from 'react';
import './MadLibForm.css'

const MadLibForm = ( { userWords, wordsFormHandleChange, submitUserWords} ) => {
  return (
    <form id="mad-libs-form" onSubmit={submitUserWords}>
      {Object.keys(userWords).map((wordType, idx) => (
      <input 
      key={idx}
      type="text"
      placeholder={wordType}
      name={wordType}
      value={userWords.wordType}
      onChange={wordsFormHandleChange}
      required
      />
      ))}
      <button>Show Story!</button>
    </form>
  )
}

export default MadLibForm;