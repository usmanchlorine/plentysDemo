


let userServiceCall = async (method, endpoint, data) => {
    switch (endpoint) {
        case 'createuser':
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
                console.log(payload);

                return payload



            } catch (err) {
                console.log(err);
            }

        case 'login':
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
                if (payload.message) {
                    return {
                        status: payload.status,
                        message: payload.message
                    };
                }
                localStorage.setItem('username', payload.user.username);
                return payload



            } catch (err) {
                console.log(err);
            }



    }

}

export { userServiceCall }