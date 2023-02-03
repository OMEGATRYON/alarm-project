
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function myCallback(time)
{
    console.log(time);
};

const intID = setInterval(myCallback, 1000, time);

