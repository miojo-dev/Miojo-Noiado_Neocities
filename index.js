const year = new Date().getFullYear();
const copyright = "100% Handmade material - original creations only - João Vitor Hobus " + year + " - Copyright - All rights reserved";
const playlist_Catalog = [
    "https://open.spotify.com/embed/playlist/74s4ZUJqpI9kdQ5QwnIfsJ?utm_source=generator&si=12b863a7540e4187",
    "https://open.spotify.com/embed/playlist/1h4wSA4krYn4JnHd3H1Nmy?utm_source=generator&si=d6a826a1acac425f",
    "https://open.spotify.com/embed/playlist/6elAVbJkQ2EADu3ilWCOdK?utm_source=generator&si=846d7f54978a4614",
    "https://open.spotify.com/embed/playlist/7g3VB9m0LLdTbiLW6Ois3R?utm_source=generator&si=34b99495b7f34e09",
    "https://open.spotify.com/embed/playlist/5D7l97n8apmZ0Amx82gMM0?utm_source=generator&si=9772ebae46fe4b86",
    "https://open.spotify.com/embed/playlist/4LhBVK4zqeMhTY01AQTDtL?utm_source=generator&si=7113254b0ae6489f"
];

const header = document.createElement("header");
const main = document.querySelector("main");
const footer = document.createElement("footer");

lucide.createIcons();

header.innerHTML = `
    <header>
        <div>
            <h1 class="title_wrapper">Underground pool</h1><span class="cursor">&nbsp;</span>
        </div>
    </header>
`;

footer.innerText = copyright;

if (!document.querySelector("header")) {
    main.before(header);
}
main.after(footer);

ChangeIframeSrc("playlist-iframe", playlist_Catalog[0]);

let carrousel = document.querySelector(".carrousel");
let carrousel_Numbering = document.querySelector(".carrousel-numbering");

carrousel_Numbering.innerText = playlist_Catalog.length;

function CarrouselHandler(direction) {
    let current = document.getElementById("current-item").innerText;

    if (direction === "prev" && current > 1) {
        current--;
        document.getElementsByTagName("prev").disabled = current <= 1;
    } else if (direction === "next" && current < playlist_Catalog.length) {
        current++;
        document.getElementsByTagName("next").disabled = current >= playlist_Catalog.length;
    }

    if (current !== document.getElementById("current-item").innerText  )
    {
        document.getElementById("current-item").innerText = current;
        ChangeIframeSrc("playlist-iframe", playlist_Catalog[current - 1]);
    }
}

function ChangeIframeSrc(id, url) {
    if (document.getElementById(id)) {
        document.getElementById(id).src = url;
    }
}