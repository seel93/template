import React, {createContext, useContext, useEffect, useState} from 'react';
import {OrderType} from "../models/OrderType";
import MetaService from "../services/MetaService";

type MetaContextType = {
    orderTypes: OrderType []
}

const empty: MetaContextType = {
    orderTypes: []
}

const MetaContext = createContext<MetaContextType>(empty);


export const MetaProvider = (props: any) => {
    const [state, setState] = useState<MetaContextType>({...empty});

    useEffect(() => {
        const temp: any = {
            orderTypes: MetaService.fetchOrderTypes()
        }
        const keys = Object.keys(temp);

        // reconstruct with resolved values
        Promise.all(keys.map(key => temp[key]))
            .then(results =>
                results.reduce((acc, value, index) =>
                        ({...acc, [keys[index]]: value})
                    , {...empty}))
            .then(setState);
    }, []);

    return (
        <MetaContext.Provider value={state}> {/* <-- sets state once */}
            {props.children}
        </MetaContext.Provider>
    );

};

export const useMetaContext = () => useContext(MetaContext);
