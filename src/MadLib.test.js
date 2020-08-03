import React from 'react';
import { render } from '@testing-library/react';
import MadLib from './MadLib';

it('will render without crashing', () => {
  render(<MadLib />)
})