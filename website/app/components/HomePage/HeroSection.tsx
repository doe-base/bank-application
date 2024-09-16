import React, { useEffect, useRef, useState } from 'react';
import {useStyles, useContentSections, useContentSections2, useContentSections3, useContentSections4, Hero, HeroInner} from '../../styles/home';
import * as ROUTES from '../../constants/routes';
import { Swiper, SwiperClass, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper/modules';
import SwiperCore, {  } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";




interface Props {
    children: any;
};
const handleSliderNext =(swiper: SwiperClass)=>{
    swiper.slideNext();
};
const handleSliderPrev =(swiper: SwiperClass)=>{
    swiper.slidePrev();
};

const SwiperButtonNext: React.FC<Props> = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={()=> handleSliderNext(swiper)}>{children}</button>;
};
const SwiperButtonPrev: React.FC<Props> = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={()=> handleSliderPrev(swiper)}>{children}</button>;
};
SwiperCore.use([Autoplay]);



const HeroSection: React.FC = () => {
    const classes = useStyles();

    const swiperRef = useRef<any>(null);

    const handleSwiperChange = (e: any) =>{
        // Handle counter element
        document.getElementById('counter-current-slider')!.innerHTML = `${e.activeIndex + 1}`;

        var number = e.activeIndex + 1
        if(number === 3){
            document.getElementById('hero-slider-animation-3')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-3A')?.classList.add('fadeup-animation')
        }else{
            document.getElementById('hero-slider-animation-3')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-3A')?.classList.remove('fadeup-animation')
        };
    
        if(number === 4){
            document.getElementById('hero-slider-animation-4A')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-4B')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-4C')?.classList.add('fadeup-animation')
        }else{
            document.getElementById('hero-slider-animation-4A')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-4B')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-4C')?.classList.remove('fadeup-animation')
        };
    
        if(number === 5){
            document.getElementById('hero-slider-animation-5A')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-5B')?.classList.add('fadeup-animation')
        }else{
            document.getElementById('hero-slider-animation-5A')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-5B')?.classList.remove('fadeup-animation')
        };
    
        if(number === 6){
            document.getElementById('hero-slider-animation-6A')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-6B')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-6C')?.classList.add('fadeup-animation')
        }else{
            document.getElementById('hero-slider-animation-6A')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-6B')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-6C')?.classList.remove('fadeup-animation')
        };
    
        if(number === 7){
            document.getElementById('hero-slider-animation-7A')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-7B')?.classList.add('fadeup-animation')
            document.getElementById('hero-slider-animation-7C')?.classList.add('fadeup-animation')
        }else{
            document.getElementById('hero-slider-animation-7A')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-7B')?.classList.remove('fadeup-animation')
            document.getElementById('hero-slider-animation-7C')?.classList.remove('fadeup-animation')
        };
    };

  return (
        <Hero>
            <HeroInner>
                <Swiper 
                    id='hero-section'
                    modules={[Navigation, Pagination, Scrollbar, A11y]} 
                    slidesPerView={1}
                    ref={swiperRef}
                    onSlideChange={handleSwiperChange}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: true, // Pause autoplay on interaction (default: true)
                    }}>


                    <SwiperButtonPrev>
                        <div className={classes.sliderButtonLeft}>
                            <TfiAngleLeft  className={classes.buttonIcon}/>
                        </div>
                    </SwiperButtonPrev>
                    <SwiperButtonNext>
                        <div className={classes.sliderButtonRight}>
                            <TfiAngleRight  className={classes.buttonIcon}/>
                        </div>
                    </SwiperButtonNext>

                    
                    <div id='counter'>
                        <div id='counter-current-slider' className={classes.currentSideNumber}>1</div>
                        <span className={classes.sideNumberSpan}>/</span>
                        <div className={classes.sideNumber}>7</div>
                    </div>




                    <SwiperSlide style={{marginTop: '100px'}}>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <img src="/imgs/fin1.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'contain'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <img src="/imgs/fin2.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'contain'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea1}>
                                    <h2 id='hero-slider-animation-3' className={classes.textAreaH2Animate}>STUDENT LOANS</h2>
                                    <p id='hero-slider-animation-3A' className={classes.textAreaPAnimate}>Get the Financial Support You Need for College</p>
                                    <div className={classes.slideButton}>
                                        <a href="https://www.iowastudentloan.org/for-lenders/available-loan-options-cc.aspx?ref=cc1104&cid=cc1104&utm_source=cc&utm_medium=referral&utm_campaign=plps&utm_content=cc1104" target='_blank' className={classes.textAreaPBtn}>Click Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin3.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'cover',}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea2}>
                                    <h2 id='hero-slider-animation-4A' className={classes.textAreaH2Animate} style={{color: 'rgb(66, 36, 99)'}}>Does your family have a safety net if the unexpected hits?</h2>
                                    <p id='hero-slider-animation-4B' className={classes.textAreaPAnimate}>Protect your loan balance or loan payments today!</p>
                                    <div id='hero-slider-animation-4C' className={classes.slideButtonAnimate}>
                                        <a href="/files/debt_protection_lifeplus.pdf" target='_blank' className={classes.textAreaPBtn}>Click Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin4.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea3}>
                                    <h2 id='hero-slider-animation-5A' className={classes.textAreaH2Animate} style={{color: '#eee', marginBottom: '20px'}}>We're Here To Help You GET THE CAR YOU WANT</h2>
                                    <div id='hero-slider-animation-5B' className={classes.slideButtonAnimate}>
                                        <a href={ROUTES.LOAN_APPLICATION} target='_blank' className={classes.textAreaPBtn}>Get Pre-Approved Today</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin5.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea4}>
                                    <h2 id='hero-slider-animation-6A' className={classes.textAreaH2Animate} style={{color: '#eee'}}>Mechanical Breakdown Protection</h2>
                                    <p id='hero-slider-animation-6B' className={classes.textAreaPAnimate}>Protect your loan balance or loan payments today!</p>
                                    <div id='hero-slider-animation-6C' className={classes.slideButtonAnimate}>
                                        <a href={ROUTES.PROMOTION} className={classes.textAreaPBtn}>More Details Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin6.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grabbing-grab" style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer} style={{maxWidth: '100%'}}>
                                <div className={classes.textArea5}>
                                    <h2 id='hero-slider-animation-7A' className={classes.textAreaH2Animate} style={{color: 'rgb(34, 34, 34)'}}>Need Cash Fast?</h2>
                                    <p id='hero-slider-animation-7B' className={classes.textAreaPAnimate} style={{color: 'rgb(34, 34, 34)', marginBottom: '40px'}}>Check Out Our Cash N' Dash Payday Alternative Loan</p>
                                    <div id='hero-slider-animation-7C' className={classes.slideButtonAnimate}>
                                        <a href={ROUTES.PROMOTION} className={classes.textAreaPBtn}>More Details Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin7.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </HeroInner>
        </Hero>
  )
};

export default HeroSection;
