const input = document.querySelector('#time-input');
const navigate = (event) => {
    if (event.keyCode === 13) {
        window.location.assign(event.target.value);
    }
}