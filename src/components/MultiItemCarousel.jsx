import React from 'react'
import './Carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {multiData} from '../datas';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const PreviousBtn =(props)=>{
    const {className, onClick} =props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{color: 'black', fontSize: '30px'}}/>
        </div>
    )
}

const NextBtn =(props)=>{
    const {className, onClick} =props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{color: 'black', fontSize: '30px'}}/>
        </div>
    )
}

const MultiItemCarousel = () => {
    return (
        <div style={{margin: '30px'}}>
            <Slider 
            initialSlide={2} 
            infinite={false}
            prevArrow={<PreviousBtn/>}
            nextArrow={<NextBtn/>}
            slidesToShow={5}
            slidesToScroll={2}
            >
                {
                    multiData.map(item=>(
                        <Card item={item}/>
                    ))
                }
            </Slider>
        </div>
    )
}

const Card =({item}) =>{
    return(
        <div style={{textAlign: 'center'}}>
            <img src={item} alt = '' className='multiImage'style={{width: '100%', height:  '100px', marginBottom: '10px',objectFit: 'contain'}}/>
            <p style={{fontSize:'14px', padding: '5px 0'}}>Top Trending Item</p>
            <p style={{fontSize:'16px', padding: '5px 0', color: 'green'}}>Shop Now</p>
            <p style={{fontSize:'14px', padding: '5px 0', color: 'gray'}}>Discount Price ₹ 1000</p>
        </div>
    )
}

export default MultiItemCarousel
