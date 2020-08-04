import React from 'react';

const MadLibForm = ( { userWords, wordsFormHandleChange, submitUserWords} ) => {
  return (
    <form onSubmit={submitUserWords}>
      {Object.keys(userWords).map((wordType) => (
      <input 
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