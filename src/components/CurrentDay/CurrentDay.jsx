/**
 * Dependencias
 */
import React from 'react';
import { Root, Container, City, Temp, Icons } from './CurrentDay.styled';
import PlaceIcon from '@mui/icons-material/Place';
import ThermostatSharpIcon from '@mui/icons-material/ThermostatSharp';

function CurrentDay(props) {
	const { weather } = props;

	return (
		<Root>
			<Icons
				src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
				alt={weather.weather[0].description}
			/>
			<Container>
				<Temp>
					<ThermostatSharpIcon />
					{weather.main.temp}°C
				</Temp>
				<City>
					<PlaceIcon />
					{weather.name}
				</City>
			</Container>
		</Root>
	);
}

export default CurrentDay;
