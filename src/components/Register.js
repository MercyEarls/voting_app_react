import '../styles/main.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='container h-screen'>
            <h1 className='pt-50'>Log in</h1>
            <p className='pt-10'>Email</p>

            <input className='allInput' value="" placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter email address' />
            <br />

            <div className='container h-screen'>
                <p className='pt-5'>Password </p>

                <input className='allInput' value="" placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your password ' />
                <br />




                <Link to='/VerifyIdentity'>
                    <button className='allBtn allInput mb-0 pb-0'>Log in <i className="fas fa-arrow-right" /></button>
                </Link>
                <div className='text-center justify-center align-center flex'>
                    <p>Don't have an account? <span className='font-bold' >Sign in</span></p>
                </div>
            </div>
        </div>


    )
}

export default Register;