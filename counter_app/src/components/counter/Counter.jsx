import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faRotateRight } from '@fortawesome/free-solid-svg-icons'

function Counter() {
    return (
        <div className="bg-gray-900 h-screen flex">
            <div className="w-1/2 m-auto py-10 bg-violet-500 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-4">Counter</h3>
                <h1 className="text-7xl font-bold text-white">0</h1>
                <hr className="w-3/4 m-4"/>
                <div className="flex justify-between w-3/4 m-5">
                    <button className="bg-red-600 p-2 text-white rounded hover:bg-red-700"> <FontAwesomeIcon icon={faCircleMinus} /> Decrement</button>
                    <button className="bg-gray-300 p-2 text-black rounded hover:bg-gray-200"> <FontAwesomeIcon icon={faRotateRight} /> Reset</button>
                    <button className="bg-green-500 p-2 text-white rounded hover:bg-green-600"> <FontAwesomeIcon icon={faCirclePlus} /> Increment</button>
                </div>
            </div>

        </div>
    )
}

export default Counter;