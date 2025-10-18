import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { HeroSlides } from "@/components/HeroSection/CarouselItems"

const Hero = () => {
    return (
        <div className='w-full' style={{backgroundColor: '#EFEFEF'}}>
            <Carousel>
                <CarouselContent>
                    <HeroSlides />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Hero