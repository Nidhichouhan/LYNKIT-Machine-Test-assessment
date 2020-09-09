
let url = 'https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD';
let url1 = 'https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history';
let url2 = 'https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD';
let url3 = 'https://api.github.com/users/mralexgray/repos';

const get_data = async url => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
get_data(url)
const get_data1 = async url1 => {
    try {
        const response = await fetch(url1)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
get_data1(url1)
const get_data2 = async url2 => {
    try {
        const response = await fetch(url2)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
get_data2(url2)
const get_data3 = async url3 => {
    try {
        const response = await fetch(url3)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
get_data3(url3)
