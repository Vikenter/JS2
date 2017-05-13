'use strict';

var vote = '0';
var voteBox = document.getElementById('voteBox');
voteBox.innerHTML = vote;
var modernMinus = function modernMinus() {
  vote--;
  voteBox.innerHTML = vote;
};
var modernPlus = function modernPlus() {
  vote++;
  voteBox.innerHTML = vote;
};