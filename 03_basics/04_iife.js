// Immediately Invoked Function Expressions (IIFE)


(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB 2 CONNECTED`);
})();