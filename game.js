

const Game = function () {

}


Game.prototype.winCheck = (arr) => {

    for (let num1 of arr){

        let numArr = arr;

        let winArray1 = []; // Horizontal
        let winArray2 = []; // Vertical
        let winArray3 = []; // Diagonal top left to bottom right
        let winArray4 = []; // Diagonal top right to bottom left

        for (let num2 of numArr){

            if (num1 % 3 === 0){ // If the number is at the end of the row of 3
                // This was originally as below to capture e.g. 1,2,3 and 4,5,6
                // But it was capturing 6,7,8 etc also
                if (num1 === num2 + 1 || num1 === num2 + 2){
                    winArray1.push(num2);
                };
            };
            
            if (num1 === num2 - 3 || num1 === num2 - 6){
                winArray2.push(num2);
            };

            if (num1 === num2 - 4 || num1 === num2 - 8){
                winArray3.push(num2);
            };

            if (num1 === 3) { // This is for the special case diagonal. Only do if it the number is 3, as a start point
                if (num1 === num2 - 2 || num1 === num2 -4 ){ 
                winArray4.push(num2);
                }
            }
    
            if (winArray1.length >=2 || winArray2.length >=2 || winArray3.length >= 2 || winArray4.length >= 2){
                return 'Player Win' // Stops the loop if a win is found
            };

        };
    }
    return 'No Win'
}



module.exports = Game;