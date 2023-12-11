import React, {useState, createContext} from "react";
import Signup from "./user/signup";

export const AppContext = createContext(null);

function CreateContext(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    return (
        <AppContext.Provider value={{name, setName, email, setEmail}}>
        <Signup/>
        </AppContext.Provider>
    )
}