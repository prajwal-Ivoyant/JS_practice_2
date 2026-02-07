// Real-World Scenarios

// Type a simple API client with different endpoint responses

/////////////////////////////////////////////////////////////////////

interface job {
    id: number;
    todo: string;
    completed: boolean,
    userId: number;
}

interface apiEdpoints {
    '/todos': job[];
    '/todos/random': job;
    '/todos/user/5': job;
}

async function getDataApi<T extends keyof apiEdpoints>(endpoint: T) {
    const res = await fetch(`https://dummyjson.com${endpoint}`)
    const data = await res.json()
    console.log(data);
}

getDataApi('/todos/random')
getDataApi('/todos/random')
getDataApi('/todos/user/5')

///////////////////////////////////////////////////////////////////////////