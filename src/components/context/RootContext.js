import React, {useState} from 'react';
import {DarkContext} from "./index";

const RootContext = ({children}) => {
    const [dark, setDark] = useState(false)
    return (
        <div>
            <DarkContext.Provider value={{
                dark,
                setDark
            }}>
                {children}
            </DarkContext.Provider>
        </div>
    );
};

export default RootContext;