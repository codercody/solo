var game = {};

game.init = function(){
  var deck = [
    'A of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'J of Hearts', 'Q of Hearts', 'K of Hearts',
    'A of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'J of Diamonds', 'Q of Diamonds', 'K of Diamonds',
    'A of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', '7 of Spades', '8 of Spades', '9 of Spades', '10 of Spades', 'J of Spades', 'Q of Spades', 'K of Spades',
    'A of Clovers', '2 of Clovers', '3 of Clovers', '4 of Clovers', '5 of Clovers', '6 of Clovers', '7 of Clovers', '8 of Clovers', '9 of Clovers', '10 of Clovers', 'J of Clovers', 'Q of Clovers', 'K of Clovers',
    ];

    this.shuffle(deck);

    this.player = deck.splice(0, 26);
    this.computer = deck;

    $('#playerCardCount').text(JSON.stringify(this.player.length));
    $('#computerCardCount').text(JSON.stringify(this.computer.length));

    var context = this;
    $('#hit').on('click', function(){
      context.hit();
    });
};


game.hit = function(){
  this.playerCard = this.player.splice(this.getRandomInt(0, this.player.length), 1);
  this.computerCard = this.computer.splice(this.getRandomInt(0, this.computer.length), 1);
  
  $('#playerCardCount').text(this.player.length);
  $('#computerCardCount').text(this.computer.length);
  $('#playerCard').text(this.playerCard);
  $('#computerCard').text(this.computerCard);

  var context = this;
  setTimeout(this.compare, 3000);
};

game.compare = function(){
  
  var getImg = function(rank, el, div, side){
    if(rank === 1)
      rank = 'ace';
    if(rank === 11)
      rank = 'jack';
    if(rank === 12)
      rank = 'queen';
    if(rank === 13)
      rank = 'king';

    if(el[0][5] === 'S'){
      $('#playerCard').text('');
      $('.bottom').append('<img src="img/cards/' + rank + '-' + 'spades.png">');
    } else if(el[0][5] === 'C'){
      $('#playerCard').text('');
      $('.bottom').append('<img src="img/cards/' + rank + '-' + 'clubs.png">');
    } else if(el[0][5] === 'D'){
      $('#playerCard').text('');
      $('.bottom').append('<img src="img/cards/' + rank + '-' + 'diamonds.png">');
    } else if(el[0][5] === 'H'){
      $('#playerCard').text('');
      $('.bottom').append('<img src="img/cards/' + rank + '-' + 'hearts.png">');
    }
  };

  var pointSetter = function(card){
    var counter = 0;

    if(card[0][0] === 'A'){
      counter = 1;
      getImg(counter, card);
    }
    if(card[0][0] === '2'){
      counter = 2;
      getImg(counter, card);
    }
    if(card[0][0] === '3'){
      counter = 3;
      getImg(counter, card);
    }
    if(card[0][0] === '4'){
      counter = 4;
      getImg(counter, card);
      } 
    if(card[0][0] === '5'){
      counter = 5;
      getImg(counter, card);
    }
    if(card[0][0] === '6'){
      counter = 6;
      getImg(counter, card);
    }
    if(card[0][0] === '7'){
      counter = 7;
      getImg(counter, card);
    }
    if(card[0][0] === '8'){
      counter = 8;
      getImg(counter, card);
    }
    if(card[0][0] === '9'){
      counter = 9;
      getImg(counter, card);
    }
    if(card[0][0] === '1'){
      counter = 10;
      getImg(counter, card);
    }
    if(card[0][0] === 'J'){
      counter = 11;
      getImg(counter, card);
    }
    if(card[0][0] === 'Q'){
      counter = 12;
      getImg(counter, card);
    }
    if(card[0][0] === 'K'){
      counter = 13;
      getImg(counter, card);
    }

    return counter;
 
};

  var playerPoints = pointSetter(game.playerCard),
      computerPoints = pointSetter(game.computerCard);

    if(playerPoints > computerPoints){
      game.player.push(this.computerCard.innerHTML, this.playerCard.innerHTML);
    } else if(computerPoints > playerPoints){
      game.computer.push(this.playerCard.innerHTML, this.computerCard.innerHTML);
    } else {
      game.hit();
    }

    $('#playerCardCount').text(game.player.length);
    $('#computerCardCount').text(game.computer.length);
    $('#playerCard').text('');
    $('#computerCard').text('');
    console.log('player: ' + game.player.length + '  |  Computer: ' + game.computer.length);
};


game.getRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

game.shuffle = function(cards){
  var temp = '';
  for(var i = 0; i < cards.length; i++){
    var rand = this.getRandomInt(0, 51);
    temp = cards[rand];
    cards[rand] = cards[i];
    cards[i] = temp;
  }
  return cards;
};

game.init();