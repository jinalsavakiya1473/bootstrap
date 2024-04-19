import Conference from "./Conference";
import { Link } from 'react-router-dom';

function Pageschedule(){
    return(
        <>
            <div className="about_us">
                <div className="banner small-banner">
                    <div className="text-center">
                        <h1 className='mb-3 fw-bold text-light'>EVENT SCHEDULE</h1>
                        <p className="text-light"><Link className="text-light pe-2" to="/">Home</Link><span className="pe-2">/</span>Schedule</p>
                    </div>
                </div>
            </div>
            <Conference/>
        </>
    )
}
export default Pageschedule;