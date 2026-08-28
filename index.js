import {createIcons, CircleArrowLeft, CircleArrowRight} from 'lucide';

createIcons({
    icons: {
        CircleArrowLeft, CircleArrowRight
    }
});

const year = new Date().getFullYear();
const copyright = "100% Handmade material - original creations only - João Vitor Hobus " + year + " - Copyright - All rights reserved";

const header = document.createElement("header")
const main = document.querySelector("main");
const footer = document.createElement("footer");

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

let carrousel = document.querySelector(".carrousel");

