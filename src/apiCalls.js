export let fetchData = (end) => {
    return fetch(`http://localhost:3001/api/v1/tricks/${end}`)
                .then(response => {
                    if(!response.ok) {
                        throw new Error (`${response.status}`)
                     }
                     return response.json()
                })
}