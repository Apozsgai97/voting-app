
type Representative = {
 name: string ,
 email: string,
}
const db:Representative[] = [{
 name: "Matt",
 email: "aa@gmail.com"
}];

export function createService(){
 return{
  async getAllRepresentatives(){
   const representatives = db
   return representatives
  }
 }
}