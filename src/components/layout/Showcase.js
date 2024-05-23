import React, { useEffect } from 'react';
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../public/css/main.css';
import '../public/css/media.css';

const Showcase = () => {
    useEffect(() => {
        Swiper.use([Navigation]);
        const showSlider = new Swiper('.showcase-carousel', {
            loop: true,
            slidesPerView: 3,
            speed: 1800,
            centeredSlides: true,
            navigation: {
                nextEl: '.showcase-navigation__next',
                prevEl: '.showcase-navigation__prev',
            },
        });

        document.querySelector('video').playbackRate = 2;
    }, []);

    return (
        <section className="showcase">
            <h2 className="showcase__header">
                Our <span>Bestsellers</span>
            </h2>
            <div className="showcase__content-wrapper">
                <div className="showcase__content">
                    <div className="showcase-carousel swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide showcase-carousel__item">
                                <div className="showcase-carousel__image-wrapper">
                                    <div className="showcase-carousel__image-left">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/emma.png)' }}></div>
                                    </div>
                                    <div className="showcase-carousel__image-right">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/emma.png)' }}></div>
                                    </div>
                                </div>
                                <p>Front</p>
                            </div>
                            <div className="swiper-slide showcase-carousel__item">
                                <div className="showcase-carousel__image-wrapper">
                                    <div className="showcase-carousel__image-left">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/2.png)' }}></div>
                                    </div>
                                    <div className="showcase-carousel__image-right">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/2.png)' }}></div>
                                    </div>
                                </div>
                                <p>Front Two</p>
                            </div>
                            <div className="swiper-slide showcase-carousel__item">
                                <div className="showcase-carousel__image-wrapper">
                                    <div className="showcase-carousel__image-left">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/3.png)' }}></div>
                                    </div>
                                    <div className="showcase-carousel__image-right">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/3.png)' }}></div>
                                    </div>
                                </div>
                                <p>Side</p>
                            </div>
                            <div className="swiper-slide showcase-carousel__item">
                                <div className="showcase-carousel__image-wrapper">
                                    <div className="showcase-carousel__image-left">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/4.png)' }}></div>
                                    </div>
                                    <div className="showcase-carousel__image-right">
                                        <div className="showcase-carousel__image" style={{ backgroundImage: 'url(/images/4.png)' }}></div>
                                    </div>
                                </div>
                                <p>Back</p>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-navigation">
                        <div className="showcase-navigation__prev"></div>
                        <div className="showcase-navigation__next"></div>
                    </div>
                </div>
            </div>
            <video src="/videos/smoke-background-optimized.mp4" className="showcase__video" autoPlay loop muted></video>
        </section>
    );
};

export default Showcase;
