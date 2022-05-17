const receivesAFunction = (callback)=>{
    return callback();
};
    



const returnsANamedFunction = () => {
    const namedFunction = () => {
        console.log('a function')
    };
    return namedFunction;
};

const returnsAnAnonymousFunction = () =>{ 
    return function () {
        console.log('Anonymous function')
    }
};