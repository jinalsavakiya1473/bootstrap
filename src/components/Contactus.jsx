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
                <div className="something">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93532.37739754899!2d-78.94684357042206!3d42.896335165637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126152dfe5a1%3A0x982304a5181f8171!2sBuffalo%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714023646660!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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