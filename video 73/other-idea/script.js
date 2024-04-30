function details() {
  document.getElementById("title").innerHTML = givetitle;
  document.getElementById("chennel_name").innerHTML = chename;
  document.getElementById("views").innerHTML = noofview;
  document.getElementById("time").innerHTML = timeop + " ago";
}

details(
  (givetitle = prompt("Enter Tittle")),
  (chename = prompt("Enter Chennel Name")),
  (noofview = prompt("Enter Total No of Views")),
  (timeop = prompt("Enter How Much time older"))
);

//making Views according to english rule
if (2000 > noofview >= 1000) {
  noofview = "1k";
} else if (noofview > 1000) {
  noofview = noofview;
}
