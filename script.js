let gamePlaying = false;
let progress = 0;
let volume = 0.5;
let pattern = [];
let guessCnt = 0;
let guessWrong = 0;
let level = 1;
let tonePlaying = false;

let clueHoldTime = 1000;
let nextClueWaitTime = 1000;
let cluePauseTime = 330;

let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function createPattern(length) {
  for (let i = 0; i < length; i++) {
    pattern.push(Math.floor(Math.random()*4 + 1));
  }
}

function speedUp() {
  if (clueHoldTime > 100) {
    clueHoldTime -= 100;
  } else {
    clueHoldTime = 50;
  }
  if (nextClueWaitTime > 100) {
    nextClueWaitTime -= 100;
  } else {
    nextClueWaitTime = 50;
  }
  if (cluePauseTime > 3) {
      cluePauseTime -= 30;
  } else {
    cluePauseTime = 3;
  }
  level += 1;
  if (level < 10) {
    document.getElementById("stage").innerHTML = "LEVEL".concat(" ", level.toString());
  } else {
    level = 10;
    document.getElementById("stage").innerHTML = "LEVEL MAX";
  }
}

function slowDown() {
  if (clueHoldTime > 1000) {
    clueHoldTime = 1000;
  } else {
    clueHoldTime += 100
  }
  if (nextClueWaitTime > 1000) {
    nextClueWaitTime = 1000;
  } else {
    nextClueWaitTime += 100;
  }
  if (cluePauseTime > 330) {
      cluePauseTime = 330;
  } else {
      cluePauseTime += 30;
  }
  level -= 1;
  if (level > 1) {
    document.getElementById("stage").innerHTML = "LEVEL".concat(" ", level.toString());
  } else {
    level = 1;
    document.getElementById("stage").innerHTML = "LEVEL 1";
  }
}


function startGame() {
  createPattern(8);
  gamePlaying = true;
  progress = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  progress = 0;
  guessCnt = 0;
  guessWrong = 0;
  clueHoldTime = 1000;
  nextClueWaitTime = 1000;
  cluePauseTime = 330;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Sound Synthesis Functions
const freqMap = {
  1: 260,
  2: 330,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCnt = 0;
  context.resume()
  let delay = nextClueWaitTime;
  for(let i=0; i<= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  if (pattern[guessCnt] == btn) {
    if (guessCnt == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCnt++;
    }
  } else {
    guessWrong++;
    if (guessWrong == 3) {
          loseGame();
    } 
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You win.");
}