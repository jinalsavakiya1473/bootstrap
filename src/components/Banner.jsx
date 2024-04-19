import { PiMicrophoneStage } from "react-icons/pi";
function Banner(){
    return(
        <div className="banner">
            <div className="banner_content text-center">
                <div className="banner_icn">
                    <PiMicrophoneStage className="text-light fs-1"></PiMicrophoneStage>
                </div>
                <p className='fs-4 py-2 text-light'>20 - 22 January, 2019, Buffelo City</p>
                <h1 className='pb-5 text-light'>UX CONFERENCE 2024</h1>
                <button className="text-light border-0">BUY TICKET</button>
            </div>
        </div>
    )
}
export default Banner;