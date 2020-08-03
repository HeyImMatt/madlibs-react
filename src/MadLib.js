import React, { useState } from 'react';
import MadLibForm from './MadLibForm';

const MadLib = () => {
  const INITIAL_FORM_DATA = {
    story: 'select story',
    adj1: '',
    noun1: '',
    verb1: '',
    adj2: '',
    name: ''
  }
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <MadLibForm formData={formData} handleChange={handleChange} />
  )
}

export default MadLib;