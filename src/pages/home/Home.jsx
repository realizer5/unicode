import { useEffect, useState } from 'react'
import { Uni, UniInside, UniStar } from '../../img'

export default function Home() {
    const [index, setIndex] = useState(0);
    const images = [Uni, UniStar, UniInside];
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className='overflow-hidden relative flex justify-center max-h-200 w-full aspect-square'>
                <div className='flex *:object-center *:object-cover *:w-full'>
                    {images.map((img, i) => (
                        <img
                            key={img}
                            src={img}
                            alt=""
                            className={i === index ? 'block' : 'hidden'}
                        />
                    ))}
                </div>
                <div className='absolute bottom-0 space-x-2'>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`w-8 h-1 cursor-pointer ${i === index ? 'bg-gray-100' : 'bg-gray-900'}`}
                            onClick={() => setIndex(i)}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    )
}

