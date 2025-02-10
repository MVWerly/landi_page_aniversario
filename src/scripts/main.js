AOS.init();

const eventDate = new Date('Feb 23, 2025');
const timeStampEventDate = eventDate.getTime();

const countdownEvent = setInterval(function(){
    const presentDate = new Date();
    const timeStampPresentDate = presentDate.getTime();

    const timeStampToEvent = timeStampEventDate - timeStampPresentDate;

    const daysMs = (1000 * 60 * 60 * 24);
    const hoursMS = (1000 * 60 * 60);
    const minutesMs = (1000 * 60);

    const daysToEvent = Math.floor(timeStampToEvent / daysMs);
    const hoursToEvent = Math.floor((timeStampToEvent % daysMs) / hoursMS);
    const minutesToEvent = Math.floor((timeStampToEvent % hoursMS) / minutesMs);
    const secondsToEvent = Math.floor((timeStampToEvent % minutesMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysToEvent}D ${minutesToEvent}M ${secondsToEvent}S`

    if (timeStampToEvent < 0) {
        clearInterval(countdownEvent);

        document.getElementById('counter').innerHTML = "Happy Birthday!!!";
    }
}, 1000);