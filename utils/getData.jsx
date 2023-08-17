// const baseURL = 'https://jsonplaceholder.typicode.com'
// export async function getData(query) {
//     const res = await fetch(`${baseURL}${query}`, {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         cache: 'force-cache',
//     })
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }
