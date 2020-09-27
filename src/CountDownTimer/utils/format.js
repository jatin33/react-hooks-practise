export default function formatInMMSS(seconds) {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${isSingleDigit(min) ? '0': ''}${min}:${isSingleDigit(secs) ? '0': ''}${secs}`
    
}

function isSingleDigit(number) {
    return number >= 0 && number <= 9;
}