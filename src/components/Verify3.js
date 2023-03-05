import '../styles/main.css'
import { Link } from 'react-router-dom'

const Verify3 = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Verify Your Identity</h1>
                <p className='pt-10'>Enter the Phone No. linked to your BVN</p>

                <input className='allInput' value="   080-000-000-00"/>
                <br/>

                <input className='allInput' value="   Madien"/>
                <br></br>
                <div className='mt-20'> 
                <Link to='/verify4'>
                <button className='allBtn allInput mb-0 pb-0'>Verify Me <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>

        </div>
        

    )
}

export default Verify3;