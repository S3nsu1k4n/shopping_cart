import { useState } from "react"

const DropDown = ({shownItem, setShownItem, options}) => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="dropdown">
      <p onClick={() => setShow(!show)}>{shownItem}</p>
      { show && options.map((option) => {
        if(shownItem == option){
          option = 'All';
        }
        return <p key={option} onClick={() => {setShownItem(option); setShow(!show);}}>{option}</p>
      } )}
    </div>
  )
}
export default DropDown;