function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide-item"); //slide1에 대한 dom 참조
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; //처음에 전부 display를 none으로 한다.
  }
  index++;
  if (index > x.length) {
    index = 1; //인덱스가 초과되면 1로 변경
  }
  x[index - 1].style.display = "block"; //해당 인덱스는 block으로
  setTimeout(slideShow, 10000000);
}
