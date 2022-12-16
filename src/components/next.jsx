
import "./next.css"
import { AiOutlineHome ,AiOutlineQuestionCircle,AiOutlineGift} from 'react-icons/Ai'
import { FiPhoneCall } from 'react-icons/Fi'
import { MdOutlineEventAvailable,MdMiscellaneousServices } from 'react-icons/Md'
import { TbBrandGoogleAnalytics } from 'react-icons/Tb'


export const Next=()=>{
    return(
        <div className="main">
            <div className="left-div">
                <div className="pro-div">
                    <img src={localStorage.getItem("profilePic")} alt="" />
                    <div>
                        <p>{localStorage.getItem("name")}</p>
                        <p>{localStorage.getItem("email")}</p>
                    </div>
                </div>  
                <br />  
                <button>Publish Profile</button>
                    <br />
                    <br />
                    <br />
                    <div className="try"><p >Home</p></div>
                    <div className="try"><p >Call</p></div>
                    <div className="try"><p >Queries</p></div>
                    <div className="try"><p >Availability</p></div>
                    <div className="try"><p >Services</p></div>
                    <div className="try"><p >Analytics</p></div>
                    <div className="try"><p >Rewards</p></div>
     
            </div>
            <div className="right-div">
                <h1>Availability</h1>
            </div>
         
           
        </div>
    )
}