import React, { Component } from 'react'
import './Footer.scss'

import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    state = {
        d: new Date()
    }
    render() {
        return <div style={{ background: '#800000', width: '100%', color: 'white' }}>
            <Container fluid>
                <Row>
                    <Col md="3">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ marginLeft: '50%', marginTop: '25%' }}>
                                <i style={{ fontSize: '700%' }} className="fa">&#xf0eb;</i><br />
                                <p>&trade; Logo</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <ul className="footerList">
                        <h5>Title:</h5>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <ul className="footerList">
                        <h5>Title:</h5>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul></Col>
                    <Col md="3">
                        <ul className="footerList">
                        <h5>Title:</h5>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="podFuterDiv">
            <a href="https://cv-josifv.firebaseapp.com/indexEn.html" target="_blank" style={{ fontSize: '80%', color:'white' }}>Made by Josif Vacić &copy; <span>{this.state.d.getFullYear()}</span></a>
            <ul className="podFuterList" style={{ marginBottom: '0', width: '95%' }}>
                <li><a href="https://www.linkedin.com/in/josif-vacic-657660165/" target="_blank"><i style={{ fontSize: '30px', padding: '10px',color:'white' }} className="fab">&#xf08c;</i></a></li>
                <li><a href="https://stackoverflow.com/users/9685324/jozev" target="_blank"><i style={{ fontSize: '30px', padding: '10px',color:'white' }} className="fab">&#xf16c;</i></a></li>
                <li><a href="https://github.com/JosifV" target="_blank"><i style={{ fontSize: '30px', padding: '10px',color:'white' }} className="fab">&#xf092;</i></a></li>
                <li><a href="https://www.facebook.com/iosif.vacic" target="_blank"><i style={{ fontSize: '30px', padding: '10px',color:'white' }} className="fab">&#xf082;</i></a></li>
            </ul>
            </div>
        </div>
    }
}
export default Footer