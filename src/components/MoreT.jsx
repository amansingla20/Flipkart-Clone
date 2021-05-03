import './MoreT.css';
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import GetAppIcon from '@material-ui/icons/GetApp';

const MoreT = () => {
    return (
        <div className='moret'>
            <div className="moret-in">
                <NotificationsIcon/>
                <p>Notification Preferences</p>
            </div>
            <hr/>
            <div className="moret-in">
                <MonetizationOnIcon />
                <p>Sell on Flipkart</p>
            </div>
            <hr/>
            <div className="moret-in">
                <LiveHelpIcon/>
                <p>24*7 Customer Care</p>
            </div>
            <hr/>
            <div className="moret-in">
                <TrendingUpIcon/>
                <p> Advertise </p>
            </div>
            <hr/>
            <div className="moret-in">
                <GetAppIcon/>
                <p>Download app</p>
            </div>
        </div>
    )
}

export default MoreT
