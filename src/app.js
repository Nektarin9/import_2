import {setLS, getLS} from "./LocalStorage"


export function hide_container() {
    const btn = document.querySelector(".cookie-consent__button")
    const container = document.querySelector(".cookie-consent")
    btn.addEventListener("click", event => {
        container.remove()
        setLS(1)
    })
    hide_container_LS(container)
}


function hide_container_LS(container) {
    if (getLS()) {
        container.remove()
    }
}