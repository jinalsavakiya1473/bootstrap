import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { TiSocialSkypeOutline } from "react-icons/ti";

function Speakers(newspeaker) {
    return (
        <>
            <div className="speakers">
                <Container className="spacer">
                    <div className="top_tittle text-center text-light">
                        <p className="text-light">JOIN THE EVENT</p>
                        <h1 className="py-2 text-light">Meet The Speakers</h1>
                        <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                    </div>
                    <div className="bottom_speaker">
                        <Row lg={3} sm={2} xs={1} className="g-5">
                            {
                                newspeaker.n_speaker.speaker_obj.map((speakers) => {
                                    return (
                                        <Col>
                                            <div className="meet_speaker">
                                                <div className="position-relative">
                                                    <img className="speaker_img" src={speakers.image} alt="" />
                                                    <div className="speaker_footer position-absolute start-0 bottom-0 p-3 text-center">
                                                        <h5 className="text-light">{speakers.name}</h5>
                                                        <p className="text-light pt-2">UX/UI Designer Microsoft</p>
                                                    </div>
                                                    <div className="speaker_overlay position-absolute start-0 top-0">
                                                        <ul className="d-flex social position-absolute start-50 top-50 gap-2">
                                                            <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                                            <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                                            <li><a href="#"><TfiInstagram></TfiInstagram></a></li>
                                                            <li><a href="#"><TiSocialSkypeOutline></TiSocialSkypeOutline></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Container >
            </div >
        </>
    )
}
export default Speakers;