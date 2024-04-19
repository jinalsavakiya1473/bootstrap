import Sponcers from "./Sponcers";
import Ummet from "./Ummet";
import { Link } from 'react-router-dom';

function Aboutus(props){
    return(
        <>
            {/* banner */}
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>ABOUT US</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>About</p>
                    </div>
                </div>
            </div>

            {/* Why Join Ummet */}
            <Ummet n_ummet={props}/>

            {/* Event Plan Sponsors */}
            <Sponcers n_sponser={props}/>
        </>
    )
}
export default Aboutus;