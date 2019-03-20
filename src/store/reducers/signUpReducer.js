const InitialState = {
    email : "",
    password : "",
    firstName : "",
    lastName : ""
}



const signUpReducer = (state = InitialState, action) => {
    console.log("action recieved", action);
    switch(action.type){
        case "CHANGE_VALUE" :
      return {...state, [action.payload.id] : action.payload.value}

        default :
        return state;
    }
    return state;

}

export default signUpReducer;