let imgCh = document.querySelector("#cup");
let imgList = document.querySelectorAll(".small");
let btn = document.querySelector("#view");

let newDiv = document.createElement("div");
let newHr = document.createElement("hr");
let newH = document.createElement("h2");
let newUl = document.createElement("ul");
let newLi = document.createElement("li");
let newP = document.createElement("p");

let open = false;

newLi.textContent = "원산지 : 에티오피아";
newP.textContent = "2차 세계대전";
newH.textContent = "상품 상세 정보";

newDiv.appendChild(newHr);
newDiv.appendChild(newH);
newDiv.appendChild(newP);
newDiv.appendChild(newUl);
newUl.appendChild(newLi);

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function () {
    imgCh.src = this.src;
  });
}

btn.addEventListener("click", function () {
  if (open == false) {
    document.querySelector("#container").appendChild(newDiv);
    open = true;
  } else if (open == true) {
    document.querySelector("#container").removeChild(newDiv);
    open = false;
  }
});
