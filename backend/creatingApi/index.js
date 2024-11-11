const dbConnect = require('./mogoDb');

async function main() {
    try {
        let data = await dbConnect();
        const result = await data.find({}).toArray();
        console.log(result);  // Display the data in the console
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

main();
