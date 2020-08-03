import React from 'react';

const MadLibForm = ( { userWords, wordsFormHandleChange, submitUserWords} ) => {
  return (
    <form onSubmit={submitUserWords}>
      <label htmlFor="name1">Person's Name:</label>
      <input type="text"
      id="name1"
      name="name1"
      value={userWords.name1}
      onChange={wordsFormHandleChange}
      required
      />
      <label htmlFor="adj1">Adjective:</label>
      <input type="text"
      id="adj1"
      name="adj1"
      value={userWords.adj1}
      onChange={wordsFormHandleChange}
      required
      />
      <label htmlFor="noun1">Noun:</label>
      <input type="text"
      id="noun1"
      name="noun1"
      value={userWords.noun1}
      onChange={wordsFormHandleChange}
      required
      />
      <label htmlFor="verb1">Verb:</label>
      <input type="text"
      id="verb1"
      name="verb1"
      value={userWords.verb1}
      onChange={wordsFormHandleChange}
      required
      />
      <button>Show Story!</button>
    </form>
  )
}

export default MadLibForm;