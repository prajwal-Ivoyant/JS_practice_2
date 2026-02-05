const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500 + 500)
        setTimeout(() => {
            if (true) {
                resolve(`Fake data from ${url}`);
            } else {
                reject(`rejected`)
            }
        }, delay);
    });
};


async function makeRequest() {
    try {
        const data1 = await fakeRequest('/page1');
        console.log(data1)
        const data2 = await fakeRequest('/page2');
        console.log(data2)
        const data3 = await fakeRequest('/page3')
        console.log(data3)
        const data4 = await fakeRequest('/page4')
        console.log(data4)
    } catch (e) {
        console.log(e)
    }
}

makeRequest()