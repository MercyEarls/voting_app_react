import '../styles/main.css'
import { Link } from 'react-router-dom'

const SelectVote = () => {

    return (
        <div className='container h-screen'>
            <h1 className='pb-55'>Select a vote</h1>
            <p className='pb-5'>Click the button to vote</p>
            <div className='entire'>
                <div className=" div1 flex">
                    <div className='f-inner1 similar '>
                        <div className='f-inner11 text-center justify-center flex align-center'>
                            <p>BB Naija</p>
                        </div>
                    </div>

                    <div className='f-inner2  similar'>
                        <div className='f-inner11'>
                            <p>BB Naija</p>
                        </div>
                    </div>

                </div>


                <div className="div2 flex">
                    <div className='s-inner1  similar'>
                        <div className='f-inner11'></div>
                        <div className=''>BB Naija</div>
                    </div>
                    <div className='s-inner2  similar'>
                        <div className='text-center'>
                            <div className='circle f-inner11'></div>
                        </div>
                        <div className='text-center'>
                            <div className='circle '></div>

                        </div>
                    </div>
                </div>
            </div>
            <br />

            <Link to='/selectvote1'>
                <button className='allBtn allInput mb-0 pb-0'>See all <i className="fas fa-arrow-right" /></button>
            </Link>
            <div className='text-center align-center justify-center flex'>
                <p className=''>OR</p>
            </div>


        </div>


    )
}

export default SelectVote;