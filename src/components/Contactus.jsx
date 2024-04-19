import { Col, Container, Row } from "react-bootstrap";
import { BsHouseDoor } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function Contactus(){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>CONTACT US</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>contact us</p>
                    </div>
                </div>
            </div>
            <Container className="spacer">
                <div className="something text-center">
                    <div className="icn_wrong">
                        <img src={require('../image/icon_error.png')} alt="" />
                        <h4 className="py-4">Oops! Something went wrong.</h4>
                        <p className="went_wrong">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                    </div>
                </div>
                <Row className="py-4">
                    <Col lg={8}>
                        <div className="replay">
                            <h5 className="pb-3 mb-5 fs-4">Get in Touch</h5>
                            <form action="#">
                                <Row>
                                    <Col xs={12} className="pb-3">
                                        <textarea className="form-control w-100" placeholder="Write comment" name="" id="" cols="30" rows="7"></textarea>
                                    </Col>
                                    <Col sm={6} xs={12} className="pb-3">
                                        <input type="text" className="form-control w-100 py-3" placeholder="Name" />
                                    </Col>
                                    <Col sm={6} xs={12} className="pb-3">
                                        <input type="text" className="form-control w-100 py-3" placeholder="Email" />
                                    </Col>
                                    <Col xs={12} className="pb-3">
                                        <input type="text" className="form-control w-100 py-3" placeholder="Website" />
                                    </Col>
                                    <Col className="pb-3"></Col>
                                </Row>
                                <div className="form-group">
                                    <button className="border-0 text-light">SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </Col>    
                    <Col lg={4}>
                        <div className="media">
                            <aside className="p-5">
                                <Row>
                                    <Col xs={12} className="d-flex mb-4">
                                        <BsHouseDoor className="fs-3 me-3 mda-icn"></BsHouseDoor>
                                        <div className="media_home">
                                            <h5><a href="#" className="text-dark fs-6">Buttonwood, California.</a></h5>
                                            <p>Rosemead, CA 91770</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="d-flex mb-4">
                                        <SlScreenSmartphone className="fs-3 me-3 mda-icn"></SlScreenSmartphone>
                                        <div className="media_home">
                                            <h5><a href="#" className="text-dark fs-6">Buttonwood, California.</a></h5>
                                            <p>Rosemead, CA 91770</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="d-flex">
                                        <TfiEmail className="fs-3 me-3 mda-icn"></TfiEmail>
                                        <div className="media_home">
                                            <h5><a href="#" className="text-dark fs-6">Buttonwood, California.</a></h5>
                                            <p>Rosemead, CA 91770</p>
                                        </div>
                                    </Col>
                                </Row>
                            </aside>
                        </div>
                    </Col>
                </Row>                    
            </Container>
        </>
    )
}
export default Contactus;