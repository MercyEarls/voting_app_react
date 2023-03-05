import '../styles/main.css'
import Button from './Button';

const Home = ()=>{
    return(
        <div className="text-center w-full h-screen flex items-center justify-center">
            <div className='w-32 h-32 rounded-full bg-green-500'></div>
            <Button label="Vote" handleClick={()=>{}}/>
        </div>

    )
}

export default Home;