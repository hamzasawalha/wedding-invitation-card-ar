function updateTimer() {
    future  = Date.parse("oct 7, 2023 20:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
function openCard(){
    const card = document.querySelector('.card .cover');
    if (window.innerWidth <= 768) {
        card.style.transform = 'skewY(90deg)';
    } else {
        card.style.transform = 'rotateY(-180deg)';
    }
}
function playSound(){
    window.addEventListener("click", event => {
        const audio = document.querySelector("audio");
        audio.volume = 0.2;
        audio.play();
    });
}
    playSound();
    updateTimer();
    setTimeout(function(){
    openCard();

    },4000);
  setInterval('updateTimer()', 1000 );
