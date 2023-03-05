import '../styles/main.css'
import { Link } from 'react-router-dom'

const Verify = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Verify Your Identity</h1>
                <p className='pt-10'>Enter the Phone No. linked to your BVN</p>

                <input className='allInput' value="   Enter Phone No."/>
                <br/>

                <input className='allInput mb-20' value="   Enter Your Name"/>
                <br></br>
                <div className='mt-20'>
                <Link to='/verify2'>
                <button className='allBtn allInput mb-0 pb-0'>Verify Me <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>
        </div>
        

    )
}

export default Verify;