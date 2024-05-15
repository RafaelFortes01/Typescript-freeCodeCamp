interface User {
   readonly dbId: number,
   email: string,
   userId: number,
   googleId?: string
   // startTrail: () => string
   startTrail(): string
   getCoupon(couponName:string, value: number): number
}

const rafael: User = {dbId: 22, email:'rafael@123', userId:123,
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