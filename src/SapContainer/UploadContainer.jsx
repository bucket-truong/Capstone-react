import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CustomInput, FormGroup, Label } from 'reactstrap'
import '../css/style.css'


class UploadContainer extends Component {
    constructor() {
        super ()
        // this.state = {
        //     image: ''
        // }
        this.onChange.bind(this)
    }
    onChange = (e) => {
        let files = e.target.files[0]
        this.props.upload(files)
        // let reader = new FileReader()
        // reader.readAsDataURL(files[0])
        // reader.onload = (e) => {
        //     // this.setState({
        //     //     image: e.target.result
        //     // })
        //     this.props.upload(e.target.result)
        // }
    }

    render(){
        return(
            <div className="upload-container">
                < FormGroup >
                    <Label for="exampleCustomFileBrowser"></Label>
                    <CustomInput className="file-field" type="file" accept="image/jpeg" onChange={(e) => this.onChange(e)} id="exampleCustomFileBrowser" name="customFile" />
                    {/* <Button outline color="primary" size="sm" onClick={this.handleUpload}>Submit</Button>  */}

                </FormGroup >
                
            </div>
            
        )
    }
}

export default UploadContainer


  