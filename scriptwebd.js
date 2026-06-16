const sb = document.getElementById("playerSearch");

sb.addEventListener("keyup", function () {

    const cds = document.querySelectorAll(".player-card");
    const txt = sb.value.toLowerCase();

    cds.forEach(function(cd) {

        const name = cd.querySelector("h3").textContent.toLowerCase();

        if (name.includes(txt)) {
            cd.style.display = "";
        } else {
            cd.style.display = "none";
        }

    });

});