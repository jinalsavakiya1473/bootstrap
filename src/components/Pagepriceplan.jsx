import Sponcers from "./Sponcers";
import Ticket from "./Ticket";
import { Link } from 'react-router-dom';

function Pagepriceplan(props){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>PRICING PLAN</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>Plan</p>
                    </div>
                </div>
            </div>
            <Ticket n_ticket={props}/>
            <Sponcers n_sponser={props}/>
        </>
    )
}
export default Pagepriceplan;