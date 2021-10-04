const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerXPosition = 0;
    this.playerYPosition = 0;
  }
  print() {
      console.log(this.field)
  }
  whichWay() {
    this.print()
    let answer = prompt('Which way would you like to move? (d, u, l, r)  ');
    if(answer === 'd') {
        myField.moveDown();
    } else if(answer === 'u') {
        myField.moveUp();
    } else if(answer === 'l') {
        myField.moveLeft();
    } else if(answer === 'r') {
        myField.moveRight();
    } else {
        console.log('You must enter d, u, l, or r!!');
        myField.whichWay();
    };
} 
  move() {
        if(this.playerXPosition < 0 || this.playerYPosition < 0 || this.playerXPosition > 3 || this.playerYPosition > 8) {
            let a = prompt('You fell off the field, you idiot! Do you want to try again?  ');
            if(a === 'y') {
                this.newGame();
            };
        } else if (myField.field[this.playerYPosition][this.playerXPosition] === 'O') {
            let a = prompt('You fell down a hole!! You idiot! Do you want to try again? y/n  ');
            if(a === 'y') {
                this.newGame();
            };
        } else if (myField.field[this.playerYPosition][this.playerXPosition] === '^') {
            let newGame = prompt("YOU WON!!!! CONGRATULATIONS. YOU'RE NOT AN IDIOT! Wanna try again? y/n  ");
            if(newGame === 'y') {
                this.newGame();
            };
        } else {
            myField.field[this.playerYPosition][this.playerXPosition] = '*';
            myField.whichWay();
        }
    }
  moveDown() {
    this.playerYPosition++
    this.move();
  }
  moveUp() {
    this.playerYPosition--;
    this.move();
    }

  moveLeft() {
    this.playerXPosition--;
    this.move();
    }

  moveRight() {
    this.playerXPosition++;
    this.move();
  }
  newGame() {
    const myField = new Field([ ['*', '░', 'O', '░'],
    ['░', 'O', '░', '░'],
    ['░', '░', '░', '░'],
    ['O', '░', 'O', '░'],
    ['░', 'O', '░', '░'],
    ['░', '░', '░', 'O'],
    ['░', '░', 'O', '░'],
    ['░', 'O', '░', '░'],
    ['░', '░', '░', '^']]);

    this.playerXPosition = 0;
    this.playerYPosition = 0;
    
    myField.whichWay();
}

};

const myField = new Field([ ['*', '░', 'O', '░'],
['░', 'O', '░', '░'],
['░', '░', '░', '░'],
['O', '░', 'O', '░'],
['░', 'O', '░', '░'],
['░', '░', '░', 'O'],
['░', '░', 'O', '░'],
['░', 'O', '░', '░'],
['░', '░', '░', '^']]);

myField.newGame();