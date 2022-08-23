/**
 * Dependencias
 */
import React, { useState, useEffect } from "react";
import { Root } from "./App.styles";
import Card from "../containers/card";
import ServicioFake from "../utils/ServicioFake.json";


function App() {

	
	return (
		<Root>
			{
				<Card weather={ServicioFake} />
			}
		</Root>
	);
}

export default App;
