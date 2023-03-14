import '../styles/main.css'
import { Link } from 'react-router-dom'

const Home = ()=>{
    
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Log in</h1>
        <div className="label">
            <p className="ml-5 text-left">Email</p>
        </div>
        <input className='allInput mb-20' value="" placeholder='Enter your email address'/>
                <br></br>      
                

         <div className="label">
            <p className="ml-5 text-left">  Password</p>
        </div>
        <input className='allInput mb-20' value="" placeholder='Enter your password'/>
                <br></br>  
                <div className='mt-20'>
                <Link to='/verify'>
                <button className='allBtn allInput mb-0 pb-0'>Log in <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>
        <p>Don't have an account? <span className='font-xl'>Sign in</span></p>


        </div>
        

    )
}

export default Home;