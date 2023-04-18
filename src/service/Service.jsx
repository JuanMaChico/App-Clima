//API KEY - Clave unica del api por usuario
import { API_KEY } from '../utils/constants';
import * as Request from '../utils/requests';

/**
 * API Ubicación por Ip
 * @returns { JSON }  https://ip-api.com/docs
 */
export const GetCity = async () => {
	try {
		const response = await Request.get('https://ip-api.com/json/?fields=61439');
		return response.data;
	} catch (error) {
		// eslint-disable-next-line no-throw-literal
		throw {
			error,
			msg: 'Fallo - GetCity',
		};
	}
};

/**
 * API Clima por ciudad del dia corriente
 * @param {String} CITY Ciudad de la que se busca clima
 * @returns { JSON } https://openweathermap.org/current
 */
export const GetData = async (CITY) => {
	const response = await Request.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=es&appid=${API_KEY}`,
	);
	return response.data;
};

/**
 *
 * @param {*} lat
 * @param {*} lon
 * @returns { JSON } https://openweathermap.org/forecast5
 */
export const GetWeekClima = async (lat, lon) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`,
	);
	const data = await response.json();
	return data;
};

export const GetClima = async (callback, city = null) => {
	let dataCiudad = city;
	if (!dataCiudad || dataCiudad === 'Ubicación actual') {
		let response = await GetCity();
		dataCiudad = response.city;
	}
	// console.log("Data ciudad get clima",dataCiudad);
	const data = await GetData(dataCiudad);
	callback(data);
};

export const GetWeek = async (callback, coordenadas) => {
	let coordenadasDate = coordenadas;
	if (!coordenadasDate) {
		let response = await GetWeekClima(coordenadas.lat, coordenadas.lon);
		coordenadasDate = response;
	}
	const data = await GetWeekClima(coordenadas.lat, coordenadas.lon);
	callback(data);
};
