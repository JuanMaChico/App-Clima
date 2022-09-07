/**
 * Dependencias
 */
import React, { useState, useEffect } from "react";
import { Root } from "./App.styles";
import Card from "../containers/card";
import { 
		GetCity, 
		GetData, 
		GetWeekClima, 
		GetClima 
	} from "../service/Service";

function App() {

	const [Clima, setclima] = useState(null);

	const [WeekClima, setWeekClima] = useState(null);

	useEffect(() => {
		try {
			handlerWeather();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handlerWeather = (city = null) => {
		GetClima(function (data) {
			setclima(data);
			//hacer Dispatch de data;
		}, city);
	};

	// console.log("Clima del dia =", Clima);

	return (
		<Root>
			{
				Clima && 
				
				<Card 
					weather={Clima} 
					changeCity={(city) => handlerWeather(city)} 
				/>
			}
		</Root>
	);
}

export default App;
