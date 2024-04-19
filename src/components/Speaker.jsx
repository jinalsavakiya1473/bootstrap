import Innovative from "./Innovative";
import Speakers from "./Speakers";
import { Link } from 'react-router-dom';

function Speaker(props){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>OUR SPEAKER</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>speakers</p>
                    </div>
                </div>
            </div>
            <Innovative/>
            <Speakers n_speaker={props}/>
        </>
    )
}
export default Speaker;