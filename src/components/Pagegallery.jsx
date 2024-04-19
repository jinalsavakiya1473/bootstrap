import { Col, Container, Row } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';

function Pagegallery(){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>EVENT GALLERY</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>Gallery</p>
                    </div>
                </div>
            </div>
            <div className="pagegallaey">
            <Container className="spacer">
                <div className="bottom_eventplan">
                    <Row lg={3} sm={2} xs={1} className="g-2">
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 14.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 15.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 16.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 17.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 18.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 19.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row lg={3} sm={2} xs={1} className="g-2">
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 14.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 15.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 16.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 17.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 18.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 m-0">
                            <div className="plan_img position-relative overflow-hidden">
                                <img src={require('../image/asset 19.png')} alt="" />
                                <div className="plan_icn">
                                    <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            </div>
        </>
    )
}
export default Pagegallery;