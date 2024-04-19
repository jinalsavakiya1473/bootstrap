import { Col, Container, Row } from "react-bootstrap";
import { GoPlus } from "react-icons/go";

function Eventplan(newgallary){
    return(
        <div className="eventplan">
            <Container className="spacer">
                <div className="top_tittle text-center">
                    <p className="text-light">JOIN THE EVENT</p>
                    <h1 className="py-2 text-light">Event Plan Sponsors</h1>
                    <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                </div>
                <div className="bottom_eventplan">
                    <Row lg={3} sm={2} xs={1} className="g-2">
                        {
                            newgallary.n_gallary.gallary_obj.map((gallery)=>{
                                return(
                                    <Col className="p-0 m-0">
                                        <div className="plan_img position-relative overflow-hidden">
                                            <img src={gallery.image} alt="" />
                                            <div className="plan_icn">
                                                <GoPlus className="fs-1 text-light gallary_add  rounded-circle"></GoPlus>
                                            </div>
                                        </div>
                                    </Col>  
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Eventplan;