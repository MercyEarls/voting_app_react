import '../styles/main.css'
import { Link } from 'react-router-dom'

const Verify2 = ()=>{
    
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Verify Your Identity</h1>
                <p className='pt-10'>Enter the 6-digit OTP sent to 0803xxxxxxx94</p>

                <div class="comment pt-10 text-center">
            <i className="fa fa-comment-dots fa-5x text-green-600"></i>
        </div>

        <div class="otp-empty text-center m-10">
            _____ _____ _____ _____ _____ _____
        </div>

                 <br/>
                <p>Didn't receive an OTP? <span onclick="redirect('no-access.html')"
                    className="greene font-bold text-green-700">Resend</span></p>
                <p>Don't have access to 0803xxxxxxx94? <span onclick="redirect('no-access.html')"
                    className="greene font-bold text-green-700">Click here</span></p>
                <br></br>

                <Link to='/register2'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>




        </div>
        

    )
}

export default Verify2;