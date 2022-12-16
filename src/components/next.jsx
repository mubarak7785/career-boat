
import "./next.css"
import { AiOutlineHome ,AiOutlineQuestionCircle,AiOutlineGift} from 'react-icons/Ai'
import { FiPhoneCall } from 'react-icons/Fi'
import { MdOutlineEventAvailable,MdMiscellaneousServices } from 'react-icons/Md'
import { TbBrandGoogleAnalytics } from 'react-icons/Tb'


export const Next=()=>{
    return(
        <div>
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
                    <div className="try"><span><AiOutlineHome/></span><p >Home</p></div>
                    <div className="try"><span><FiPhoneCall/></span><p >Call</p></div>
                    <div className="try"><span><AiOutlineQuestionCircle/></span><p >Queries</p></div>
                    <div className="try"><span><MdOutlineEventAvailable/></span><p >Availability</p></div>
                    <div className="try"><span><MdMiscellaneousServices/></span><p >Services</p></div>
                    <div className="try"><span><TbBrandGoogleAnalytics/></span><p >Analytics</p></div>
                    <div className="try"><span><AiOutlineGift/></span><p >Rewards</p></div>
     
            </div>
         
           
        </div>
    )
}