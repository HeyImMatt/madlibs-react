import storyData from './storyData'

export default class Story {
  constructor(inputWords, text) {
    this.inputWords = inputWords;
    this.text = text;
  }

  generateStory() {
    const userWords = Object.values(this.inputWords);
  
    return this.text.reduce((acc, fragment, idx) => {
      if (idx < userWords.length) {
        return acc += fragment + userWords[idx];
      }
      return acc += fragment;
    }, '')
  }

  static generateTitles() {
    return storyData.reduce((acc, story, idx) => {
      acc[idx + 1] = story.title;
      return acc;
    }, {})
  }

}