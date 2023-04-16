/**
 * Dependencias
 */
import React, { useState } from 'react';
/**
 * Componentes
 */
import { Root } from './card.styled';
import CurrentDay from '../components/CurrentDay/CurrentDay';
import CurrentWeek from '../components/CurrentWeek/CurrentWeek';
import Select from '../components/Select/Select';

/**
 * Tarjeta principal de la vista
 * @returns {Card}
 */
function Card(props) {
	const {
		weather,
		changeCity,
		options = ['Ubicación actual', 'Buenos aires', 'Miami', 'Rosario'],
	} = props;

	const [ubicacion, setUbicacion] = useState(options[0]);

	return (
		<Root>
			<Select
				options={options}
				variant="outlined"
				label="Clima de"
				value={ubicacion}
				handleChange={(value) => {
					setUbicacion(value);
					changeCity(value);
				}}
			/>
			<CurrentDay className="row" weather={weather} />
			{weather && <CurrentWeek coordenadas={weather.coord} />}
		</Root>
	);
}

export default Card;
