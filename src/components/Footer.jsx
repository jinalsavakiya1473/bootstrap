import { Col, Container, Row } from "react-bootstrap";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer(newfooter){
    return(
        <footer className="spacer">
            <div className="top_footer pb-5">
               <Container>
                    <Row lg={4} sm={2} xs={1}>
                        <Col>
                            <h5 className="text-light pb-4">ABOUT UMEET</h5>
                            <p>The world has become so fast paced that people don’t want to stand by reading a page of information to be they would much rather look at a presentation and understand the message. It has come to a point where images and videos are used more to</p>
                        </Col>
                        <Col>
                            <h5 className="text-light pb-4">NAVIGATION LINKS</h5>
                            <Row>
                                <Col>
                                    <ul>
                                        {
                                            newfooter.footer_obj.map((footerimg)=>{
                                                return(
                                                    <li className="pb-2"><a href="#">{footerimg.nav1}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        {
                                            newfooter.footer_obj.map((footerimg)=>{
                                                return(
                                                    <li className="pb-2"><a href="#">{footerimg.nav2}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h5 className="text-light pb-4">NEWSLETTER</h5>
                            <p>For business professionals caught between high OEM price and mediocre print and graphic output.</p>
                            <div className="input-group mt-3 d-flex flex-nowrap">
                                <input type="text" placeholder="Email Address" className="py-1 px-3" required/>
                                <button className="fs-3 location_btn border-0 py-1 px-3 text-light"><TiLocationArrowOutline></TiLocationArrowOutline></button>
                            </div>
                        </Col>
                        <Col>
                            <h5 className="text-light pb-4">INSTAFEED</h5>
                            <Row xs={4} className="g-2">
                                {
                                    newfooter.footer_obj.map((footerimg)=>{
                                        return(
                                            <Col>
                                                <img src={footerimg.image} alt="" />
                                            </Col> 
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
               </Container>
            </div>
            <div className="bottom_footer">
                <Container className="pt-4">
                    <Row className="g-3">
                        <Col lg={8} xs={12} className="left_footer text-lg-start text-center">
                            <p>Copyright ©2024 All rights reserved | This template is made with <span><FaHeart></FaHeart></span>  by <span> Jinal Savakiya</span></p>
                        </Col>
                        <Col lg={4} xs={12} className="d-flex justify-content-lg-end justify-content-center gap-3 social_footer">
                            <a href="#"><FaFacebookF></FaFacebookF></a>
                            <a href="#"><FaTwitter></FaTwitter></a>
                            <a href="#"><FaDribbble></FaDribbble></a>
                            <a href="#"><FaBehance></FaBehance></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
export default Footer;