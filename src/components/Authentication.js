import '../styles/main.css'
import { Link } from 'react-router-dom'

const Authentication = () => {
    return (
        <div className='container h-screen'>
            <h1 className='pt-20'>Authentication</h1>
            <input className='allInput' value="" placeholder='&nbsp;&nbsp;Enter VIN' />
            <br></br>
            <div className=''>
                <Link to='/Authentication1'>
                    <button className='allBtn allInput mb-0 pb-0'>Login and vote <i className="fas fa-arrow-right" /></button>
                </Link>
            </div>
        </div>


    )
}

export default Authentication;