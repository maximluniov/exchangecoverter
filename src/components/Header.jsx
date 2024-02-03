import React from 'react'
import index from '../assets/index'

const Header = (props) => {
    return (
        <div className='flex p-4 justify-between border-b-2 border-white bg-white'>
            <div className='flex items-center'>
                <img className='w-12 mr-2' src={index.logo} alt="logo" />
                <p className='text-3xl font-bold'>ConverterEU</p>

            </div>
            <div className='flex justify-around flex:1' style={{ width: "800px" }}>
                <div className='flex items-center '>
                    <p className='mr-2'>{props.USD? props.USD.toFixed(2) : 0.00 }$ </p>
                    <img className='h-8' src={index.us} alt="us" />
                    <p>USD</p>
                </div>
                <div className='flex items-center '>
                    <p className='mr-2'>{props.GBP? props.GBP.toFixed(2) : 0.00 }£ </p>
                    <img className='h-8' src={index.uk} alt="us" />
                    <p>GBP</p>
                </div>
            </div>


        </div>
    )
}

export default Header