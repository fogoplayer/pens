const img = document.getElementById('img')
var eye = "standard"
//eye can either be standard, towards, or closed
var mouth = "open"
//mouth can either be open or closed

confirm(`Welcome to the Buc-ee's Daddy Animation Station! Use the following keys to create your Buc-ees animation:

A-Turns Buc-ee towards the camera
S-Resets Buc-ee to his normal pose
D-Closes Buc-ee's eyes
J-Opens and closes Buc-ee's mouth

Happy animating! *Nik nik nik nik nik*`);

addEventListener("keydown", e=>{
    switch (e.key) {
    case "a":
        eye = "towards";
        break;

    case "s":
        eye = "standard";
        break;

    case "d":
        eye = "closed";
        break;

    case "j":
    case "k":
        mouth = "open";
        break;

    default:
        console.log(`'` + e.key + `' not registered`);
        break;
    }
    imgURL = eye + mouth + ".jpg";
//     console.log(imgURL);
    img.src = imgURL;
}
);

addEventListener("keyup", e=>{
    if (e.key === "j" || e.key === "k") {
        mouth = "closed";
    }
    imgURL = eye + mouth + ".jpg";
//     console.log(imgURL);
    img.src = imgURL;
}
);
