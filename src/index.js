import React from 'react';

let appState = {
  title: {
    text: "A React Litte Book",
    color: "red"
  },
  content: {
    text: "React.js Content",
    color: "blue"
  }
}

function dispatch(action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent(content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}


renderApp(appState)

dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React 小书》' })
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
renderApp(appState)