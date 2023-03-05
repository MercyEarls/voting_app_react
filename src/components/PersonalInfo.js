import '../styles/main.css'
import logo from '../assests/Images/05.jpg'
import { Link } from 'react-router-dom'

const PersonalInfo = ()=>{
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Confirm your personal Information</h1>
                <div className='align-center img'>
                <img src={logo} className="myimg items-center justify-center " alt=''/>
                </div>
                <input className='allInput' value="   Jane Anne Doe"/>
                <br/>

                <input className='allInput' value="   12-12-1992"/>
                <br/>

                <input className='allInput' value="   080 000 000 00"/>
                <br/>


                <input className='allInput' value="   Rivers State"/>
                <br/>

                <input className='allInput' value="   Obio-Akpor"/>
                <br/>


                <input className='allInput' value="   Port-Harcourt"/>
                <br/>

                <input className='allInput' value="   Road 1 HerTechTrail Street, Port-Harcourt, Rivers."/>
                <br></br>
                <Link to='/pollingunit'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>

        </div>
        

    )
}

export default PersonalInfo;