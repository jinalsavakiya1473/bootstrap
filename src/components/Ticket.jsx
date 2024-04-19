import { Col, Container, Row } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkOutline } from "react-icons/io5";

function Ticket(newticket){
    return(
        <div className="ticket_price">
            <Container className="spacer">
                <div className="top_tittle text-center">
                    <p>JOIN THE EVENT</p>
                    <h1 className="py-2">Conference Schedule</h1>
                    <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                </div>
                <div className="bottom_ticket">
                    <Row lg={3} md={2} sm={1} className="g-5">
                        {
                            newticket.n_ticket.ticket_obj.map((ticket)=>{
                                return(
                                    <Col>
                                        <div className="text-dark text-center border border-1 rounded bg-light price_card">
                                            <div className="price_head border-1 border-bottom">
                                                <h3 className="pb-3 pt-5">{ticket.name}</h3>
                                                <p className="fw-normal">Attend only first day</p>
                                                <h1 className="d-flex align-items-center justify-content-center py-4"><span className="fs-1">$</span>{ticket.rupees}</h1>
                                            </div>
                                            <div className="price_middle fw-normal border-1 border-bottom">
                                                <ul className="py-4">
                                                    <li><span className="pe-2"><IoCheckmarkOutline></IoCheckmarkOutline></span> Unlimited Entrance</li>
                                                    <li><span className="pe-2"><IoCheckmarkOutline></IoCheckmarkOutline></span> Comfortable Sea</li>
                                                    <li><span className="pe-2"><IoCheckmarkOutline></IoCheckmarkOutline></span> Paid Certificate</li>
                                                    <li><span className="pe-2 cross"><RxCross1></RxCross1></span> Day One Workshop</li>
                                                    <li><span className="pe-2 cross"><RxCross1></RxCross1></span> One Certificate</li>
                                                </ul>
                                            </div>
                                            <div className="price_footer py-5">
                                                <button className="border-1 border">BUY NOW</button>
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
export default Ticket;