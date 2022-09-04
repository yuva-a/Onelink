import React from 'react'
import './styles.css'
import {Link,useHistory} from 'react-router-dom'

function Home() {

    const history = useHistory();

    return (
        <>
        <div className="hmb">
            <div className="hmnav">
                <div className="hmlogo">
           one<span>Link</span></div>  
           <button onClick ={ ()=>{
                    history.push('/login')
                }}>Log In</button>
           </div>
        
        <div className="hmc">
            <div> Messing up your important urls? </div><span>Dontworry now u can add all ur urls at oneplace with oneLink</span> 
            <div>
                <button onClick ={ ()=>{
                    history.push('/register')
                }}>Get Started for Free</button>
                <p>Already on oneLink? <Link to='/login'>Login</Link></p>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Home
