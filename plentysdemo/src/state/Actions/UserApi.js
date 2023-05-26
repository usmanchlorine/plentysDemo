import { json } from "react-router-dom";


let userServiceCall = async (method, endpoint, data) => {
    try {



        const apiUrl = `http://localhost:5000/api/auth/${endpoint}`
        let response = await fetch(apiUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json' // Specify the content type of the request body
            },
            body: JSON.stringify(data)

        });

        let payload = await response.json();

        return payload.message



    } catch (err) {
        console.log(err);
    }

}

export { userServiceCall }