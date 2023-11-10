// How to declaratively animate a carousel
// https://www.youtube.com/watch?v=aV2YJuxQ2vo

// https://www.youtube.com/watch?v=q98Z4QxTxJM

import { useState } from "react";


const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
]

function Carousel() {
    let [count, setCount] = useState(1)

    return (
        <div className="text-white">
            <div className="flex justify-between text-gray-600">
                <button 
                    className="h-12 w-12 bg-gray-100 shadow-lg rounded-full border" 
                    onClick={() => setCount(count - 1)}
                >
                    Prev
                </button>
                <button 
                    className="h-12 w-12 bg-gray-100 shadow-lg rounded-full border"
                    onClick={() => setCount(count + 1)}
                >
                    Next
                </button>
            </div>

            <div className="mt-8 flex justify-center">
                <div className="flex w-24 h-24 items-center justify-center bg-gray-700">
                    <div 
                        className={`flex h-20 w-20 items-center justify-center ${colors[count % 4]}`}
                    >
                        {count}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;