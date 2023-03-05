import '../styles/main.css'
import { Link } from 'react-router-dom'

const PvcStatus = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Check Your PVC Status</h1>
                <p className='pt-10'>Enter VIN/BVN/NIN</p>

                <input className='allInput' value="" placeholder= '&nbsp;&nbsp;&nbsp;Enter VIN/BVN/NIN'/>
                <br/>

                <br/>

                <Link to='/pvcstatus2'>
                <button className='allBtn allInput mb-0 pb-0'>Check Status <i className="fas fa-arrow-right" /></button>
                </Link>


        </div>
        

    )
}

export default PvcStatus;