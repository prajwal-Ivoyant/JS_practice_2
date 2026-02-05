const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500 + 500)
        setTimeout(() => {
            if (delay < 4900) {
                resolve(`Fake data from ${url}`);
            } else {
                reject(`rejected`)
            }
        }, delay);
    });
};


fakeRequest("prjwal/ivoyant/page1")
    .then(() => {
        console.log("page1")
        return fakeRequest("prjwal/ivoyant/page2")
    })
    .then(() => {
        console.log("page2")
        return fakeRequest("prjwal/ivoyant/page3")
    }).then(() => {
        console.log("page3")
        return fakeRequest("prjwal/ivoyant/page4")
    }).then(() => {
        console.log("page4")
        return fakeRequest("prjwal/ivoyant/page5")
    }).then(() => {
        console.log("page5")
    })
    .catch((err) => {
        console.log(err)
    })