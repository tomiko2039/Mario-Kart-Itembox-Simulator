// Mario Kart Itembox by Ko Tomiyoshi

// Event Listener
document.getElementById('img').addEventListener('click', roleItem);

// Event Function
function roleItem() {
  // Generate a random number
  let randNum = Math.random(); // Random decimal from 0 up to 1

  let position = document.getElementById('RP').value;

  // Simulate results
  if (position <= 6) {
    if (randNum < 0.01) {
      document.getElementById('result').innerHTML = '<img class="re-img" src = "images/BulletBill.png" > '
      document.getElementById('result2').innerHTML += '<img class="re-img2" src ="images/BulletBill.png">'
    } else if (randNum < 0.05) {
      document.getElementById('result').innerHTML = '<img class="re-img" src ="images/GoldenMushroom.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src ="images/GoldenMushroom.png">'
    } else if (randNum < 0.2) {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/Star.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/Star.png">'
    } else if (randNum < 0.55) {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/GreenShell.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/GreenShell.png">'
    } else {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/Banana.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/Banana.png">'

    }

  } else {
    if (randNum < 0.05) {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/Banana.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/Banana.png">'
    } else if (randNum < 0.1) {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/GreenShell.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/GreenShell.png">'
    } else if (randNum < 0.35) {
      document.getElementById('result').innerHTML = '<img class="re-img" src="images/Star.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src="images/Star.png">'
    } else if (randNum < 0.65) {
      document.getElementById('result').innerHTML = '<img class="re-img" src ="images/BulletBill.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src ="images/BulletBill.png">'
    } else {
      document.getElementById('result').innerHTML = '<img class="re-img" src ="images/GoldenMushroom.png">'
      document.getElementById('result2').innerHTML += '<img class="re-img2" src ="images/GoldenMushroom.png">'
    }
  }
}