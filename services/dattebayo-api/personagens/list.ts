const API_HOST = 'https://dattebayo-api.onrender.com'

export async function fetPersonagens(){
    try{
        const response = await fetch(`${API_HOST}/charcters`)
        
        if(!response.ok){
            throw new Error(`Erro na aquisição: ${response.statusText}`)
        }
    }catch(error){

    }
}