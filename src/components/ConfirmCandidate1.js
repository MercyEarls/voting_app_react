import '../styles/main.css'
import { Link } from 'react-router-dom'

const PollingUnit2 = ()=>{
    
    return(
        <div className='container h-screen'>
                <p className='pt-50'>Choose Polling Unit</p>
                

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                </select>

                <br></br>

                <p className='pt-50'>Choose PVC Collection Center</p>
                

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                    <option>Rd 1 HerTechTrail Street, PortHarcourt, Rivers State</option>
                </select>

                <br></br>

                <div className='mt-20 button'>
                <Link to='/regsuccess'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>



        </div>
        

    )
}

export default PollingUnit2;