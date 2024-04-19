// https://preview.colorlib.com/theme/umeet/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Speaker from './components/Speaker';
import Pageschedule from './components/Pageschedule';
import Pagegallery from './components/Pagegallery';
import Pagepriceplan from './components/Pagepriceplan';
import Blogsingle from './components/Blogsingle';
import Blogdetail from './components/Blogdetail';
import Contactus from './components/Contactus';
import { IoEarthOutline } from "react-icons/io5";
import { PiMicrophoneStage } from "react-icons/pi";
import { LiaTrophySolid } from "react-icons/lia";

function App() {
  const ummetobj=[
    {
      icn:<IoEarthOutline />,
      name:'Always First Service',
      cont:'His likeness beast moved domini moved above meat all fly blessed greater creepeth you itself living room',
    },
    {
      icn:<PiMicrophoneStage />,
      name:'International Business',
      cont:'His likeness beast moved domini moved above meat all fly blessed greater creepeth you itself living room',
    },
    {
      icn:<LiaTrophySolid />,
      name:'World Great Speaker',
      cont:'His likeness beast moved domini moved above meat all fly blessed greater creepeth you itself living room',
    },
  ]
  const speakerobj=[
    {
      name:'Jhon Leonar',
      image:require('./image/asset 2.png'),
    },
    {
      name:'Donald Markin',
      image:require('./image/asset 3.png'),
    },
    {
      name:'Donald Markin',
      image:require('./image/asset 4.png'),
    },
    {
      name:'Donald Markin',
      image:require('./image/asset 4.png'),
    },
    {
      name:'Jhon Leonar',
      image:require('./image/asset 2.png'),
    },
    {
      name:'Jhon Leonar',
      image:require('./image/asset 3.png'),
    },
  ]
  const ticketobj=[
    {
      name:'Normal',
      rupees:'45.00',
    },
    {
      name:'Advance',
      rupees:'50.00',
    },
    {
      name:'Ultimate',
      rupees:'60.00',
    },
  ]
  const gallaryobj=[
    {
      image:require('./image/asset 14.png')
    },
    {
      image:require('./image/asset 15.png')
    },
    {
      image:require('./image/asset 16.png')
    },
    {
      image:require('./image/asset 17.png')
    },
    {
      image:require('./image/asset 18.png')
    },
    {
      image:require('./image/asset 19.png')
    },
  ]
  const sponserobj=[
    {
      image:require('./image/asset 8.png')
    },
    {
      image:require('./image/asset 9.png')
    },
    {
      image:require('./image/asset 10.png')
    },
  ]
  const joinobj=[
    {
      image:require('./image/asset 20.png')
    },
    {
      image:require('./image/asset 21.png')
    },
  ]
  const footerobj=[
    {
      nav1:'Home',
      nav2:'Team',
      image:require('./image/asset 22.jpeg')
    },
    {
      nav1:'Feature',
      nav2:'Pricing',
      image:require('./image/asset 23.jpeg')
    },
    {
      nav1:'Services',
      nav2:'Blog',
      image:require('./image/asset 24.jpeg')
    },
    {
      nav1:'Portfolio',
      nav2:'Contact',
      image:require('./image/asset 25.jpeg')
    },
    {
      image:require('./image/asset 26.jpeg')
    },
    {
      image:require('./image/asset 27.jpeg')
    },
    {
      image:require('./image/asset 28.jpeg')
    },
    {
      image:require('./image/asset 29.jpeg')
    },
  ]
  return (
   <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home ummet_obj={ummetobj} speaker_obj={speakerobj} ticket_obj={ticketobj} gallary_obj={gallaryobj} sponser_obj={sponserobj} join_obj={joinobj}/>}></Route>
      <Route path='about' element={<Aboutus ummet_obj={ummetobj} sponser_obj={sponserobj}/>}></Route>
      <Route path='speaker' element={<Speaker speaker_obj={speakerobj}/>}></Route>
      <Route path='schedule' element={<Pageschedule/>}></Route>
      <Route path='gallery' element={<Pagegallery/>}></Route>
      <Route path='price' element={<Pagepriceplan ticket_obj={ticketobj} sponser_obj={sponserobj}/>}></Route>
      <Route path='single' element={<Blogsingle/>}></Route>
      <Route path='details' element={<Blogdetail/>}></Route>
      <Route path='contact' element={<Contactus/>}></Route>
    </Routes>
    <Footer footer_obj={footerobj}/>
   </>
  );
}

export default App;
