import '../styles/main.css'
import { Link } from 'react-router-dom'

const Register2 = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Register</h1>
                <p className='pt-10'>Choose an ID and enter number</p>

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;NIN</option>
                    <option>232345</option>
                </select>

                <br/>

                <input className='allInput' value="   200 100 300 40"/>
                <br></br>
                <div className='mt-20'>
                <Link to='/verify3'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>
        </div>
        

    )
}

export default Register2;