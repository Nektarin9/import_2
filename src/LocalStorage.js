

export function setLS(statusBtn) {
    localStorage.setItem("status", statusBtn)
}

export function getLS() {
    return localStorage.getItem("status")
}
