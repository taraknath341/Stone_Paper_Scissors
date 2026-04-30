/**
 * Project Name - Stone Paper Scissors
 * Developer - Taraknath Karan
 * Company - Tarak Program
 * Copyright (c) 2026
 * License - MIT
 */

/**
 * Question: এই প্রোজেক্ট এ এই ফাইল টা কী কাজ করছে ?
 * Answers: এটাই হল এই প্রোজেক্ট এর মেইন ফাইল। ইভেন্ট হ্যান্ডেল, Client side Rendering বাদে 
 *    বাকি সব কাজ এই ফাইল টাই করছে । 
 */

"use strict";

const score = {
  user: 0,
  computer: 0,
}
const avater = {
  get: [
    "👤", "🙎‍♂️", "🙋🏻‍♂️", "👨🏻‍💼", "🙋🏻‍♀️", "👱🏻‍♀️", "👩🏻‍🦰", "👩🏻‍💼", "🙍‍♀️", "👷‍♂️", "🤵", "🧑‍🔧",
    "👨‍🎓", "👨‍🔬", "💁🏻‍♀️", "👩🏻‍💻", "😈", "👻", "🎃", "💀", "🐱", "🐍", "🦜", "🦊",
    "🦁", "🐸", "🦥", "🦄", "🐉", "🐝", "🐎", "🧸", "🦆", "🐦", "🦕", "🐓",
    "🐇", "🐬", "🐕", "🐦‍🔥", "🦖", "🐧", "🐼", "🐑", "🦉", "🐻", "🦌", "🦔",
    "🦅", "🐯", "🦋", "🐘", "🐞", "🦫", "🐥", "🐷", "🐄", "🦈", "🐺", "🐙",
    "🐤"
  ],
  current: localStorage.getItem("current_avater") ?? "👤"
}

const weapon2emogi = name => {
  switch (name) {
    case "Stone":
      return "🪨";
    case "Paper":
      return "📰";
    case "Scissors":
      return "✂️";
  }
}

const emogi2Weapon = emogi => {
  switch (emogi) {
    case "🪨":
      return "Stone";
    case "📰":
      return "Paper";
    case "✂️":
      return "Scissors";
  }
}

const exit = function () {
  renderHomePage();
  score.computer = 0;
  score.user = 0;
}

exit();

// Computer দান চালবে
const computerMode = () => {
  let a = Math.round(Math.random() * 2);
  if (a === 0) {
    return "Stone";
  } else if (a === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
};


const openSettings = () => {
  renderSettingsPage();
  const avaterButton = document.querySelector(".avater-button");
}


const gameResultProcess = (userSelect, computerSelect) => {
  if (userSelect == computerSelect) {
    return "Game Due";
  } else if ((userSelect == "Stone" && computerSelect == "Scissors") || (userSelect == "Paper" && computerSelect == "Stone") || (userSelect == "Scissors" && computerSelect == "Paper")) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

// Computer এবং Player এর মধ্যে যে জিতবে তার স্কোর ১ বাড়বে 
const scoreUp = (gameStatus) => {
  if (gameStatus === "You Lose") {
    score.computer++;
  } else if (gameStatus === "You Win") {
    score.user++;
  }
}

// যখন user এবং কম্পিউটার দান চালবে । 
const playMode = (userSelect) => {
  const computerSelect = computerMode();
  const gameResult = gameResultProcess(userSelect, computerSelect);

  scoreUp(gameResult); /* যদি game result "You Win" হয় তাহলে User এর score 1 বাড়বে
  যদি game result "You Lose" হয় তাহলে Computer এর score 1 বাড়বে */
  rendergameResultProcessPage({ gameResult, userSelect, computerSelect });
}
