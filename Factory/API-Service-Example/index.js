function CreateAPIService(baseUrl) {
    return {
        get(endpoint, headers = {}) {
            return fetch(`${baseUrl}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                }
            });
        },

        post(endpoint, body = {}, headers = {}) {
            return fetch(`${baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(body)
            });
        }
    };
}

const userList = CreateAPIService('https://retoolapi.dev/z1H2Lv');

userList
.get('data')
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.error('Error:', err));
