import React from 'react';
import { render } from '@testing-library/react';
import MadLibForm from './MadLibForm';

describe('MadLibForm Tests', () => {
  const userWords = ['this', 'is', 'a', 'test']
  
  it('will render without crashing', () => {
    render(<MadLibForm userWords={userWords} />)
  })
  
  it("matches snapshot", () => {
    const { asFragment } = render(<MadLibForm userWords={userWords} />);
    expect(asFragment()).toMatchSnapshot();
  });
})