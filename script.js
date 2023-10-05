// Creator: Maximus Halloran
// newgrounds lol

var click = document.getElementById("click");
var clicktxt = document.getElementById("click-text");
var clicks = 0;
var clickAnimation = false;
var perSec = 0;
var music = false;
var mIndex = 0;
var ppc = 1;
var rebirths = 0;
var clickUpgrades = 0;
var clickUpgradeCost = 10;
var crowdUpgrades = 0;
var crowdUpgradeCost = 100;
var maxwellUpgrades = 0;
var maxwellUpgradeCost = 1000;
var carUpgrades = 0;
var carUpgradeCost = 10000;
var jporkUpgrades = 0;
var jporkUpgradeCost = 100000;
var busUpgrades = 0;
var busUpgradeCost = 100000;
var hotelUpgrades = 0;
var hotelUpgradeCost = 1000000;
document.addEventListener("keydown", (e) => {
  if (e.key == "m"){
    e.preventDefault()
    if (mIndex == 0){
      mIndex = 1
      document.querySelector("#scawyMusic").src = "//cdn.crazycontent.net/New Friendly.mp3"
    } else {
      mIndex = 0
      document.querySelector("#scawyMusic").src = "//cdn.crazycontent.net/Off to Osaka.mp3"
    }
  }
})
window.addEventListener("load", () => {
  if (getCookie("cheater")){
    window.location.href = "/cheater"
  }
  if (getCookie("rebirths")){
    rebirths = parseInt(getCookie("rebirths"))
  }
  if (getCookie("clicks")){
    clicks = parseInt(getCookie("clicks"))
  }
  if (getCookie("ppc")){
    ppc = parseInt(getCookie("ppc"))
    document.getElementById("ppc").innerHTML = ppc + " PPC";
  }
  if (getCookie("perS")){
    perSec = parseInt(getCookie("perS"))
    document.getElementById("per-sec").innerHTML = perSec + " PPS";
  }
  if (getCookie("clickU")){
    clickUpgrades = parseInt(getCookie("clickU"))
    document.getElementById("click-upgrade-times").innerHTML = clickUpgrades;
  }
  if (getCookie("clickUCost")){
    clickUpgradeCost = parseInt(getCookie("clickUCost"))
    document.getElementById("click-upgrade-cost").innerHTML = clickUpgradeCost;
  }
  if (getCookie("crowdU")){
    crowdUpgrades = parseInt(getCookie("crowdU"))
    document.getElementById("crowd-upgrade-times").innerHTML = crowdUpgrades;
  }
  if (getCookie("crowdUCost")){
    crowdUpgradeCost = parseInt(getCookie("crowdUCost"))
    document.getElementById("crowd-upgrade-cost").innerHTML = crowdUpgradeCost;
  }
  if (getCookie("maxwellU")){
    maxwellUpgrades = parseInt(getCookie("maxwellU"))
    document.getElementById("maxwell-upgrade-times").innerHTML = maxwellUpgrades;
  }
  if (getCookie("maxwellUCost")){
    maxwellUpgradeCost = parseInt(getCookie("maxwellUCost"))
    document.getElementById("maxwell-upgrade-cost").innerHTML = maxwellUpgradeCost;
  }
  if (getCookie("carU")){
    carUpgrades = parseInt(getCookie("carU"))
    document.getElementById("car-upgrade-times").innerHTML = carUpgrades;
  }
  if (getCookie("carUCost")){
    carUpgradeCost = parseInt(getCookie("carUCost"))
    document.getElementById("car-upgrade-cost").innerHTML = carUpgradeCost;
  }
  if (getCookie("busU")){
    busUpgrades = parseInt(getCookie("busU"))
    document.getElementById("bus-upgrade-times").innerHTML = busUpgrades;
  }
  if (getCookie("busUCost")){
    busUpgradeCost = parseInt(getCookie("busUCost"))
    document.getElementById("bus-upgrade-cost").innerHTML = busUpgradeCost;
  }
  if (getCookie("hotelU")){
    hotelUpgrades = parseInt(getCookie("hotelU"))
    document.getElementById("hotel-upgrade-times").innerHTML = hotelUpgrades;
  }
  if (getCookie("hotelUCost")){
    hotelUpgradeCost = parseInt(getCookie("hotelUCost"))
    document.getElementById("hotel-upgrade-cost").innerHTML = hotelUpgradeCost;
  }
});
function save(){
  document.cookie = "rebirths="+rebirths+"; "
  document.cookie = "clicks="+clicks+";"
  document.cookie = "ppc="+ppc+";"
  document.cookie = "perS="+perSec+";"
  document.cookie = "clickU="+clickUpgrades+";"
  document.cookie = "clickUCost="+clickUpgradeCost+";"
  document.cookie = "crowdU="+crowdUpgrades+";"
  document.cookie = "crowdUCost="+crowdUpgradeCost+";"
  document.cookie = "maxwellU="+maxwellUpgrades+";"
  document.cookie = "maxwellUCost="+maxwellUpgradeCost+";"
  document.cookie = "carU="+carUpgrades+";"
  document.cookie = "carUCost="+carUpgradeCost+";"
  document.cookie = "busU="+busUpgrades+";"
  document.cookie = "busUCost="+busUpgradeCost+";"
  document.cookie = "hotelU="+hotelUpgrades+";"
  document.cookie = "hotelUCost="+hotelUpgradeCost+";"
}
window.addEventListener("click", function () {
  if (music == false){
    music = true
    var scary = new Audio("//cdn.crazycontent.net/Off to Osaka.mp3");
    scary.addEventListener("canplaythrough", function () {
      scary.loop = true;
      document.getElementById("sfx").appendChild(scary)
      scary.id = "scawyMusic"
      scary.play();
    });
  }
});
window.addEventListener("onbeforeunload", save());
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function clickupgrade() {
  if (clicks > clickUpgradeCost - 1) {
    clickUpgrades += 1;
    document.getElementById("click-upgrade-times").innerHTML = clickUpgrades;
    var buysfx = new Audio(
      "/buy.mp3"
    );
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - clickUpgradeCost;
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
    document.getElementById("click-upgrade-cost").innerHTML = clickUpgradeCost;
    clicktxt.innerHTML = Math.floor(clicks) + " people";
    ppc = ppc + 1;
    document.getElementById("ppc").innerHTML = ppc + " PPC";
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (clickUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = clickUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
function crowdupgrade() {
  if (clicks > crowdUpgradeCost - 1) {
    if (crowdUpgrades == 4){
      document.getElementById('crowd-upgrade').disabled = true
    }
    crowdUpgrades += 1;
    document.getElementById("crowd-upgrade-times").innerHTML = crowdUpgrades;
    var buysfx = new Audio("/buy");
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - crowdUpgradeCost;
    crowdUpgradeCost = Math.floor(crowdUpgradeCost * 1.5)
    document.getElementById("crowd-upgrade-cost").innerHTML = crowdUpgradeCost
    clicktxt.innerHTML = Math.floor(clicks) + " people"
    perSec = perSec + 10
    document.getElementById("per-sec").innerHTML = Math.floor(perSec) + " PPS"
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (clickUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = crowdUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
function maxwellupgrade() {
  if (clicks > maxwellUpgradeCost - 1) {
    if (maxwellUpgrades == 4){
      document.getElementById('maxwell-cat-upgrade').disabled = true
    }
    maxwellUpgrades += 1;
    document.getElementById("maxwell-upgrade-times").innerHTML = maxwellUpgrades;
    var buysfx = new Audio(
      "/buy.mp3"
    );
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - maxwellUpgradeCost;
    maxwellUpgradeCost = Math.floor(maxwellUpgradeCost * 1.5);
    document.getElementById("maxwell-upgrade-cost").innerHTML = maxwellUpgradeCost;
    clicktxt.innerHTML = Math.floor(clicks) + " people";
    if (ppc == 1){
      ppc = 10;
    } else {
      if (ppc > 1){
        ppc = ppc + 10;
      }
    }
    if (maxwellUpgrades == 1){
      document.getElementById("maxwell-hat").id = "maxwell-hat-active"
      const maxwell = bootstrap.Toast.getOrCreateInstance(
        document.getElementById("maxwell")
      )
      maxwell.show();
    }
    document.getElementById("ppc").innerHTML = Math.floor(ppc) + " PPC";
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (clickUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = maxwellUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
function carupgrade() {
  if (clicks > carUpgradeCost - 1) {
    if (carUpgrades == 4){
      document.getElementById('car-upgrade').disabled = true
    }
    carUpgrades += 1;
    document.getElementById("car-upgrade-times").innerHTML = carUpgrades;
    var buysfx = new Audio("/buy.mp3");
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - carUpgradeCost;
    carUpgradeCost = Math.floor(carUpgradeCost * 1.5)
    document.getElementById("car-upgrade-cost").innerHTML = carUpgradeCost
    clicktxt.innerHTML = Math.floor(clicks) + " people"
    perSec = perSec + 100
    document.getElementById("per-sec").innerHTML = Math.floor(perSec) + " PPS"
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (clickUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = carUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
function busupgrade() {
  if (clicks > busUpgradeCost - 1) {
    ppc += 500;
    var buysfx = new Audio("//cdn.crazycontent.net/buy.mp3");
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - busUpgradeCost;
    clicktxt.innerHTML = Math.floor(clicks) + " people"
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (busUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = busUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
function hotelupgrade() {
  ppc += 1000;
  if (clicks > busUpgradeCost - 1) {
    var buysfx = new Audio("//cdn.crazycontent.net/buy.mp3");
    buysfx.addEventListener("canplaythrough", (event) => {
      buysfx.play();
    });
    clicks = clicks - hotelUpgradeCost;
    clicktxt.innerHTML = Math.floor(clicks) + " people"
  } else {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("cantAfford")
    );
    if (busUpgradeCost - clicks == 1) {
      document.getElementById("alert-end").innerHTML = "more person.";
    } else {
      document.getElementById("alert-end").innerHTML = "more people.";
    }
    document.getElementById("alert-cost").innerHTML = hotelUpgradeCost - clicks;
    toastBootstrap.show();
  }
}
setInterval(function () {
  clicks += perSec;
  clicktxt.innerHTML = Math.floor(clicks) + " people";
}, 1000);
function add() {
  if (clickAnimation == true) {
    document.getElementById("click-img").style.animation = "";
  }
  clicks += ppc * (rebirths+1);
  clicktxt.innerHTML = Math.floor(clicks) + " people";
  clickAnimation = true;
  document.getElementById("click-img").style.animation = "click 0.2s";
  setTimeout(function () {
    clickAnimation = false;
    document.getElementById("click-img").style.animation = "";
  }, 200);
}
$("#click").click(function () {
  add();
});
$("#click-upgrade").click(function () {
  clickupgrade();
});
$("#crowd-upgrade").click(function () {
  crowdupgrade();
});
$("#maxwell-cat-upgrade").click(function () {
  maxwellupgrade();
});
$("#car-upgrade").click(function () {
  carupgrade();
});
$("#bus-upgrade").click(function () {
  busupgrade();
});
$("#hotel-upgrade").click(function () {
  hotelupgrade();
});
window.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (event.code == "Space") {
    add();
  }
});
