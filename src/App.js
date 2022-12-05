import data from "./data";
import Notification from "./components/Notification";
import Nav from "./components/Nav";
import { useState } from "react";


function App() {

  const [data1, setData1] = useState(data)
  const [nofinicationNum, setNofinicationNum] = useState(3)
  
  function readAll(){
    data1.forEach(element => element.Isread=true)
    setData1(prevData => prevData.map(element => element))
    setNofinicationNum(0)
  }


  const renderNotifications =  data1.map(element =>
    <Notification 
      mainImg={element.mainImg}
      key={element.id} 
      name={element.name}
      title={element.title}
      subject={element.subject}
      group={element.group}
      time={element.time}
      Isread={element.Isread}
      message={element.message}
      secImg={element.secImg}
    />
  )
  return (<div className="page">       
            <Nav 
              readAll={readAll}
              nofinicationNum={nofinicationNum}
            />
            <div className="page__notifications">{renderNotifications}</div>  
              <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="#">Your Name Here</a>.
            </div>
        </div>
        )
}

export default App;
