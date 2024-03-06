const div = document.createElement("div")

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(resp => resp.json())
//     .then(respJSON => {
//         console.log(respJSON) 
//         console.log(respJSON.results[0].name, respJSON.results[0].url)

//         for (let i = 0 ; i < 10 ;  i++) {
//             fetch(respJSON.results[i].url)
//                 .then(resp => resp.json())
//                 .then(respJSON => {
//                     console.log('pokemon individual: ', respJSON)
//                     console.log('image: ', respJSON.sprites.front_default)
//                     const img = document.createElement("img")
//                     const name = document.createElement('p')
//                     name.innerHTML = respJSON.name
//                     img.src = respJSON.sprites.front_default
//                     div.appendChild(img)
//                     div.appendChild(name)
//                     document.querySelector('body').appendChild(div)
//                 })
//         }
//     })
//     .catch(error =>{
//         console.log(error)
//     })
//     .finally(console.log('petición acabada'))

// EJERCICIO 1.1

// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//       for (let i = 0; i < 5; i++) {
//           fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
//           .then(response => response.json())
//           .then(json => {
//                 console.log(json);
//                 const name = document.createElement('p')
//                 name.innerHTML = json.name
//                 div.appendChild(name)
//                 const id = document.createElement('p')
//                 id.innerHTML = json.id
//                 div.appendChild(id)
//                 const email = document.createElement('p')
//                 email.innerHTML = json.email
//                 div.appendChild(email)
//                 document.querySelector('body').appendChild(div)  
//             } )
            
//         }
//       } 
// )

//Sesion 17

const url = '//pokeapi.co/api/v2/pokemon/'
// 
// console.log(inicio);
// fetch(`${url}1`)
//   .then(resp => resp.json())
//   .then(respJSON => {
//     console.log('1',respJSON.name) 
//     fetch(`${url}2`)
//       .then(resp => resp.json())
//       .then(respJSON => {
//         console.log('2',respJSON.name)
//         fetch(`${url}3`)
//           .then(resp => resp.json())
//           .then(respJSON => {
//             console.log('3',respJSON.name)
//             fetch(`${url}4`)
//               .then(resp => resp.json())
//               .then(respJSON => {
//                 console.log('4',respJSON.name)
//                 fetch(`${url}5`)
//                   .then(resp => resp.json())
//                   .then(respJSON => {
//                     console.log('5',respJSON.name)
//                     
//                   })
//               })
//           })
//       })
//   })
const inicio = new Date().getTime()
async function pokemons(){
  try {
    const res1 = await fetch(`${url}1`)
    const res1J = await res1.json()
    console.log(res1J.name);
  } catch (error) {
    console.log(error);
  }
  try {
    const res2 = await fetch(`${url}2`)
    const res2J = await res2.json()
    console.log(res2J.name);
  } catch (error) {
    console.log(error);

  }
  try {
    const res3 = await fetch(`${url}3`)
    const res3J = await res3.json()
    console.log(res3J.name);
  } catch (error) {
    console.log(error);

  }
  try {
    const res4 = await fetch(`${url}4`)
    const res4J = await res4.json()
    console.log(res4J.name);
  } catch (error) {
    console.log(error);

  }
  try {
    const res5 = await fetch(`${url}5`)
    const res5J = await res5.json()
    console.log(res5J.name);
  } catch (error) {
    console.log(error);

  }
   const final = new Date().getTime()
    console.log(final);
    const tiempoTranscurrido = final - inicio
    console.log(tiempoTranscurrido);
}

pokemons()





