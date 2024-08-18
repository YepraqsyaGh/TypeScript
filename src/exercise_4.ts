//  Asynchronous Functions and Promises

// Task 1
async function getUser(url: string): Promise<object> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
}

getUser("https://mocki.io/v1/d79c58a5-867b-4543-b0b3-ce6d2d0c9240")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching API data:", error);
    });