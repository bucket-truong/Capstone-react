import React, {Component} from 'react'
import SapContainer from '../SapContainer/SapContainer'
import Modal from '../modal/modal'
import '../css/style.css'




class HomeContainer extends  Component {
  constructor(){
    super()
      this.state = {
        text: ''
      }
  }
  getExtractedText = (text) => {
    this.setState({
      text: text
    })
  }


  render(){
    let textData = this.state.text
    return(
        
      <div>
        <h3>{this.state.text}</h3>
      <div>
        <SapContainer getExtractedText={this.getExtractedText} />
        <Modal textData={textData}/>
      </div>
      </div>
    )
  }
}



export default HomeContainer




