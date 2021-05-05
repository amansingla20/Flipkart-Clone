import React from 'react'
import './Carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {datas} from '../datas';
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

const Carousel = () => {
    return (
        <div style={{margin: '30px'}}>
            <Slider 
            autoplay={true} 
            //dots
            autoplaySpeed={2000} 
            initialSlide={2} 
            infinite
            prevArrow={<PreviousBtn/>}
            nextArrow={<NextBtn/>}
            // customPaging={(i)=>{
            //     return (
            //         <div>
            //             {i}
            //         </div>
            //     )
            // }}
            >
                {
                    datas.map(item=>(
                        <div>
                        <img src={item} alt="" style={{width: '100%', height: '35vh'}}/>
                    </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel
