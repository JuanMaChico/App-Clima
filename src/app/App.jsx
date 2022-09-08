/**
 * Dependencias
 */
import React, { useState, useEffect } from "react";
import { Root } from "./App.styled";
import Card from "../containers/card";
import { GetClima } from "../service/Service";
import { useSelector, useDispatch } from "react-redux";
import { updateWeather } from "../store/slices/index";

function App() {

	// const [Clima, setclima] = useState(null);

	const dispatch = useDispatch();

	const Clima = useSelector(state => state.weather)

	useEffect(() => {
		try {
			handlerWeather();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handlerWeather = (city = null) => {
		GetClima(function (data) {
			// setclima(data);
			//hacer Dispatch de data;
			dispatch(updateWeather(data));

		}, city);
	};

	console.log("Clima del dia =", Clima.weather);

	return (
		<Root>
			{Clima.weather && <Card weather={Clima.weather} changeCity={(city) => handlerWeather(city)} />}
		</Root>
	);
}

export default App;
