import React from 'react'
import bannerImg1 from '../../../public/Bannger backgrounds/banner1.jpg'
import bannerImg2 from '../../../public/Bannger backgrounds/banner2.jpg'
import bannerImg3 from '../../../public/Bannger backgrounds/banner3.jpg'
import bannerImg4 from '../../../public/Bannger backgrounds/banner4.jpg'
import { useTypewriter } from 'react-simple-typewriter'

export default function Banner() {
    const [text] = useTypewriter({
        words: ['Discover your next great'],
        loop: 3
    })

    const [text2] = useTypewriter({
        words: ['Adventure', 'Experience'],
        loop: 3
    })
    return (
        <div className='p-4 border border-transparent rounded-md'>
            <div className="carousel w-full sm:w-full md:w-full lg:w-full max-h-screen rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerImg1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='text-white font-playWrite text-center'>
                            <p className='lg:text-4xl text-lg'>{text}</p>
                            <p className='lg:text-7xl text-3xl'>{text2}</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerImg2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='text-white font-playWrite text-center'>
                            <p className='lg:text-4xl text-lg'>{text}</p>
                            <p className='lg:text-7xl text-3xl'>{text2}</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerImg3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='text-white font-playWrite text-center'>
                            <p className='lg:text-4xl text-lg'>{text}</p>
                            <p className='lg:text-7xl text-3xl'>{text2}</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerImg4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='text-white font-playWrite text-center'>
                            <p className='lg:text-4xl text-lg'>{text}</p>
                            <p className='lg:text-7xl text-3xl'>{text2}</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
