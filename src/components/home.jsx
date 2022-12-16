import "./home.css"
import {signInWithGoogle} from "../services/firebase"
import { Link } from "react-router-dom"
export const Home=()=>{
    return(
        <div>
            <div className="one">
            <h1>topmate</h1>
            </div>

          
           <button className="button" onClick={signInWithGoogle}>Sign With Google</button>
           <br />
           <h4>After the login click below button</h4>
           <br />
           <Link to="/next"><button className="button">click for Home page</button></Link>
        
        
        </div>
    )
}