
var list = ["apple", "banana", "orange"];

var L = list.length;

var fakeCards = [];

$("#practice").append("list length before " + fakeCards.length);

for (i = 0; i<L; i++){
  fakeCards.push(i);
}

$("#practice").append("list length after " + fakeCards.length);


var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");

for (i=1; i<14; i++){
  for (k=1; k<5; k++) {
    var j = [i,k];
    cards.push(j);
  }
}

cards.shuffle = function() {
  console.log("shuffle");
    var input = this;
    for (var i = cards.length; i >==0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex] [0];
        var itemAtSecond = cards[randomIndex] [1];
