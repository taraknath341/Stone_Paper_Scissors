/**
 * Project Name - Stone Paper Scissors
 * Developer - Taraknath Karan
 * Company - Tarak Program
 * Copyright (c) 2026
 * License - MIT
 */

/**
 * Question: এই প্রোজেক্ট এ এই ফাইল টা কী কাজ করছে ?
 * Answers: এর কাজ হল ইভেন্ট হ্যান্ডল করা innerHTML use করে client Side Rendering করলে addEventListen রিমুভ হয়ে যায় ,
 *    বার বার addEventListen use করলে মেমোরি লিক হয়।  তাই উক্ত ফাইলের ভিতরে প্রত্যেকটা child এর অ্যাড ইভেন্ট litener না
 *    use করে এর প্যারেন্ট element কে ক্লিক ইভেন্ট দিয়েছি এবং clild element কে নিয়ন্ত্রণ করছি। 
 *    এটা use করার ফলে Client Side Rendering with Memory ম্যানেজমেন্ট ।
 */

game_body.onclick = e => {
  if (e.target.className === "play") {
    renderWeaponSelectPage();
  }

  else if (e.target.innerText === "Play Again") {
    renderWeaponSelectPage();
  }

  else if (e.target.className === "settings") {
    openSettings();
  }

  else if (e.target.className === "avater") {
    document.querySelector(".avater-preview").innerText = avater.current = e.target.innerText;
    localStorage.setItem("current_avater", avater.current);
  }

  else if (e.target.innerText === "Exit") {
    exit();
  }

  else if (e.target.className === "select") {
    const weaponName = emogi2Weapon(e.target.innerText);
    playMode(weaponName);
  }
}