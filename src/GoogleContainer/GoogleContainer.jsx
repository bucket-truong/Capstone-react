import React, { Component } from 'react';
import { Button } from 'reactstrap'

class GoogleContainer extends Component {
  constructor(){
    super()
    this.translate.bind(this)
  }




   translate = (text) => {
     fetch(`http://localhost:3000/translate?source=en&target=es&q=${text}`)
    .then(results => {
      return results.json()
    }).then(res => {
      this.props.getTranslatedText(res.data.translations[0].translatedText)
    }).catch( e => console.log(e) )
  }

  handleTranslate = () => {
    this.props.toggle()
    this.translate(this.props.textData)
  }

    render(){
      return(
        <div className="translated-text">
          <Button size="sm" outline color="primary" onClick={this.handleTranslate}>Translate</Button>
        </div>
      )
    }
}

export default GoogleContainer



