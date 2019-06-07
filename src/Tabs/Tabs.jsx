import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import HomeContainer from '../HomeContainer/HomeContainer'
import '../css/style.css'


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs className="tabs">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Translator
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            How to use
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            APIs Used
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Stack
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <HomeContainer />
                            </Col>
                        </Row>
                    </TabPane>
                    
                    <TabPane tabId="2" className="card" >
                        <Row>
                            <Col sm="6">
                                <p>This is app is designed to extract text from natural images, take the text and translate it into another language</p>
                                <p>To use this, start by clicking the "choose a file/browse button", then upload a jpeg image with clear natural text. Make sure the text is legible. This will take a couple of seconds to extract the text, wait untill the text displays on the page. After text has been displayed, hit the "translate" button.</p>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>SAP OCR API</CardTitle>
                                    <CardText>https://api.sap.com/api/ocr_api/resource</CardText>
                                    <Button>Go to source</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body className="card">
                                    <CardTitle>Google Translate APIt</CardTitle>
                                    <CardText>https://cloud.google.com/translate/docs/</CardText>
                                    <Button>Go to source</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4" className="card">
                        <Row>
                            <Col sm="12">
                                <p>React</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}