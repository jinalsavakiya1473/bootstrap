import { Col, Container, Row } from "react-bootstrap";

function Ummet(newummet) {
    return (
        <>
            <>
                <div className="ummet">
                    <Container className="spacer">
                        <div className="top_tittle text-center">
                            <p>JOIN THE EVENT</p>
                            <h1 className="py-2">Why Join Ummet</h1>
                            <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                        </div>
                        <div className="bottom_ummet">
                            <Row className="row-gap-5 mb-5">
                                {
                                    newummet.n_ummet.ummet_obj.map((ummet) => {
                                        return (
                                            <Col lg={4} className="text-center px-5">
                                                <div className="service">
                                                    <div className="ummet_img fs-1 d-flex justify-content-center">{ummet.icn}</div>
                                                    <h5 className="py-4">{ummet.name}</h5>
                                                    <p className="px-xxl-3 px-0">{ummet.cont}</p>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <div className="text-center ummet_btn text-dark">
                                <button className="me-sm-3 me-0 bg-light">LEARN MORE</button>
                                <button className="bg-light">BUY TICKET</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        </>
    )
}
export default Ummet;