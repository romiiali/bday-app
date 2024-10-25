import { isDisabled } from "@testing-library/user-event/dist/utils";
import List from "./List";
import data from "./data"
import { useState } from "react";

function App() {
  const [people,setPopel] = useState(data)
  const [visible,setVisible]=useState(true)
  const [apper,setApper]=useState(false)
  return (
    <div className="h-screen flex justify-center items-center flex-grow flex-wrap" >
      <div className="container"> 
        <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      {visible && <div className="block">
        <button onClick={()=>{setPopel([]);
        setVisible(false)
        setApper(true)
      }}>click me </button>
      </div>}
      {apper && <div className="block">
        <button onClick={()=>{
        setPopel(data)
        setVisible(true)
        setApper(false)
      }}>See again </button>
      </div>}
      </div>
    </div>
  ); 
}

export default App;
