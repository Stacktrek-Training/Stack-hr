export function updateCounter(percent) {
  let number = document.getElementById("percentnumber");
  let counter = 0;
  setInterval(() => {
    if (counter == percent) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 30);
}
