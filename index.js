var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    if (buttonInnerHTML === "w") {
      console.log("oley");
    }
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("/drumkit/sounds/tom-1.mp3"); // localde calistirmak istedigimde bastaki /drumkit kismini kaldirmam gerekiyor
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("/drumkit/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("/drumkit/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("/drumkit/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("/drumkit/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("/drumkit/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("/drumkit/sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
