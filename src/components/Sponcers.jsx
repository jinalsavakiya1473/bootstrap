import { Col, Container, Row } from "react-bootstrap";

function Sponcers(newsponser){
    return(
        <div className="sponsers">
            <Container className="spacer">
                <div className="top_tittle text-center">
                    <p>JOIN THE EVENT</p>
                    <h1 className="py-2">Event Plan Sponsors</h1>
                    <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                </div>
                <div className="bottom_sponcers">
                    <div className="top_spons">
                        <h4 className="text-center mb-5">GOLD SPONSOR</h4>
                        <Row lg={3} sm={2} xs={1} className="pb-5 gold_spons mx-auto g-3">
                            {
                                newsponser.n_sponser.sponser_obj.map((sponser)=>{
                                    return(
                                        <Col>
                                            <div className="sponser_single">
                                                <img className="img" src={sponser.image} alt="" />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                    <div className="bottom_spons">
                        <h4 className="text-center mb-5 py-3">SILVER SPONSOR</h4>
                        <Row lg={3} sm={2} xs={1} className="pb-5 silver_spons mx-auto g-3">
                            {
                                newsponser.n_sponser.sponser_obj.map((sponser)=>{
                                    return(
                                        <Col>
                                            <div className="sponser_single">
                                                <img className="img" src={sponser.image} alt="" />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Sponcers;