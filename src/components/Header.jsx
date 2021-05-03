import './Header.css';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-first">
                    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/>
                    <div className="header-first1">
                        <span className='explore'>
                            Explore
                        </span>
                        <span className='plus'>
                            Plus
                        </span>
                        <span>
                            <img
                            width='10' 
                            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/>
                        </span>
                    </div>
            </div>

            <div className="header-second">
                <input type="text" placeholder='Search for Products'/>
                <SearchIcon/>
            </div>

            <div className="header-third">
                <Tippy theme ='light'content={<LoginT/>} interactive={true} offset={[5 , 10]}><button>Login</button></Tippy>
            </div>

            <div className="header-fourth">
                    <Tippy theme ='light'content={<MoreT/>}
                    interactive={true} 
                    offset={[5,15]}>
                        <span>More</span>
                    </Tippy>
                    <ExpandMoreIcon/>
            </div>

            <div className="header-fifth">
                <ShoppingCartIcon/>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Header
