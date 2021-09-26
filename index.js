//Task-1
function logNumbers(x, y) {
  for (i = x; i <= y; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Jackpot");
    } else if (i % 3 === 0) {
      console.log("This is divisible by 3");
    } else if (i % 5 === 0) {
      console.log("This is divisible by 3");
    } else {
      console.log(i);
    }
  }
}
logNumbers(1, 100);
//Task-2
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.innerHTML = "click me to get random IMAGE";
body.appendChild(btn);
const div = document.createElement("div");
body.appendChild(div);
btn.addEventListener("click", getRandomImage);
function getRandomImage() {
  console.log("Hello");
  const img = document.createElement("img");
  div.innerHTML = "";
  div.appendChild(img);
  const photos = Math.floor(Math.random() * 100);
  img.src = `https://picsum.photos/id/${photos}/400`;
}
//Task-3
const url = "https://reqres.in/api/users";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    body.appendChild(document.createElement("h1"));
    const title = document.querySelector("h1");
    title.innerHTML = `First three users are:`;
    const users = data.data.slice(0, 3);
    users.forEach((element) => {
      const li = document.createElement("li");
      body.appendChild(li);
      li.innerHTML = element.first_name;
    });
  });
//Task-4
class Produc {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  logProduct() {
    return this.name + this.price;
  }
}
const table = new Product("table", 1200);
table.logProduct(); // 'Table costs 1200 kr'
