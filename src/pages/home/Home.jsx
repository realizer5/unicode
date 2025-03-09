import { Uni, UniInside, UniStar } from '../../img'

export default function Home() {
    return (
        <>
            <div className='overflow-hidden relative flex justify-center'>
                <div className='flex'>
                    <img src={Uni} alt="" />
                    <img src={UniInside} alt="" />
                    <img src={UniStar} alt="" />
                </div>
                <div className='absolute bottom-0 space-x-2'>
                    <button className='w-8 h-1 bg-gray-900'></button>
                    <button className='w-8 h-1 bg-gray-900'></button>
                    <button className='w-8 h-1 bg-gray-900'></button>
                </div>
            </div>
        </>
    )
}

