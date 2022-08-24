

export const get = async (url) => {

    try{
        
        const raw_response = await fetch(url);
        const response = await raw_response.json();
        if ( raw_response.status == 200 ) {
            return {
                code: raw_response.status,
                data: response
            }
        } else if( raw_response.status == 400 ) {
    
            return{
                code:raw_response.status,
                msg_error:"Bad Request"
            }
    
        }
    }
    catch( error ){
        console.error("Error en Request Get ",error);
    }

}