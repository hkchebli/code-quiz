//initialize variables
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScorebtn');
const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores'));

const MAX_HIGH_SCORES = 5;
if(mostRecentScore){
    finalScore.textContent = mostRecentScore;

}
else{
    finalScore.textContent="0";
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

var saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("./highscore.html");
};