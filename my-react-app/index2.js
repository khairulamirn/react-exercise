var numWaterBottles = function(numBottles, numExchange) {
    let totalBottles = numBottles;

    while (numBottles >= numExchange) {
        const afterExchanged = Math.floor(numBottles / numExchange);
        const remainingEmptyBottles = numBottles % numExchange;
        totalBottles += afterExchanged;
        numBottles = afterExchanged + remainingEmptyBottles ;
    }
    return totalBottles;
}; 

console.log(numWaterBottles(9, 3));