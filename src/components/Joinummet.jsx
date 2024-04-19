import { Container } from "react-bootstrap";
import { MdOutlineWatchLater } from "react-icons/md";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TfiCommentsSmiley } from "react-icons/tfi";

const jowl={
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:1
        },
        1000:{
            items:2
        }
    }
}
function Joinummet(newjoin){
    return(
        <div className="joinummet">
            <Container className="spacer">
                <div className="top_tittle text-center">
                    <p>JOIN THE EVENT</p>
                    <h1 className="py-2">Why Join Ummet</h1>
                    <p className="image pt-1"><img src={require('../image/asset 1.png')} width={100} alt="" /></p>
                </div>
                <div className="bottom_carousel">
                    <OwlCarousel className='owl-theme' {...jowl}>
                        {
                            newjoin.n_join.join_obj.map((join)=>{
                                return(
                                    <div class='item rounded-3'>
                                        <div className="owls p-3">
                                            <img src={join.image} alt="" />
                                            <div className="owl_cont p-5">
                                                <h5 className="pb-3">Owls should be used to help abused children open up in therapy sessions, says charity boss</h5>
                                                <div className="owl_icn text-secondary"><TfiCommentsSmiley></TfiCommentsSmiley><span className="ps-2 pe-5">03 Feb, 2019</span><MdOutlineWatchLater></MdOutlineWatchLater><span className="ps-2">No Comment</span></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </Container>
        </div>
    )
}

export default Joinummet;