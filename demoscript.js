// DEMO VERSION OF PEOPLE CLICKER //
//           BUY NOW              //
// DEMO VERSION OF PEOPLE CLICKER //

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
function load(){
  alert("LOADING UNAVAILABLE IN DEMO.")
}
function save(){
  alert("SAVING UNAVAILABLE IN DEMO.")
}
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
  alert("Demo Finished Redirecting to Product Key!")
  window.location.href = "/productkey.html"
});
window.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (event.code == "Space") {
    add();
  }
});
