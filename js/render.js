/**
 * Project Name - Stone Paper Scissors
 * Developer - Taraknath Karan
 * Company - Tarak Program
 * Copyright (c) 2026
 * License - MIT
 */

/**
 * Question: এই প্রোজেক্ট এ এই ফাইল টা কী কাজ করছে ?
 * Answers: Client Side Rendering.
 */

"use strict";

const game_body = document.querySelector("#game-body");

const renderHomePage = () => {
  game_body.innerHTML = `
    <h2 class="companyName">Tarak Program</h2>
    <h1 class="gameName">Stone Paper Scissors</h1>
    <br><br>
    <button class="play">▶</button>
    <button class="settings">⚙︎</button>
    <br><br>
    <pre>Coder Name: Taraknath Karan.</pre>
  `;
}

const renderSettingsPage = () => {
  game_body.innerHTML = `
    <p class="avater-preview" name="user">${avater.current}</p>
    <h2>Select Your Avater</h2>
    <div class="avater-button">
      ${renderAvater()}
    </div>
    <br><br>
    <button class="btn">Exit</button>
  `;
}

// এটা avater এর ইমজি সেট করা html return করে যেটি Setting Page Catch করে
const renderAvater = () => {
  let avatersHTML = "";
  avater.get.forEach(iv => {
    avatersHTML += `<button class="avater">${iv}</button>`;
  });
  return avatersHTML;
}

const renderWeaponSelectPage = () => {
  game_body.innerHTML = `
    <p class="score" name="user">${avater.current} ${score.user}</p>
    <p class="score" name="computer"> ${score.computer} 💻</p>
    <p style="font-size: 1.4pc;">Choose Your Weapon</p>
    <button class="select">🪨</button>
    <span class="hidden">..</span>
    <button class="select">📰</button>
    <span class="hidden">..</span>
    <button class="select">✂️</button>
    <br><br><br>
    <br><br><br>
    <button class="btn">Exit</button>
  `;
}

const rendergameResultProcessPage = ({ userSelect, computerSelect, gameResult }) => {
  game_body.innerHTML = `
    <p class="score" name="user">${avater.current} ${score.user} </p>
    <p class="score" name="computer">${score.computer} 💻</p>
    <button class="player-box">
      <span class="player">${avater.current}</span>
      <br>
      <font size="7">${weapon2emogi(userSelect)}</font>
    </button>
    <span class="hidden">. . .</span>
    <button class="player-box">
      <span class="player">💻</span>
      <br>
      <font size="7">${weapon2emogi(computerSelect)}</font>
    </button>
    <br><br><br><br>
    <font size="6">${gameResult}</font>
    <br><br><br>
    <button class="btn">Exit</button>
    <button class="btn">Play Again</button>
  `;
}
