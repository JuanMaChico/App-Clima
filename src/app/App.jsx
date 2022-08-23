/**
 * Dependencias
 */
import React, { useState, useEffect } from "react";
import { Root } from "./App.styles";
import Card from "../containers/card";
import { API_KEY } from "../utils/constants";
import ServicioFake from "../utils/ServicioFake.json";


function App() {

	
	const [data, setData] = useState(null);

	//Estado del clima del dia corriente
	const [weatherDay, SetWeatherDay] = useState(null);

	//Estado del clima de la semana corriente
	const [weatherWeek, SetweatherWeek] = useState(null);

	// const [ip, setIp] = useState(null);
	// const [Ciudad, setCiudad] = useState(null);

	// const ObtenerClima = async (ciudad) => {
	// 	let respuesta = await fetch(
	// 		`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`,
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// 	return respuesta;
	// };

	// const ObtenerIp = async () => {
	// 	let respuesta = await fetch(`https://api.ipify.org?format=json`)
	// 		.then((respuesta) => respuesta.json())
	// 		.then((data) => setIp(data));
	// 	return respuesta;
	// };

	// const ObtenerCiudad = async (ip) => {
	// 	let respuesta = await fetch(`http://ip-api.com/json/${ip}`)
	// 		.then((respuesta) => respuesta.json())
	// 		.then((data) => setCiudad(data));
	// 	return respuesta;
	// };

	useEffect(() => {
		// ObtenerIp();
		// if (ip) {
		// 	ObtenerCiudad(ip.ip);
		// 	if (Ciudad) {
		// 		console.log(data);
		// 		ObtenerClima(Ciudad.regionName);
		// 		console.log(data);
		// 	}
		// }
		setData(ServicioFake);
	}, []);

	return (
		<Root>
			{
				data &&
				<Card weather={data} />
			}
		</Root>
	);
}

export default App;
