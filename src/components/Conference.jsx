import { Col, Container, Row } from "react-bootstrap";

function Conference(){
    return(
        <div className="conference">
            <Container className="spacer">
                <div className="top_tittle text-center">
                    <p>JOIN THE EVENT</p>
                    <h1 className="py-2">Conference Schedule</h1>
                    <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                </div>
                <div classname="bottom_conference">
                    <ul className="nav nav-tabs justify-content-center d-flex gap-3 border-0 mb-5" id="myTab" role="tablist">
                        <li>
                            <button className="tab-btn rounded-0 px-5 py-3 border-0" id="day-1" data-bs-toggle="tab" data-bs-target="#day-1-pane" aria-controls="home-tab-pane">
                                <h5 className="pb-2">Day 1</h5>
                                <p>23 jan, 2024</p>
                            </button>
                        </li>
                        <li>
                            <button className="tab-btn active rounded-0 px-5 py-3 border-0" id="day-2" data-bs-toggle="tab" data-bs-target="#day-2-pane" aria-controls="profile-tab-pane" >
                                <h5 className="pb-2">Day 2</h5>
                                <p>23 jan, 2024</p>
                            </button>
                        </li>
                        <li>
                            <button className="tab-btn rounded-0 px-5 py-3 border-0" id="day-3" data-bs-toggle="tab" data-bs-target="#day-3-pane" aria-controls="contact-tab-pane" >
                                <h5 className="pb-2">Day 3</h5>
                                <p>23 jan, 2024</p>
                            </button>
                        </li>
                        <li>
                            <button className="tab-btn rounded-0 px-5 py-3 border-0" id="day-4" data-bs-toggle="tab" data-bs-target="#day-4-pane" aria-controls="disabled-tab-pane">
                                <h5 className="pb-2">Day 4</h5>
                                <p>23 jan, 2024</p>
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="day-1-pane" aria-labelledby="day-1" >
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 5.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 6.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="day-2-pane" aria-labelledby="day-2" >
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 7.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 5.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 6.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="day-3-pane" aria-labelledby="day-3" >
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 7.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 5.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 6.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="day-4-pane" aria-labelledby="day-4" >
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 7.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 5.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="achivement mx-lg-5 mx-0 px-lg-5 px-0 mb-3">
                                <Row>
                                    <Col lg={3} className="p-0">
                                        <div className="card_identity text-center py-5">
                                            <img src={require('../image/asset 6.png')} alt="" />
                                            <h5 className="py-3 text-light">Adam Jamsmith</h5>
                                            <p className="text-light">UX/UI Designer</p>
                                        </div>
                                    </Col>
                                    <Col lg={9} className="d-flex align-items-center schedule_cont">
                                        <div className="p-3">
                                            <p>9.00 AM - 10.30 AM</p>
                                            <h5 className="py-3">Previous Year achivement</h5>
                                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default Conference;