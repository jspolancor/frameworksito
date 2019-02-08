const frameworksito = function (data, element) {            
    const frameworksitoState = {};                        

    const update = (element, key) => {
        element.querySelector(`[ref=${key}]`).innerHTML = frameworksitoState[key];
    }

    Object.keys(data).forEach((key) => {       
        frameworksitoState[key] = data[key];    
        Object.defineProperty(data, key, {
            enumerable: true,
            set: (newValue) => {                        
                frameworksitoState[key] = newValue;                
                update(element, key);                   
            },            
        });        
        update(element, key);  
    });

    return {
        commit: (key, value) => {
            data[key] = value;            
        },
        getState: () => frameworksitoState,
        element,
    }

};