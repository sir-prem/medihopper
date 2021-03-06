// if bool flag is true, then use date from existing message's create time
// else if bool flag is false, for a newly emitted message, use current 
// time/date (now) as the message hasn't yet been saved to database
function getDateTimeString(dateObject, bool) {
    var msgDate;
    if (bool) {
        msgDate = new Date(dateObject);
    } else {
        msgDate = new Date(); // initialise to Now
    }
    var day     = msgDate.getDate();
    var month   = msgDate.getMonth()+1;
    var year    = msgDate.getFullYear();
    var hrs     = msgDate.getHours();
    var mins    = msgDate.getMinutes();
    var secs    = msgDate.getSeconds();

    return `${day}/${month}/${year} @ <b>${hrs}:${mins}</b>`;
}

// A template for chat messages. Updates the Html element.
function displayMessageString(dateObject, bool, message) {
    var dateTimeString = getDateTimeString(dateObject, bool);
        outputStr = 
                `<p>${dateTimeString}
                <span class="msg-name"><b>[ ${message.fromUsername} ]</b></span> said to 
                <span class="msg-name"><b>[ ${message.toUsername} ]</b></span>: <br />
                    ${message.content}</p>`;
        return outputStr;
}

module.exports = {
    displayMessageString
}