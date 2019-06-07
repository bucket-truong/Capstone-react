import React, { Component } from 'react'
import UploadContainer from './UploadContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'





class SapContainer extends Component{
    constructor() {
        super()
        this.upload.bind(this)
    }

upload = (image) => {
    let formData = new FormData()
    formData.append('file', image)
    const options = {
        method: 'post',
        body: formData
    }
    fetch('http://localhost:3000/extracttext', options)
        .then( (result) => {
            return result.json()
        })
        .then( (res) => {
            this.props.getExtractedText(res.predictions[0])
            console.log(res)
        })
        .catch( (e) => {
            console.log(e)
    
        })
}

 render (){
    return(
        <div className="sap-container">
            <UploadContainer upload={this.upload}/>
        </div>
    )
 }
}

export default SapContainer



