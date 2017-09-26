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
