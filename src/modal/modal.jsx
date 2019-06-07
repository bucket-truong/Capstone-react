import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import GoogleContainer from '../GoogleContainer/GoogleContainer'
import '../css/style.css'


class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translatedText: '',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    getTranslatedText = (text) => {
        this.setState({
            translatedText: text
        })
    }



    render() {
        let textData = this.props.textData
        return (
            <div className="Modal-btn">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Translates to:</ModalHeader>
                    <ModalBody>
                        <h3>{this.state.translatedText}</h3>
                    </ModalBody>
                </Modal>
                <GoogleContainer getTranslatedText={this.getTranslatedText} toggle={this.toggle} textData={textData} />
            </div>
        );
    }
}

export default ModalExample;