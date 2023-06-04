import {Component} from 'react'

import './App.css'

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

const ListItem = props => {
  const {itemDetails, updateActiveTab, isActive} = props
  const activeColorTab = isActive ? 'button_active' : 'button_normal'
  return (
    <li>
      <button
        type="button"
        className={activeColorTab}
        value={itemDetails.buttonText}
        onClick={updateActiveTab}
      >
        {itemDetails.buttonText}
      </button>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].buttonText}

  renderActiveView = activeTab => {
    const activeList = languageGreetingsList.filter(
      eachItem => eachItem.buttonText === activeTab,
    )
    return (
      <img
        className="image"
        src={activeList[0].imageUrl}
        alt={activeList[0].imageAltText}
      />
    )
  }

  updateActiveTab = event => {
    this.setState({activeTab: event.target.value})
  }

  render() {
    const {activeTab} = this.state

    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachItem => (
            <ListItem
              key={eachItem.id}
              itemDetails={eachItem}
              updateActiveTab={this.updateActiveTab}
              isActive={activeTab === eachItem.buttonText}
            />
          ))}
        </ul>
        {this.renderActiveView(activeTab)}
      </div>
    )
  }
}

export default App
