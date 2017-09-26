function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function increaseRankBy(n) {
  var lis = document.getElementById("app").querySelectorAll(".ranked-list")

  for(var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML + n, 10)
  }
}

function deepestChild() {
  var current = document.getElementById("#grand-node").querySelector("div")
  while(current.querySelector("div")) {
    current = current.querySelector("div")
  }
  return current
}
