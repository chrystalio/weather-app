import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import '../public/css/output.css'

const Api_Key = "3478d61ab27cee717ac22f4820d4ee25";

function App() {
    const inputRef = useRef(null);
    const [apiData, setApiData] = useState(null)
    const [showWeather, setShowWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const WeatherTypes = [
        {
            type: "Clear",
            img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
        },
        {
            type: "Rain",
            img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
        },
        {
            type: "Snow",
            img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
        },
        {
            type: "Clouds",
            img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        },
        {
            type: "Haze",
            img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
        },
        {
            type: "Smoke",
            img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
        },
        {
            type: "Mist",
            img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
        },
        {
            type: "Drizzle",
            img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
        },
    ];

    const fetchWeather = async () => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
        setLoading(true);
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setApiData(null);
                if (data.cod == 404 || data.cod == 400) {
                    // ARRAY OF OBJ
                    setShowWeather([
                        {
                            type: "Not Found",
                            img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
                        },
                    ]);
                }
                setShowWeather(
                    WeatherTypes.filter(
                        (weather) => weather.type === data.weather[0].main
                    )
                );
                console.log(data);
                setApiData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <div className="bg-gray-800 min-h-screen grid place-items-center">
            <div className="bg-white w-96 p-4 rounded-md shadow-md">
                <div className="flex items-center justify-center">
                <input type="text" placeholder="Enter Your Location" ref={inputRef} className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1 focus:outline-none"/>
                <button onClick={fetchWeather}>
                    <img src="https://cdn-icons-png.flaticon.com/512/639/639375.png" alt="search" className="w-10"/>
                </button>
                </div>
            </div>
        </div>
    )
}

export default App
