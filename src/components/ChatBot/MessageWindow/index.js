import React from 'react'
import css from './messageWindow.css'

class MessageWindow extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          visualState: false,
          input: '',
          message: ''
        }
      }

    //   inputRequest = (this.state.message) => {

    //   }
      handleInput = (e) => {
        let value = e.target.value
        this.setState({
            input: value
          })
      }

      sendMessage = () => {
          this.setState({
              message: this.state.input
          })
          //fetch()
      }
      render () {
        return (
            <>
                <div
                    className={'window'}>
                    <input
                        className={'input'}
                        id={'message'}
                        name={'messageName'}
                        type={'test'}
                        value={this.state.input}
                        onChange={this.handleInput}
                        placeholder={'type a question...'}
                    />
                    <button onClick={this.sendMessage} />
                </div>
            </>
        )
      }
}

export default MessageWindow