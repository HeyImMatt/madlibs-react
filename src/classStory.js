import storyData from './storyData'

export default class Story {
  constructor(inputWords, title) {
    this.inputWords = Object.values(inputWords);
    this.title = title;
  }

  generateStory() {
    const text = this.getText();
  
    return text.reduce((acc, fragment, idx) => {
      if (idx < this.inputWords.length) {
        return acc += fragment + this.inputWords[idx].toLowerCase();
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

  getText() {
    for (let story of storyData) {
      if (this.title === story.title) {
        return story.text;
      }
    }
  }

}