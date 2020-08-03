import React from 'react';
import { render } from '@testing-library/react';
import MadLibForm from './MadLibForm';

it('will render without crashing', () => {
  render(<MadLibForm />)
})