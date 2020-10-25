import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './footer.css';

function Footer() {
    return (
        <Container fluid={true} className="footer">
            <Row>
                <label className="footer-title">Let's have a chat</label>
            </Row>
            <Row className="wrapper">
                <Col lg="3" className="main-item-wrapper">
                    <div className="item-wrapper">
                        <label className="cat-title">Build</label>
                        <label className="description">Help your build something</label>
                    </div>
                </Col>
                <Col lg="3" className="main-item-wrapper">
                    <div  className="item-wrapper">
                        <label className="cat-title">Co-incubate</label>
                        <label className="description">Co-incubate an idea together</label>
                    </div>
                </Col>
                <Col lg="3" className="main-item-wrapper" >
                    <div  className="item-wrapper">
                        <label className="cat-title">Customise</label>
                        <label className="description">Customise a solution for your business</label>
                    </div>
                </Col>
                <Col lg="3" className="main-item-wrapper">
                    <div  className="item-wrapper">
                        <label className="cat-title">Organise</label>
                        <label className="description">Organise learning sessions with us</label>
                    </div>
                </Col>
            </Row>
            <Row className="last-wrapper">
                <Col xs="12"  className="info-item-wrapper">
                    <div>
                        <a href="https://www.facebook.com/codigo.co/" target="_blank" className="social-item">
                            <img src="https://www.codigo.co/img/icons/social-facebook.svg" width="12" height="22" alt="fb"/>
                        </a>
                        <a href="https://twitter.com/CodigoApps" target="_blank" className="social-item">
                            <img src="https://www.codigo.co/img/icons/social-twitter.svg" width="23" height="18" alt="twitter"/>
                        </a>
                        <a href="https://www.instagram.com/hellocodigo/" target="_blank" className="social-item">
                            <img src="https://www.codigo.co/img/icons/social-instagram.svg" width="21" height="19" alt="ig"/>
                        </a>
                        <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank" className="social-item">
                            <img src="https://www.codigo.co/img/icons/social-linkedIn.svg" width="20" height="20" alt="linkedIn"/>
                        </a>
                    </div>
                </Col>
                <Col xs="12" className="info-item-wrapper">
                    <div>
                        <label className="info">Copyright © Codigo - Mobile App Developer Singapore</label>
                    </div>
                </Col>
                <Col xs="12" className="info-item-wrapper">
                    <div>
                        <label className="info">+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</label>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;