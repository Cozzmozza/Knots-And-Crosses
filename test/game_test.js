const assert = require('assert');
const Game = require('../game.js');

describe('Game', function() {

    let game = new Game
           
    // 8 possible ways of winning with 3 numbers
    let arrWin31 = [1, 2, 3]; // WIN
    let arrWin32 = [1, 4, 7] // WIN
    let arrWin33 = [2, 5, 8] // WIN
    let arrWin34 = [3, 6, 9] // WIN
    let arrWin35 = [4, 5, 6] // WIN
    let arrWin36 = [7, 8, 9] // WIN
    let arrWin37 = [1, 5, 9] // WIN
    let arrWin38 = [3, 5, 7] // WIN


    //Winning with 4 numbers
    let arrWin41 = [1, 2, 3, 5];
    let arrWin42 = [3, 6, 8, 9];
    let arrWin43 = [1, 7, 8, 9];
    let arrWin44 = [3, 4, 5, 7];

    //Winning with 5 numbers
    let arrWin51 = [1, 2, 5, 7, 9];
    let arrWin52 = [2, 4, 6, 7, 9];
    let arrWin53 = [1, 2, 4, 5, 8];
    let arrWin54 = [1, 3, 4, 5, 7];
    
    // Losing with 5 numbers
    let arrLost51 = [1, 3, 5, 6, 8];
    let arrLost52 = [2, 4, 6, 7, 8];
    let arrLost53 = [1, 2, 6, 7, 9];
    let arrLost54 = [1, 4, 6, 8, 9];
    
    // beforeEach(function() {


    // })
    

    it('should return WIN if player has any of the 8 possible wins in their array of 3', function() {
        const actual1 = game.winCheck(arrWin31);
        const actual2 = game.winCheck(arrWin32);
        const actual3 = game.winCheck(arrWin33);
        const actual4 = game.winCheck(arrWin34);
        const actual5 = game.winCheck(arrWin35);
        const actual6 = game.winCheck(arrWin36);
        const actual7 = game.winCheck(arrWin37);
        const actual8 = game.winCheck(arrWin38);
        assert.strictEqual(actual1, 'Player Win')
        assert.strictEqual(actual2, 'Player Win')
        assert.strictEqual(actual3, 'Player Win')
        assert.strictEqual(actual4, 'Player Win')
        assert.strictEqual(actual5, 'Player Win')
        assert.strictEqual(actual6, 'Player Win')
        assert.strictEqual(actual7, 'Player Win')
        assert.strictEqual(actual8, 'Player Win')
    })

    it('should return WIN if player has a win in an array of 4', function() {
        const actual1 = game.winCheck(arrWin41);
        const actual2 = game.winCheck(arrWin42);
        const actual3 = game.winCheck(arrWin43);
        const actual4 = game.winCheck(arrWin44);
        assert.StrictEqual = (actual1, 'Player Win')
        assert.StrictEqual = (actual2, 'Player Win')
        assert.StrictEqual = (actual3, 'Player Win')
        assert.StrictEqual = (actual4, 'Player Win')
    })

    it('should return WIN if player has a win in an array of 5', function() {
        const actual1 = game.winCheck(arrWin51);
        const actual2 = game.winCheck(arrWin52);
        const actual3 = game.winCheck(arrWin53);
        const actual4 = game.winCheck(arrWin54);
        assert.StrictEqual = (actual1, 'Player Win')
        assert.StrictEqual = (actual2, 'Player Win')
        assert.StrictEqual = (actual3, 'Player Win')
        assert.StrictEqual = (actual4, 'Player Win')
    })

    it('should return LOSS if player has no wins in an array of 5', function(){
        const actual1 = game.winCheck(arrLost51);
        const actual2 = game.winCheck(arrLost52);
        const actual3 = game.winCheck(arrLost53);
        const actual4 = game.winCheck(arrLost54);
        assert.strictEqual(actual1, 'No Win');
        assert.strictEqual(actual2, 'No Win');
        assert.strictEqual(actual3, 'No Win');
        assert.strictEqual(actual4, 'No Win');
    })


})
