import '../styles/main.css'
import { Link } from 'react-router-dom'

const PvcStatus2 = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Check Your PVC Status</h1>
                <p className='pt-10'>Enter VIN/BVN/NIN</p>

                <input className='allInput' value="" placeholder= '&nbsp;&nbsp;&nbsp;23456739837628'/>
                <br/>

                <br/>

                <Link to='/pvcready'>
                <button className='allBtn allInput mb-0 pb-0'>Check Status <i className="fas fa-arrow-right" /></button>
                </Link>


        </div>
        

    )
}

export default PvcStatus2;