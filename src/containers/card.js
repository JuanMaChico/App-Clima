/**
 * Dependencias
 */
import React from "react";
/**
 * Componentes
 */
import { Root } from "./card.styles";
import CurrentDay from "../components/CurrentDay/CurrentDay";
import CurrentWeek from "../components/CurrentWeek/CurrentWeek";

/**
 * Tarjeta principal de la vista
 * @returns {Card}
 */
function Card( props ) {
	
	
	return (
		<Root>
			<CurrentDay/>
			<CurrentWeek/>
		</Root>
	);
}

export default Card;
