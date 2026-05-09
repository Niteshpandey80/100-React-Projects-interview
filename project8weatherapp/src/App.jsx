import React, { useState } from 'react'

const App = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const API_KEY = "b9a63396c54abfbf9853f6a148606c7b"

  const handleWeather = async () => {

    if (city === "") return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )

    const data = await response.json();

    setWeather(data)

    console.log(data);
  }

  return (

    <div className='min-h-screen bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-500 flex items-center justify-center p-5'>

      <div className='bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md text-white'>

      
        <div className='flex justify-center mb-4'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
            alt="weather"
            className='w-24'
          />
        </div>

      
        <h1 className='text-4xl font-bold text-center mb-6'>
          Weather App
        </h1>

     
        <div className='flex gap-3 mb-6'>

          <input
            type="text"
            placeholder='Enter City...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='flex-1 px-4 py-3 rounded-xl outline-none text-black bg-white'
          />

          <button
            className='bg-black hover:bg-gray-800 transition-all px-5 py-3 rounded-xl font-semibold'
            onClick={handleWeather}
          >
            Search
          </button>

        </div>

        {
          weather && weather.main && (

            <div className='text-center space-y-4 animate-pulse'>

              <div className='flex justify-center'>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                  alt="cloud"
                  className='w-20'
                />
              </div>

              <h2 className='text-2xl font-bold'>
                {weather.name}
              </h2>

              <p className='text-3xl font-bold'>
                {Math.round(weather.main.temp)}°C
              </p>

              <p className='text-2xl capitalize'>
                {weather.weather[0].description}
              </p>

              <div className='grid grid-cols-2 gap-4 mt-6'>

                <div className='bg-white/20 rounded-2xl p-4'>
                  <h3 className='font-bold text-lg'>Humidity</h3>
                  <p className='text-2xl'>
                    {weather.main.humidity}%
                  </p>
                </div>

                <div className='bg-white/20 rounded-2xl p-4'>
                  <h3 className='font-bold text-lg'>Wind</h3>
                  <p className='text-2xl'>
                    {weather.wind.speed} km/h
                  </p>
                </div>

              </div>

            </div>
          )
        }

      </div>

    </div>
  )
}

export default App