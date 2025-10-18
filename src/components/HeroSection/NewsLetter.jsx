import React from 'react'

const NewsLetter = () => {
  return (
    <div className='h-screen flex justify-center items-center' style={{backgroundColor: '#EFEFEF'}}>
        <div className="card bg-white rounded-3xl flex justify-end items-center " style={{width: '1000px', height: '500px'}}>
            <div className="card-cont flex flex-col justify-center items-start gap-4" style={{ width: '500px'}}>
                <div className='text-4xl font-bold' style={{fontSize: '48px'}}>Subscribe</div>
                <div className='text-left' style={{fontSize: '20px'}}>Subscribe to our newsletter and get up to 40% off on our exclusive service.</div>

                <div className="input">
                    <input type="email" placeholder='Email Address' style={{padding: '5px', border: '2px solid #6246ea', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', width: '300px'}}/>
                    <button className='px-4 py-1.5 text-white font-bold ' style={{backgroundColor: '#6246ea', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Subscribe </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter