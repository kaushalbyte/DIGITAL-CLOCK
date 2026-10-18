const clock = document.getElementById('clock');
const period = document.getElementById('period');
const dateText = document.getElementById('date');
const formatButton = document.getElementById('format-button');
const secondsButton = document.getElementById('seconds-button');

let is24Hour = false;
let showSeconds = true;

function updateClock() {
    const now = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: !is24Hour
    };

    if (showSeconds) {
        timeOptions.second = '2-digit';
    }

    clock.textContent = now.toLocaleTimeString('en-US', timeOptions).replace(/\s?(AM|PM)$/, '');
    period.textContent = is24Hour ? '' : now.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).split(' ').pop();
    dateText.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

formatButton.addEventListener('click', function () {
    is24Hour = !is24Hour;
    formatButton.setAttribute('aria-pressed', String(is24Hour));
    updateClock();
});

secondsButton.addEventListener('click', function () {
    showSeconds = !showSeconds;
    secondsButton.setAttribute('aria-pressed', String(showSeconds));
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);
