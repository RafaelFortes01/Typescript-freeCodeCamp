interface User {
   readonly dbId: number,
   email: string,
   userId: number,
   googleId?: string
   // startTrail: () => string
   startTrail(): string
   getCoupon(couponName:string, value: number): number
}

interface User {
   githubToken: string
}

interface Admin extends User{
   role: 'admin' | 'ta' | 'learner'
}

const rafael: Admin = {dbId: 22, email:'rafael@123', userId:123, githubToken: 'github', role: 'admin',
   startTrail: () => {
      return 'trail started'
   },
   getCoupon: (name: 'Rafael10', off: 10) => {
      return 10
   }
}

rafael.email = 'rf@gmail.com'
// rafael.dbId = 21

export{}