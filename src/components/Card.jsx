import './Card.css';
import React from 'react'
import { Favorite } from '@material-ui/icons';

const Card = ({actualPrice, offerPrice , name , image, rating, key}) => {
        
    /*let discount = (actualPrice- offerPrice);
    console.log(discount);
    let discountPercentage= (discount/ actualPrice)*100;*/

    return (
        <div className='card'>
            <div className="card-heart">
                <Favorite/>
            </div>
            <div className="card-image">
                <img src={image} alt=""/>
            </div>
            <div className="productDetails">
            <div className="card-details">
                <p className='title'>{name}</p>
                <p>Buy This Amazing Stuff</p>

                <div style={{display: 'flex', margin: 0, paddingTop:0} }
                >
                    {Array(rating)
                    .fill()
                    .map((_ , i) =>(
                        <p id = 'star' key = {i}>★</p>
                    ))}
                </div>
                <span className='span1'>₹{offerPrice}</span>
                <span className='span2'>₹{actualPrice}</span>
                <span className='span3'>Discount</span>
            </div>
            <div className="card-size">
                <p>size <span>6,7,8,9</span></p>
            </div>
            </div>
        </div>
    )
}

export default Card
