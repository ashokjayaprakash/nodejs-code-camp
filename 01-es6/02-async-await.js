/*
Callback Approach
*/
function getUserDetails(id, callback) {
    // Timeout 
    // DB Interaction
    setTimeout(() => {

        if(id % 2 == 0) {
            callback(new Error("User Not Found"))
        } else {
            callback(null, { id: 1, user: `ART-${id}`})
        }

        
    }, 2000)

}

function getUserDetailsPromisisifed(id) {
    return new Promise((resolve, reject) => {
        getUserDetails(id, (err, data) => {
            if(err){
                // Incase of error, reject the promise
                return reject(err)
            } 
            // Success case return data
            return resolve(data)
        })
    })
}

async function getUserDetailsAsync() {
    try {
        const result1 = await getUserDetailsPromisisifed(1);    
        console.log(result1);
        const result2 = await getUserDetailsPromisisifed(2);    
        console.log(result2);        
    } catch (error) {
        console.log(error)
    }
}

// Sequencical operation
// getUserDetailsPromisisifed(1)
//     .then((data) => {
//         console.log("Seq 1", data)
//         // Nested Promise 
//         getUserDetailsPromisisifed(3)
//             .then((data) => { // Resolve
//                 console.log(data)
//             })
//             .catch((err)=> { // Reject
//                 console.log("Seq 2", data)
//             })
//     })
//     .catch((err)=> {
//         console.log(`1: ${err}` )
//     })



(async ()=> {
    await getUserDetailsAsync()
})()