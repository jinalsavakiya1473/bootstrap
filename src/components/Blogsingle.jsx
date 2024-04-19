import { Col, Container, Row } from "react-bootstrap";
import { FaRegComments } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Blogsingle(){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>OUR BLOG</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link> <span className="pe-2">/</span>blog</p>
                    </div>
                </div>
            </div>
            <>
                <Container className="spacer">
                    <Row>
                        <Col lg={8}>
                            <div className="blog_left">
                                <div className="blog_1 mb-5">
                                    <div className="blog_image position-relative">
                                        <img src={require('../image/1.jpeg')} alt="" />
                                        <Link to="../details" className="blog_item_date">
                                            <h3 className="text-light">15</h3>
                                            <p className="text-light">Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_content">
                                        <h3>Google inks pact for new 35-storey office</h3>
                                        <p className="py-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                        <div className="blog_comment d-flex align-items-center">
                                            <BsPerson></BsPerson><a href="#" className="px-2">Travel, Lifestyle</a><span className="pe-2">|</span><FaRegComments></FaRegComments><a href="#" className="px-2"> 03 Comments</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_2 mb-5">
                                    <div className="blog_image position-relative">
                                        <img src={require('../image/2.jpeg')} alt="" />
                                        <Link to="../details" className="blog_item_date">
                                            <h3 className="text-light">15</h3>
                                            <p className="text-light">Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_content">
                                        <h3>Google inks pact for new 35-storey office</h3>
                                        <p className="py-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                        <div className="blog_comment d-flex align-items-center">
                                            <BsPerson></BsPerson><a href="#" className="px-2">Travel, Lifestyle</a><span className="pe-2">|</span><FaRegComments></FaRegComments><a href="#" className="px-2"> 03 Comments</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_3 mb-5">
                                    <div className="blog_image position-relative">
                                        <img src={require('../image/3.jpeg')} alt="" />
                                        <Link to="../details" className="blog_item_date">
                                            <h3 className="text-light">15</h3>
                                            <p className="text-light">Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_content">
                                        <h3>Google inks pact for new 35-storey office</h3>
                                        <p className="py-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                        <div className="blog_comment d-flex align-items-center">
                                            <BsPerson></BsPerson><a href="#" className="px-2">Travel, Lifestyle</a><span className="pe-2">|</span><FaRegComments></FaRegComments><a href="#" className="px-2"> 03 Comments</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_4 mb-5">
                                    <div className="blog_image position-relative">
                                        <img src={require('../image/4.jpeg')} alt="" />
                                        <Link to="../details" className="blog_item_date">
                                            <h3 className="text-light">15</h3>
                                            <p className="text-light">Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_content">
                                        <h3>Google inks pact for new 35-storey office</h3>
                                        <p className="py-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                        <div className="blog_comment d-flex align-items-center">
                                            <BsPerson></BsPerson><a href="#" className="px-2">Travel, Lifestyle</a><span className="pe-2">|</span><FaRegComments></FaRegComments><a href="#" className="px-2"> 03 Comments</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_5 mb-5">
                                    <div className="blog_image position-relative">
                                        <img src={require('../image/5.jpeg')} alt="" />
                                        <Link to="../details" className="blog_item_date">
                                            <h3 className="text-light">15</h3>
                                            <p className="text-light">Jan</p>
                                        </Link>
                                    </div>
                                    <div className="blog_content">
                                        <h3>Google inks pact for new 35-storey office</h3>
                                        <p className="py-3">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                        <div className="blog_comment d-flex align-items-center">
                                            <BsPerson></BsPerson><a href="#" className="px-2">Travel, Lifestyle</a><span className="pe-2">|</span><FaRegComments></FaRegComments><a href="#" className="px-2"> 03 Comments</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="blog_right">
                                <aside className="p-5">
                                    <form action="#">
                                        <div className="input-group mb-2">
                                            <input type="text" className="form-control" placeholder="Search keyword"/>
                                        </div>
                                        <button className="blog_search border-0 rounded-0 text-light">SEARCH</button>
                                    </form>
                                </aside>
                                <aside className="p-5 category">
                                    <h5 className="pb-3 mb-3 fs-4">Category</h5>
                                    <ul>
                                        <li className="py-3"><a href="#">Resaurant food(37)</a></li>
                                        <li className="py-3"><a href="#">Travel news(10)</a></li>
                                        <li className="py-3"><a href="#">Modern technology(03)</a></li>
                                        <li className="py-3"><a href="#">Product(11)</a></li>
                                        <li className="py-3"><a href="#">Inspiration21</a></li>
                                        <li className="py-3"><a href="#">Health Care (21)09</a></li>
                                    </ul>
                                </aside>
                                <aside className="p-5">
                                    <h5 className="pb-3 mb-3 fs-4">Recent Post</h5>
                                    <Row className="d-flex align-items-center g-2">
                                        <Col lg={4}><img src={require('../image/post1.jpeg')} alt="" /></Col>
                                        <Col lg={8}>
                                            <h6 className="post_title pb-2 fs-5"><a href="#" className="text-dark">From life was you fish...</a></h6>
                                            <p>January 12, 2019</p>
                                        </Col>
                                        <Col lg={4}><img src={require('../image/post2.jpeg')} alt="" /></Col>
                                        <Col lg={8}>
                                            <h6 className="post_title pb-2 fs-5"><a href="#" className="text-dark">From life was you fish...</a></h6>
                                            <p>January 12, 2019</p>
                                        </Col>
                                        <Col lg={4}><img src={require('../image/post3.jpeg')} alt="" /></Col>
                                        <Col lg={8}>
                                            <h6 className="post_title pb-2 fs-5"><a href="#" className="text-dark">From life was you fish...</a></h6>
                                            <p>January 12, 2019</p>
                                        </Col>
                                        <Col lg={4}><img src={require('../image/post4.jpeg')} alt="" /></Col>
                                        <Col lg={8}>
                                            <h6 className="post_title pb-2 fs-5"><a href="#" className="text-dark">From life was you fish...</a></h6>
                                            <p>January 12, 2019</p>
                                        </Col>
                                    </Row>
                                </aside>
                                <aside className="p-5">
                                    <h5 className="pb-3 mb-5 fs-4">Tag Clouds</h5>
                                    <ul className="d-flex flex-wrap row-gap-4 column-gap-2">
                                        <li><a href="#" className="cloud_btn px-3 py-2">project</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">love</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">technology</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">travel</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">restaurant</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">life style</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">design</a></li>
                                        <li><a href="#" className="cloud_btn px-3 py-2">illustration</a></li>
                                    </ul>
                                </aside>
                                <aside className="p-5">
                                    <h5 className="pb-3 mb-5 fs-4">Instagram Feeds</h5>
                                    <ul className="d-flex flex-wrap gap-2">
                                        <li><a href="#"><img src={require('../image/feed1.png')} alt="" /></a></li>
                                        <li><a href="#"><img src={require('../image/feed2.png')} alt="" /></a></li>
                                        <li><a href="#"><img src={require('../image/feed3.png')} alt="" /></a></li>
                                        <li><a href="#"><img src={require('../image/feed4.png')} alt="" /></a></li>
                                        <li><a href="#"><img src={require('../image/feed5.png')} alt="" /></a></li>
                                        <li><a href="#"><img src={require('../image/feed6.png')} alt="" /></a></li>
                                    </ul>
                                </aside>
                                <aside className="p-5">
                                    <h5 className="pb-3 mb-5 fs-4">Newsletter</h5>
                                    <form action="#">
                                        <div className="input-group mb-2">
                                            <input type="text" className="form-control" placeholder="Enter email"/>
                                        </div>
                                        <button className="blog_search border-0 rounded-0 text-light">SEARCH</button>
                                    </form>
                                </aside>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        </>
    )
}
export default Blogsingle;