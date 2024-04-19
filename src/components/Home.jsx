import Banner from "./Banner";
import Conference from "./Conference";
import Eventplan from "./Eventplan";
import Innovative from "./Innovative";
import Joinummet from "./Joinummet";
import Speakers from "./Speakers";
import Sponcers from "./Sponcers";
import Ticket from "./Ticket";
import Ummet from "./Ummet";



function Home(props){
    return(
        <main>
            {/* banner */}
            <Banner />
            {/* innovative expierence */}
            <Innovative/>
            {/* Why Join Ummet */}
            <Ummet n_ummet={props}/>
            {/* Meet The Speakers */}
            <Speakers n_speaker={props}/>
            {/* Conference Schedule */}
            <Conference />
            {/* Choose Your Ticket */}
            <Ticket n_ticket={props}/>
            {/* Event Plan Sponsors */}
            <Sponcers n_sponser={props}/>
            {/* Event Plan Sponsors */}
            <Eventplan n_gallary={props}/>
            {/* Why Join Ummet */}
            <Joinummet n_join={props}/>
        </main>
    )
}
export default Home;