
import {signInWithGoogle} from "../services/firebase"
import { Link } from "react-router-dom"
export const Home=()=>{
    return(
        <div>
            <h3 onClick={signInWithGoogle}>Sign With Google</h3>
           <Link to="/next"> <h1>click for profile page</h1></Link>
        
        </div>
    )
}