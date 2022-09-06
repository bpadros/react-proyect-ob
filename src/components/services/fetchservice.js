export const getAllUsers = async () =>{

   
    let response = await fetch('https:///reqres.in/api/users')
    console.log(response.status)
    console.log(response)
    console.log('ok?' , response.ok)
    // we return the JSON 
    return response.json()
 }


 export const getAllPagedUsers = async (page) =>{

let response = await fetch(`https:///reqres.in/api/users?page=${page}`)
console.log(response.status)
console.log(response)
console.log('ok?' , response.ok)
// we return the JSON 
return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https:///reqres.in/api/users/${id}`)
    console.log(response.status)
    console.log(response)
    console.log('ok?' , response.ok)
    // we return the JSON 
    return response.json()
}

export const login = async (email,password) => {

let body = {
    //email:email
    email: email,
    password: password
}

let response = await fetch('https://reqres.in/api/login',{
    method: 'POST',
    // mode:'no-cors',
    // credentials:"omit",
    // cache:'no-cache',
    // headers:{
    //     'Content-type' : 'aplication/json'
    // },
    body: JSON.stringify(body),

})

console.log(response.status)
console.log(response)
console.log('ok?' , response.ok)
return response.json()



}