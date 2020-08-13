// const Story = require("./classStory");
import Story from './classStory';

describe("classStory", () => {
  const mockStoryData = [
    {
      title: 'One Sentence Wonder',
      inputWords: {Adjective: '', Name: '', Verb: ''},
      text: ['This is a ', ' story called ', ' and it ', '!']
    }]  
  const mockUserInput = {Adjective: 'reacty', Name: 'test mad lib', Verb: 'passes'}
  const newStory = new Story(mockUserInput, mockStoryData.title);

  test('it creates an instance of Story', () => {
    expect(newStory instanceof Story).toBe(true)
  });
  
  //Need help with how to have the getText function go to the storyData file for data
  // test('it generates completed story', () => {
  //   expect(newStory.generateStory()).toBe('This is a reacty story called test mad lib, and it passes!')
  // })
})