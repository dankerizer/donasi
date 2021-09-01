import axios from "axios"

const fetchGoogleSheets = async spreadsheetId => {

    return fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
        .then(res => res.text())
        .then(text => {
            return JSON.parse(text.substr(47).slice(0, -2))
        })
}

export { fetchGoogleSheets }