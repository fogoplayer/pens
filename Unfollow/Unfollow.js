(function massUnfollow() {
    try {
        window.asdfjkl = setInterval(()=>{
            Array.from(document.getElementsByClassName("_5u3n")).forEach(e=>{
                e.click();
                e.parentNode.remove();
            }
            );
        }
        , 2000);
    } catch (e) {
        clearInterval(window.asdfjkl);
        console.error(e);
    }
}
)();

(function musicLibraryTimer() {
    let timeout = setTimeout(()=>{
        document.querySelector("#lds-player-interface > ul.jp-controls > li:nth-child(2) > a").click();
        clearInterval(interval)
    }
    , 61000)
    let i = 60
    let interval = setInterval(()=>{
        console.clear();
        console.log(i--)
    }
    , 1000);
}
)()
