//API KEY - Clave unica del api por usuario
import { API_KEY } from "../utils/constants";
import * as Request from "../utils/requests";

/**
 * API Ubicacion por Ip
 * @returns { JSON }  https://ip-api.com/docs
 */
export const GetCity = async () => {
    try {

        const response = await Request.get('http://ip-api.com/json/?fields=61439')
        return response.data;

    } catch (error) {

        throw {
            error,
            msg:"Fallo - GetCity"
        }
        
    }
} 

/**
 * API Clima por ciudad del dia corriente
 * @param {String} CITY 
 * @returns { JSON } https://openweathermap.org/current
 */
export const GetData = async ( CITY ) => {
    const response = await Request.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=es&appid=${API_KEY}`)
    return response.data;
}


export const GetWeekClima = async ( lat, lon ) => {
    const response = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data)
    return data;
}


export const GetClima = async ( callback, city=null ) => {
    let dataCiudad = city;
    if ( !dataCiudad ) {
        let response = await GetCity();
        dataCiudad = response.city;
    }
    console.log("Data ciudad get clima",dataCiudad);
    const data = await GetData(dataCiudad);
    callback(data);
}