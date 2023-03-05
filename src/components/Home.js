import '../styles/main.css'
import { Link } from 'react-router-dom'

const Home = ()=>{
    
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Register</h1>
                <p className='pt-10'>Choose an ID and enter number</p>

                <select className='allInput '>
                    <option>   &nbsp;&nbsp;&nbsp;Choose an ID type</option>
                    <option>232345</option>
                </select>

                <br/>

                <input className='allInput mb-20' value="   Enter ID No."/>
                <br></br>
                <div className='mt-20'>
                <Link to='/verify'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>



        </div>
        

    )
}

export default Home;