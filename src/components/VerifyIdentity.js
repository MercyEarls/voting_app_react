import '../styles/main.css'
import { Link } from 'react-router-dom'

const VerifyIdentity = () => {
    return (
        <div className='container h-screen'>
            <h1 className='pt-50'>Verify Your Identity</h1>
            <p className='pt-10'>Enter the 6-digit that was sent to your email address</p>

            <input className='allInput' value="" placeholder='' />
            <br />

            <div className="label flex">
                <p className="ml-5 text-left"> OTP not sent? </p>
                <p><span onclick="redirect('resend.html')"
                    className="greene font-bold text-black-700 text-right mr-5">Resend</span></p>
            </div>

            <br />

            <div className='mt-20'>
                <Link to='/verifyidentity1'>
                    <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>
            </div>

            <div className='text-center justify-center align-center flex'>
                <p>Want to try another method of verification? </p>
            </div>
            <div>
                <p className='font-bold text-center justify-center align-center flex'>Click here </p>
            </div>

        </div>


    )
}

export default VerifyIdentity;