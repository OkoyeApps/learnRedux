export default   (data) => {
    return (dispatch, getState) => {
            console.log("dispatching message", dispatch);
            console.log("store message", getState());
            console.log("data recieved", data);
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response =>
                {
                var returnedData =     response.json();
                    dispatch({type : "CHANGE_VALUE", payload : data})
                    dispatch({type : "RETURNED_FROM_DB", payload : response})
                
                })
            .then(json => console.log(json))
            console.log("waiting for dispatch");
            
    }
}