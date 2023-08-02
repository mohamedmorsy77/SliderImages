let img = document.getElementById("myimg");
let play = document.getElementById("play");
let Stop = document.getElementById("stop");
let title = document.getElementById("title");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let high = document.getElementById("high");
let low = document.getElementById("low");
let middle = document.getElementById("middle");
let data;
let imglist = [];
let titleList = [];
let x = 0;
let clear;
let httpclient = new XMLHttpRequest();
httpclient.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      imglist.push(data[i].url);
      titleList.push(data[i].title);
    }
  }
};
httpclient.open("get", "https://jsonplaceholder.typicode.com/albums/1/photos");
httpclient.send();
function updateImageAndTitle() {
  title.textContent = titleList[x];
  img.src = imglist[x];
  x++;
  if (x == imglist.length && x == titleList.length) {
    x = 0;
  }
}
play.onclick = function () {
  clear = setInterval(updateImageAndTitle, 3000);
};
Stop.onclick = function () {
  clearInterval(clear);
};
next.onclick = function () {
  title.textContent = titleList[x];
  img.src = imglist[x + 1];
  x++;
  console.log(x);
  if (x == imglist.length && x == titleList.length) {
    x = 0;
  }
};
previous.onclick = function () {
  x--;
  console.log(x);
  if (x < 0) {
    x++;
  }
  title.textContent = titleList[x];
  img.src = imglist[x];
};
high.onclick = function () {
  clear = setInterval(updateImageAndTitle, 6000);
};
low.onclick = function () {
  clear = setInterval(updateImageAndTitle, 4000);
};
high.onclick = function () {
  middle = setInterval(updateImageAndTitle, 5000);
};
