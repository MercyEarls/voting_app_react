import '../styles/main.css'
import { Link } from 'react-router-dom'

const Verify4 = ()=>{
    
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Verify Your Identity</h1>
                <p className='pt-10'>Enter the 6-digit OTP sent to 0803xxxxxxx94</p>

                <div className="comment pt-10 text-center">
            <i className="fa fa-comment-dots fa-5x text-green-600"></i>
        </div>

        <div className="otp-empty text-center m-10">

            &nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br></br>
            _____ ____ _____ _____ _____ _____
        </div>

        <br></br>
        <div className="label">
            <p className="ml-5 text-left"> Didn't receive an OTP? <span onclick="redirect('resend.html')"
                    className="greene font-bold text-green-700">Resend</span></p>
        </div>
        <div className="phone mt-5">
            <p className="ml-5 text-left">Don't have access to 0803xxxxx94? <span onclick="redirect('no-access.html')"
                    className="greene font-bold text-green-700">Click here</span></p>
        </div>
        <br></br>
        <br></br>

                <Link to='/verify5'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>




        </div>
        

    )
}

export default Verify4;