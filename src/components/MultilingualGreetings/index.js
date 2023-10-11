import {Component} from 'react'

import GreetingTab from '../GreetingTab'
import GreetingImage from '../GreetingImage'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreeting extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  updatedDetails = id => {
    this.setState({activeId: id})
  }

  getActiveImage = () => {
    const {activeId} = this.state
    const activeImage = languageGreetingsList.filter(
      eachImage => eachImage.id === activeId,
    )
    return activeImage
  }

  render() {
    const {activeId} = this.state
    const activeImage = this.getActiveImage()
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="button-list">
          {languageGreetingsList.map(eachItem => (
            <GreetingTab
              key={eachItem.id}
              greetingDetails={eachItem}
              isActive={eachItem.id === activeId}
              updatedDetails={this.updatedDetails}
            />
          ))}
        </ul>
        {activeImage.map(eachItem => (
          <GreetingImage key={eachItem.id} imageDetails={eachItem} />
        ))}
      </div>
    )
  }
}
export default MultilingualGreeting
