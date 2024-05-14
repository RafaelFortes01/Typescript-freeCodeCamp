// const user = {
//    name: 'Rafael',
//    email: 'rafael@123',
//    isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {
   
// }

// let newUser = {name: 'Rafael', isPaid: false, email: 'rafael@123'}

// createUser(newUser)


// function createCourse():{name: string, price: number}{
//    return {name: 'reactjs', price: 399}
// }

// type User = {
//    name: string
//    email: string
//    isActive: boolean
// }


// function createUser(user: User): User {
//    return {name: '', email: '', isActive: true}
// }

// createUser({name: '', email: '', isActive: true})

type User = {
   readonly _id: string
   name: string
   email: string
   isActive: boolean
   creditCardDetails?: number 
}

let myUser: User = {
   _id: '12345',
   name: 'Rafael',
   email: 'rafael@123',
   isActive: false
}

myUser.email = 'rafael@gmail.com'
// myUser._id = '321'


export{}