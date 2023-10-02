import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"

import {useState} from "react"

const Question = ({title,info}) => {
  const [toggle,setToggle] = useState(false)
  const [button,setButton] = useState(true)

  const changer = ()=>{
    setToggle(!toggle)
    setButton(!button)
  }

  return <>
  <div className="selection">
    <h4>{title}</h4>
    <button onClick={()=> changer()}>
        {button? <AiFillPlusCircle/>: <AiFillMinusCircle/>}
    </button>
  </div>
  {toggle && <p>{info}</p>}
  </>
}
export default Question

