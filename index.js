var r = document.querySelector(':root');
function changeScr() {

    if (document.getElementById("imgid").src = "images/logo1.jpg")
    {
        document.getElementById("imgid").src = "images/logo2.jpg";
        const myHeader = document.getElementById("myHeader");
        myHeader.style.backgroundColor = "black";

        const mynav = document.getElementById("mynav");
        mynav.style.backgroundColor = "gray";

        const mynav2 = document.getElementById("topo");
        mynav2.style.backgroundColor = "gray";

}
}

function changeScr2() {

    if (document.getElementById("imgid").src = "images/logo2.jpg")
    {
        document.getElementById("imgid").src = "images/logo1.jpg"
        const myHeader = document.getElementById("myHeader");
        myHeader.style.backgroundColor = "rgb(0,104,73)";

        const mynav2 = document.getElementById("topo");
        mynav2.style.backgroundColor = "rgb(63,172,87)";

        const mynav = document.getElementById("mynav");
        mynav.style.backgroundColor = "rgb(63,172,87)";
}
}
