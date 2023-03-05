import '../styles/main.css'
import logo from '../assests/Images/05.jpg'
import logo2 from '../assests/Images/payment.png'
import { Link } from 'react-router-dom'

const PvcReady = ()=>{
    
    return(
    <div>
        <div className='bg-green-700 h-15 main'>
        
            <img src={logo} className="myimg" alt=''  />

            
            <h2 className="sub">YOUR PVC IS READY!</h2>
            </div>
            <h2 className='text-left mt-10 font-bold ml-5'> Hello Jane</h2>

            <div className='img2 text-center pt-10'>
                <img src={logo2} className='' alt='' />
            </div>

        <p className='justify-center mt-10 font-xs'>Your PVC is now ready for collection. Click the button to check your designated collection center to find out where you can collect it.</p>
            
            <div className='pt-20'>
            <Link to='/pvcstatus3'>
                <button className='allBtn allInput'>Check collection center <i className="fas fa-arrow-right" /></button>
            </Link>

            </div>
    </div>

        
        

    )
}

export default PvcReady;