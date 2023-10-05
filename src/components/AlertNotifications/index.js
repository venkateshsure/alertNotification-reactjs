// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
// import {MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotification = () => {
  const airFillNotification = () => (
    <div className="head-con">
      <div className="head">
        <Notification>
          <AiFillCheckCircle className="air-fill" />
          <div className="para-con">
            <h1 className="air-fill">Success</h1>
            <p>You can access all the files in the folder</p>
          </div>
        </Notification>
      </div>
    </div>
  )

  const errorNotification = () => (
    <div className="head-con">
      <div className="head">
        <Notification>
          <RiErrorWarningFill className="error-fill" />
          <div className="para-con">
            <h1 className="error-fill">Error</h1>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
      </div>
    </div>
  )

  const warningNotification = () => (
    <div className="head-con">
      <div className="head">
        <Notification>
          <MdWarning className="warning-fill" />
          <div className="para-con">
            <h1 className="warning-fill">Warning</h1>
            <p>Viewers of this file can see comments and suggestions</p>
          </div>
        </Notification>
      </div>
    </div>
  )

  const infoNotification = () => (
    <div className="head-con">
      <div className="head">
        <Notification>
          <MdInfo className="info-fill" />
          <div className="para-con">
            <h1 className="info-fill">Info</h1>
            <p>Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    </div>
  )
  return (
    <div className="fir-con">
      <h1>Alert Notifications</h1>
      {airFillNotification()}
      {errorNotification()}
      {warningNotification()}
      {infoNotification()}
    </div>
  )
}

export default AlertNotification
