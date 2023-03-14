import '../styles/main.css'
import logo from '../assests/Images/success.png'
import { Link } from 'react-router-dom'

const SelectCandidate = ()=>{
    
    return(
    <div>
        <div className='align-center img'>
            <img src={logo} className="pt-20  " alt='' />
        </div>
             
                
            <h2 className="text-center pt-10 font-bold">Registration Successful</h2>
            <div className='mt-20'>
            <Link to='/selectcandidate1'>
                <button className='allBtn allInput'>Okay, Thanks <i className="fas fa-arrow-right" /></button>
            </Link>

            </div>
    </div>

        
        

    )
}

export default SelectCandidate;