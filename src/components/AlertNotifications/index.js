// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
// import {MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotification = () => {
  const airFillNotification = () => (
    <Notification>
      <AiFillCheckCircle className="air-fill" />
      <div className="para-con">
        <h1 className="air-fill">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error-fill" />
      <div className="para-con">
        <h1 className="error-fill">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <MdWarning className="warning-fill" />
      <div className="para-con">
        <h1 className="warning-fill">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <MdInfo className="info-fill" />
      <div className="para-con">
        <h1 className="info-fill">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )
  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1>Alert Notifications</h1>
        {airFillNotification()}
        {errorNotification()}
        {warningNotification()}
        {infoNotification()}
      </div>
    </div>
  )
}

export default AlertNotification
