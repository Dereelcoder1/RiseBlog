
import React from "react"
import { CarouselItem } from "@/components/ui/carousel"
import { assets } from "@/assets/assets"
// import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import { Button } from "../ui/button";



export function HeroSlides() {
    return (
        <>
            <CarouselItem className="flex items-center justify-center h-screen">
                <div className="text-4xl font-bold flex justify-center items-center">
                    <img src={assets.heroone} alt="hero image" />
                    <div className="ballon">
                        <div className="ball1 h-40 w-40 rounded-full top-0 left-6 absolute shadow-md" style={{background: '#3652e1'}}></div>
                        <div className="ball2 w-24 h-24 rounded-full top-40 left-36 absolute shadow-md" style={{background: '#3652e1'}}></div>
                        <div className="ball w-24 h-24 rounded-full bottom-5 left-100 shadow-md3 absolute " style={{background: '#3652e1'}}></div>
                        <div className="ball4 w-24 h-24 rounded-full top-40 right-20 shadow-md3 absolute z-0 " style={{background: '#3652e1', zIndex: '-1'}}></div>
                        {/* <div className="ball5 h-40 w-40 rounded-full bottom-0  shadow-md absolute " style={{background: '#3652e1', right: '0'}}></div> */}
                    </div>

                    <div className="hero-text text-8xl font-bold text-right" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Write Your <br /> <span style={{ color: '#3652E1' }}>Article</span> <br /> Here
                        <br />
                        <Button className="rounded-2xl px-3 py-3" style={{ backgroundColor: '#3652E1' }}>Create Account</Button>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem className="flex items-center justify-between h-screen ml-40">
                <div className="text-4xl font-bold flex justify-center w-full gap-9 items-center flex-row-reverse">
                    <img src={assets.herotwo} alt="hero image" />


                    <div className="hero-text text-8xl font-bold text-left" style={{ fontFamily: "Poppins, sans-serif", width: '600px' }}>
                        Find Your Best <br /> <span style={{ color: '#3652E1' }}>Article</span> <br /> Topics Here
                        <br />
                        {/* <Button className="rounded-2xl px-3 py-3" style={{ backgroundColor: '#3652E1' }}>Create Account</Button> */}
                    </div>
                </div>
            </CarouselItem>
        </>
    )
}
