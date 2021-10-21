import React from 'react'
import css from './chatBot.css'
import img from './chatBot.svg'
import MessageWindow from './MessageWindow'

class ChatBot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visualState: true,
      window: true
    }
  }

  handleClick = () => {
    !this.state.window
      ? document.addEventListener('click', this.handleOutsideClick, false)
      : document.removeEventListener('click', this.handleOutsideClick, false)
    this.setState(prevState => ({
      window: !prevState.window
    }))
  }
  handleOutsideClick = (e) => {
    if (this.myDiv && this.myDiv.contains(e.target)) {
      return
    }
    this.handleClick()
  }

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevProps.visualState !== this.state.visualState) {
//         this.setState({
//             visualState: this.props.visualState
//         })
//     }
//   }

  render () {
    return (
      <>
        { this.state.visualState
          ? <div
            className={'chatBot'}
            ref={(c) => {
                this.myDiv = c
              }}>
            <img 
                className={'chatIcon'}
                src={img}/>
            { this.state.window 
                ? <MessageWindow />
                : null }
          </div>
          : null
        }
      </>
    )
  }
}
ChatBot.propTypes = {
}
export default ChatBot