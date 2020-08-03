import React, { useState } from 'react';
import useFormFields from './hooks/useFormFields';
import MadLibForm from './MadLibForm';

const MadLib = () => {
  const [story, handleChange, resetFormData] = useFormFields({name: 'select story'})
  
  return (
    <>
    <h2>Mad Libs!</h2>
    <MadLibForm story={story} handleChange={handleChange} />
    </>
  )
}


export default MadLib;