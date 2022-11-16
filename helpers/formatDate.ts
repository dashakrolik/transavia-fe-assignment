export const formatDate = (date?: string | Date, showTime?: boolean) => {
    // && checks because date could be undefined (if we were to get it from an API, but
    // have not done a mock API call to test so if this were to be a real time application
    // might have to rewrite this code and where it is used)
    const flightDate = date && new Date(date);

    const year = flightDate && flightDate.getFullYear();
    const month = flightDate && flightDate.getMonth() + 1;
    const day = flightDate && flightDate.getDate();
    const time = flightDate && flightDate.getHours() + ':' + flightDate.getMinutes();
    console.log(time)
    const formattedDate = showTime ? [year, month, day].join('/') + ' ' + time : [year, month, day].join('/');
    return formattedDate;
}