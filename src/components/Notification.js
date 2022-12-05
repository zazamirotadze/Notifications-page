



const Notification = ({name, title, subject, time, Isread, message, mainImg, secImg, group}) => {


  return (
    <div className={Isread? "notification": "notification__isread" }>
        <div className='notification__first-part'>
          <img src={mainImg} ></img>
        </div>
        <div className='additional-class'>
          <div className='notification__second-part'>
            <div className='notification__second-part--1'>
              <div className="span-div">
                <span>{name}</span>
                <span>{title}</span>
                {subject?<span className="span-div__subject">{subject}</span>:""}
                { group ? <span  className="span-div__group" >{group}</span>: ""  }
                {Isread? "": <span className="span-div__dot"></span> }
              </div>
              <div className="span-div__time">{time}</div> 
            </div>
            
            <img src={secImg}  className='notification__second-part--img-div' />
          </div>
          {message? <div className='notification__second-part--nessage-div' >{message}</div>: ""}
        </div>
    </div>
  )
}

export default Notification