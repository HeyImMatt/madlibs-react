import React from 'react';
import { render } from '@testing-library/react';
import StorySelect from './StorySelect';

describe('StorySelect tests', () => {
  const titles = {
    1: 'Test Title 1',
    2: 'Test Title 2'
  }

  it('will render without crashing', () => {
    render(<StorySelect titles={titles} />)
  })
  
  it("matches snapshot", () => {
    const { asFragment } = render(<StorySelect titles={titles} />);
    expect(asFragment()).toMatchSnapshot();
  });
})