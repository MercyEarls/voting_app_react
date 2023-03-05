import '../styles/main.css'
import { Link } from 'react-router-dom'

const PollingUnit = ()=>{
    
    return(
        <div className='container h-screen'>
                <p className='pt-50'>Choose Polling Unit</p>
                

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;Select Location</option>
                    <option>Lagos</option>
                    <option>River</option>
                    <option>Onisha</option>
                </select>

                <br/>

                <p className='pt-50'>Choose PVC Collection Center</p>
                

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;Select Location</option>
                    <option>Lagos</option>
                    <option>River</option>
                    <option>Onisha</option>
                </select>

                <br/>

                <div className='mt-30'>
                <Link to='/pollingunit2'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>

                </div>


        </div>
        

    )
}

export default PollingUnit;