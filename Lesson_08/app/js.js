  var vote = '0';
  var voteBox = document.getElementById('voteBox');
  voteBox.innerHTML = vote;
  const modernMinus = () =>{vote--;
    voteBox.innerHTML = vote;};
  const modernPlus = () => {vote++;
   voteBox.innerHTML = vote;};