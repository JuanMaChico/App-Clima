/**
 * Dependencias
 */
import React, { useEffect, useState } from "react";
import { Root, Text, Days, Icons, Temp } from "./CurrentWeek.styled";
import { GetWeek } from "../../service/Service";

function CurrentWeek(props) {

	const { coordenadas } = props;

	const [ weatherWeek, SetWeatherWeek ] = useState();

	const list = weatherWeek;

	useEffect(() => {
		try {
			handlerWeatherWeek(coordenadas);
		} catch (error) {
			console.log(error);
		}
	}, [coordenadas]);

	const handlerWeatherWeek = (coordenadas = null) => {
		GetWeek(function (data) {
			SetWeatherWeek(listFormater(data));
			//hacer Dispatch de data;
		}, coordenadas);
	};

	const listFormater = ( list ) => {
		let horaActual = new Date(list.list[0].dt_txt).getHours() 
		let climaPorDia = list.list.filter(weatherPorHora => {
		   let horaActualPorDia = new Date(weatherPorHora.dt_txt).getHours()
		   if( horaActualPorDia == horaActual) {
			   return weatherPorHora
		   }
	   })
	   return climaPorDia;
	}


	// console.log("Data Week::", weatherWeek);

	return (
		<Root>
			{list &&
				list.map((item, key) => {
					let fecha = new Date(item.dt_txt.substring(0,10)).toDateString();
					console.log(fecha);
					return (
						<Days key={key}>
							<Icons
								src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
								alt={item.weather[0].description}
							/>
							<Temp>{item.main.temp}°C</Temp>
							<Text>{item.weather[0].description}</Text>
							<Text>{fecha}</Text>
							<Text>{item.main.humidity}% humidity</Text>
						</Days>
					);
				})}
		</Root>
	);
}

export default CurrentWeek;
