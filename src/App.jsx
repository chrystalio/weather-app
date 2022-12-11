import { useState } from 'react'
import reactLogo from './assets/react.svg'
// // import '../public/css/App.css'
import '../public/css/output.css'
function App() {
    return (
        <div className="bg-gray-800 min-h-screen grid place-items-center">
            <div className="bg-white w-96 p-4 rounded-md shadow-md">
                <div className="flex items-center justify-center">
                <input type="text" placeholder="Enter Your Location" className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1"/>
                <button>
                    <img src="https://cdn-icons-png.flaticon.com/512/758/758651.png" alt="search" className="w-8"/>
                </button>
                </div>
            </div>
        </div>
    )
}

export default App
