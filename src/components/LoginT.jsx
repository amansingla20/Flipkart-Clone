import './LoginT.css';
import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardGiftcarIcon from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import StoreIcon from '@material-ui/icons/Store';

const LoginT = () => {
    return (
        <div className='logint'>
            <div className="logint-in">
                <h2 className='first'>New Customer?</h2>
                <h2 className='second'> Signup</h2>
            </div>
            <hr/>
            <div className="logint-in">
                <AccountCircleIcon/>
                <p>My Profile</p>
            </div>
            <hr/>
            <div className="logint-in">
                <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/>
                <p>Flipkart Plus Zone</p>
            </div>
            <hr/>
            <div className="logint-in">
                <StoreIcon/>
                <p>Orders</p>
            </div>
            <hr/>
            <div className="logint-in">
                <FavoriteIcon/>
                <p>Wishlist</p>
            </div>
            <hr/>
            <div className="logint-in">
                <ConfirmationNumberIcon/>
                <p>Rewards</p>
            </div>
            <hr/>
            <div className="logint-in">
                <CardGiftcarIcon/>
                <p>Gift Cards</p>
            </div>
        </div>
    )
}

export default LoginT
