import React from 'react'
import { Uni, UniInside, UniStar } from '../../img'

export default function Home() {
    return (
        <>
            <div className='flex overflow-hidden'>
                <img src={Uni} alt="" />
                <img src={UniInside} alt="" />
                <img src={UniStar} alt="" />
            </div>
        </>
    )
}

