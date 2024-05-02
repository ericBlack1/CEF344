import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import WeatherApp from './Components/WeatherApp/WeatherApp'

function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
				<Route path='/weather' element={<WeatherApp />}></Route>
			</Routes>
		</BrowserRouter>
    )
}

export default App;