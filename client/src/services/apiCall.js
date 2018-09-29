const apiCall = (route , method='GET',body={}) => {

    return new Promise((resolve , reject) =>{
        const header = {
            'Content-Type' : 'application/json'
        }
        const requestDetails = {
            method,
            mode : 'cors',
            header,
    
        }
    
        if (method !== 'GET') {
            requestDetails.body = JSON.stringify(body);
        }
    
        const serverUrl = 'http://127.0.0.1:10010';
    
        const handleErrors= response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw Error(response.statusTxt);
            }
        }
    
        fetch(`${serverUrl}/${route}`,requestDetails)
        .then(handleErrors)
        .then(data => resolve(data))
        .catch(err=> reject(err))
   
    
    });
}
export default apiCall;