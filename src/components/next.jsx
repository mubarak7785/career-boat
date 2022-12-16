import "./next.css"
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
            </div>
         
           
        </div>
    )
}