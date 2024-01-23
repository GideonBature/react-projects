import { useState } from 'react';
import Button from './Button'

function ColourGenerator() {
    const [colour, setColour] = useState("#000000");

    const RandomColour = () => {
        const newColour = "#" + Math.floor(Math.random()*16777215).toString(16);
        setColour(newColour);
    }

    return (
        <div style={{backgroundColor: colour}} className='h-screen flex'>
            <div className="container flex-col items-center m-auto h-1/4 w-1/2 justify-center text-center bg-violet-600 border-2 rounded-lg">
                <h3 className='m-8 font-bold text-white'>Hex Random Colour Generator</h3>
                <h1 className='bg-white text-3xl p-2'>{colour.toUpperCase()}</h1>
                <hr/>
                <Button doClick={RandomColour} tStyle="btn btn-primary bg-white py-2 px-4 rounded-lg hover:bg-gray-200 m-5">Generate</Button>
            </div>
        </div>
    )
}

export default ColourGenerator;