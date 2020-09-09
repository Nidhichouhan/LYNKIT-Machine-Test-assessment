
let A = new Promise((resolve, reject) => {
    if (true) {
        resolve('OK')
    }
});

let B = new Promise((resolve, reject) => {
    if (true) {
        resolve('OK')
    }
});

let C = new Promise((resolve, reject) => {
    if (true) {
        resolve('OK')
    }
});
var result = 'OK'
function main() {
    Promise.all([A, B, C]).then((result) => {
        let D = new Promise((resolve, reject) => {
            if (result == 'OK') {
                return resolve('OK')
            } else {
                return D.then(result)
            }
        })

    }).then((result) => {
        return new Promise((resolve, reject) => {
            if (result == 'OK') {
                resolve('OK')
            }
        })
    })
}