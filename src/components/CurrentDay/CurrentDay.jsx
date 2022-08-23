/**
 * Dependencias
 */
import React from "react";
import { Root, Container, City, Temp, Icons } from "./CurrentDay.styles";

function CurrentDay( props ) {
	
	const { 

		weather,
	
	} = props;
	
	return (
		<Root>
			<Icons src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
			<Container>
				<Temp>{weather.main.temp}°C</Temp>
				<City>{weather.name}</City>
			</Container>
		</Root>
	);
}

export default CurrentDay;
