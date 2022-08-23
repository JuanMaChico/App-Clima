/**
 * Dependencias
 */
import React, { useState } from "react";
/**
 * Componentes
 */
import { Root } from "./card.styles";
import CurrentDay from "../components/CurrentDay/CurrentDay";
import CurrentWeek from "../components/CurrentWeek/CurrentWeek";
import Select from "../components/Select/Select";

/**
 * Tarjeta principal de la vista
 * @returns {Card}
 */
function Card( props ) {
	
	const { 
		
		weather,

		options = ["Ubicacion actual", "Buenos aires", "Miami", "Rosario"]

	
	} = props;

	const [ ubicacion, setUbicacion ] = useState(options[0]);

	return (
		<Root>
			<Select 
				options={options}
				variant="outlined"
				label="Clima de"
				value={ubicacion}
				handleChange={(value) => {
					setUbicacion(value);
				}}
			/>
			<CurrentDay weather={weather} />
			<CurrentWeek/>
		</Root>
	);
}

export default Card;
