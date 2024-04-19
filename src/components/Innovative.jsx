import { Col, Container, Row } from "react-bootstrap";

function Innovative(){
    return(
        <div className="innovative px-2">
            <Container className="spacer">
                <Row className="d-flex align-items-center row-gap-5">
                    <Col lg={6} className="pe-5">
                        <h5>Innovative With Experience
                        <br class="d-none d-xl-block"></br> 
                        UX Design 2024</h5>
                        <h3 className="py-4">Where The business World Meets</h3>
                        <p>Morning steas great earth for divide our good sixth called abunda itseld appear fisrd seaton upon above may bearing all moveth morning make subdue stars they are a goreat eart divide our good sixth one of that</p>
                    </Col>
                    <Col lg={6} className="text-center">
                        <ul className="d-flex flex-wrap justify-content-center mb-4 p-0">
                            <li className="day text-center me-sm-5 me-0">
                                <h2 className="fw-medium">318</h2>
                                <p>Days</p>
                            </li>
                            <li className="hour text-center me-sm-5 me-0">
                                <h2 className="fw-medium">23</h2>
                                <p>Hours</p>
                            </li>
                            <li className="mins text-center me-sm-5 me-0">
                                <h2 className="fw-medium">30</h2>
                                <p>Mins</p>
                            </li>
                        </ul>
                        <h3>January 20 -22, 2024 in Buffelo City</h3>
                        <p className='text-center ps-5 mt-2'><a href="#" className='ticket'>GET TICKET</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Innovative;