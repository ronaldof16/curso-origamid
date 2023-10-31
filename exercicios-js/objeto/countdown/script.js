import Countdown from "./countdown.js"

const tempoParaONatal = new Countdown("24 December 2023 23:59:59")

setInterval(() => {
    console.log(tempoParaONatal.total)
}, 1000)

