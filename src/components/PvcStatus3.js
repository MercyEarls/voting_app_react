import '../styles/main.css'
import logo from '../assests/Images/05.jpg'
import { Link } from 'react-router-dom'

const PvcStatus3 = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>PVC Status</h1>
                <div className='align-center img'>
                <img src={logo} className="myimg items-center justify-center " alt=''/>
                </div>
                <h2 className='text-center font-bold'>Hello, Jane Doe</h2>
                <h2 className='text-center font-bold'>20-19-02-020</h2>
                
                <p className='pt-2'>Polling Unit</p>
                <input className='allInput' value="   Road 1 HerTechTrail Street, Port-Harcourt, Rivers."/>
                
                <p className='pt-2'>Collection Center</p>
                <input className='allInput' value="   Road 1 HerTechTrail Street, Port-Harcourt, Rivers."/>
                
                <p className=''>Change collection center? <span onclick="redirect('resend.html')"
                    className="greene font-bold text-green-700">Resend</span></p>
                <div className='pt-20'>
                <Link to='/'>
                <button className='allBtn allInput mb-0 pb-0'>Close <i className="fas fa-arrow-right" /></button>
                </Link>
                   </div> 
        </div>
        

    )
}

export default PvcStatus3;