import '../styles/main.css'
import { Link } from 'react-router-dom'

const welcome = () => {

    return (
        <div className='container h-screen'>
            <div className='' w-200 h-200 bg-green-500>

            </div>

            <div className='mt-30'>
                <Link to='/Authentication'>
                    <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>

            </div>


        </div>


    )
}

export default welcome;