import React from 'react'
import { Button } from '../ui/button'
import { assets } from '@/assets/assets'
import { FaHeart, FaComment } from 'react-icons/fa';


const HeroArticle = () => {
    return (
        <div className="flex justify-around gap-7 items-center" style={{ backgroundColor: '#3652e1', height: '100vh' }}>
            <div className="articletext font-bold text-6xl leading-normal">
                Best <br /> <span style={{ color: 'white' }}>Articles</span> <br /> Today <br />

                <Button>See All Articles</Button>
            </div>

            <div className="articleblog flex gap-4">
                <div className="articlecont w-48">
                    <div className="articImg relative">
                        <div className=" absolute top-2.5 left-1.5 name bg-white flex justify-start gap-1 items-center rounded-lg w-fit px-2">
                            <img src={assets.heroone} alt="name" height={30} width={30} />
                            Joana
                        </div>
                        <img src={assets.neuralink} alt="Blog Image" />
                        <div className='absolute bg-blue-800 text-white rounded-lg w-fit px-2 bottom-2.5 left-1.5'>Tech</div>
                    </div>
                    <div className="articBox bg-white p-2 flex flex-col gap-3" style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}>
                        <div className="articTitle font-bold text-left" style={{ fontSize: '13px', color: '#1c1c1c' }}>
                            Elon Musk shows off updates to his brain chips
                        </div>
                        <div className="articText text-left" style={{ fontSize: '10px', color: '#424242' }}>
                            Elon Musk’s health tech venture Neuralink shared updates to its brain...
                        </div>


                        <div className="articAction flex justify-between items-center gap-2.5">
                            <div className="actiontime flex flex-col justify-start items-start" style={{color: '#1c1c1c', fontSize: '10px'}}>
                                <div className="time">10h</div>
                                <div className="action">
                                    <div className="flex gap-1 items-center">
                                        32<FaHeart className="text-red-500 w-4 h-4 cursor-pointer" />
                                        14<FaComment className="text-gray-600 w-4 h-4 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <Button>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>



                
                <div className="articlecont w-48">
                    <div className="articImg relative">
                        <div className=" absolute top-2.5 left-1.5 name bg-white flex justify-start gap-1 items-center rounded-lg w-fit px-2">
                            <img src={assets.heroone} alt="name" height={30} width={30} />
                            Joana
                        </div>
                        <img src={assets.tree} alt="Blog Image" />
                        <div className='absolute bg-green-800 text-white rounded-lg w-fit px-2 bottom-2.5 left-1.5'>Environment</div>
                    </div>
                    <div className="articBox bg-white p-2 flex flex-col gap-3"  style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}>
                        <div className="articTitle font-bold text-left" style={{ fontSize: '13px', color: '#1c1c1c' }}>
                            The overlooked benefits of real Christmas trees
                        </div>
                        <div className="articText text-left" style={{ fontSize: '10px', color: '#424242' }}>
                           The environmental pros and cons of Christmas trees go far beyond the...
                        </div>


                        <div className="articAction flex justify-between items-center gap-2.5">
                            <div className="actiontime flex flex-col justify-start items-start" style={{color: '#1c1c1c', fontSize: '10px'}}>
                                <div className="time">10h</div>
                                <div className="action">
                                    <div className="flex gap-1 items-center">
                                        32<FaHeart className="text-red-500 w-4 h-4 cursor-pointer" />
                                        14<FaComment className="text-gray-600 w-4 h-4 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <Button>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="articlecont w-48">
                    <div className="articImg relative">
                        <div className=" absolute top-2.5 left-1.5 name bg-white flex justify-start gap-1 items-center rounded-lg w-fit px-2">
                            <img src={assets.heroone} alt="name" height={30} width={30} />
                            Joana
                        </div>
                        <img src={assets.banner} alt="Blog Image" />
                        <div className='absolute bg-orange-800 text-white rounded-lg w-fit px-2 bottom-2.5 left-1.5'>Business</div>
                    </div>
                    <div className="articBox bg-white p-2 flex flex-col gap-3"  style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}>
                        <div className="articTitle font-bold text-left" style={{ fontSize: '13px', color: '#1c1c1c' }}>
                            The law comes for Bankman-Fried
                        </div>
                        <div className="articText text-left" style={{ fontSize: '10px', color: '#424242' }}>
                           Less than a week after telling a BBC journalist that he didn’t think he’d be arrested for his role in crypto...
                        </div>


                        <div className="articAction flex justify-between items-center gap-2.5">
                            <div className="actiontime flex flex-col justify-start items-start text-gray-600" style={{fontSize: '10px'}}>
                                <div className="time">10h</div>
                                <div className="action">
                                    <div className="flex gap-1 items-center text-gray-600">
                                        32<FaHeart className="text-red-500 w-4 h-4 cursor-pointer" />
                                        14<FaComment className="text-gray-600 w-4 h-4 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <Button>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default HeroArticle