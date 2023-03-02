const api = async (id, idEmail) => {
    const result = document.getElementById(id)
    result.innerText = 'Loding...'
    const email = document.getElementById(idEmail).value;
    const url = `https://api.my-addr.com/email/api.php?secret=F62AA8928ECDB5622E9E038B178E0802&email=${email}`
    fetch(url)
        .then(res => res.text())
        .then(response => resultAdd(response, id))
}

const resultAdd = (response, id) => {
    const result = document.getElementById(id)
    result.innerText = `${response}`
}

document.querySelector('#email-1').addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        api('result-1', 'email-1')
    }
});
document.querySelector('#email-2').addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        api('result-2', 'email-2')
    }
});