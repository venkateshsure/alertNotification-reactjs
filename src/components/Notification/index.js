// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  // console.log(props.children)
  const {children} = props
  console.log(children)
  return (
    <div className="notification-con">
      {children}
      <GrFormClose className="cross-mark" />
    </div>
  )
}

export default Notification
