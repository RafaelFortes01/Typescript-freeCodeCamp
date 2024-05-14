function addTwo(num:number): number {
   return num + 2
   //return 'hello'
}

function getUpper(val:string) {
   return val.toUpperCase()
}

function signUpUser(name:string, email:string, isPaid: boolean) {}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}

let myValue = addTwo(5)
getUpper('rafael')

signUpUser('Rafael', 'rafael@123', true)
loginUser('Pedro', 'pedro@123')

// function getValue(myVal: number): string {
//    if (myVal > 5) {
//       return true
//    } else {
//       return '200 ok'
//    }
// } 

const getHello = (s: string): string => {
   return ''
}

const heros = ['Thor', 'Spiderman', 'Ironman']
// const heros = [1, 2, 3]

heros.map((hero): string => {
   return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
   console.log(errmsg)
}

function handleError(errmsg: string): never {
   throw new Error(errmsg)
}





export{}