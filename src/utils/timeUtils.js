export const convertTime = hour => {
    const hours = Number(hour);
    let timeValue;

    if (hours > 0) {
        timeValue= "" + hours;
    } else if (hours > 12) {
        timeValue= "" + (hours - 12);
    } else if (hours == 0) {
        timeValue= "12";
    }

    timeValue += ':00:00'
    timeValue += (hours >= 12) ? " P.M." : " A.M.";

    return timeValue;
}