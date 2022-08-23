/**
 * Dependencias
 */
import React from "react";
import { Root, Text, Days, Icons, Temp } from "./CurrentWeek.styles";
import ServiceWeek from "../../utils/ServiceWeek.json";

function CurrentWeek() {
	const { list } = ServiceWeek;

	return (
		<Root>
			{list.map( (item, key) => {
				return (
					<Days key={key}>
						<Icons
							src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
							alt={item.weather[0].description}
						/>
						<Temp>{item.main.temp}°C</Temp>
						<Text>{item.weather[0].description}</Text>
						<Text>{item.main.humidity}%</Text>
					</Days>
				);
			})}
		</Root>
	);
}

export default CurrentWeek;
