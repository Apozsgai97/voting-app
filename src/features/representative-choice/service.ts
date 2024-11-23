import { Repository, Representative } from "./repository";

export function createService(repository:Repository){
 return{
  async getAllRepresentatives(){
   return await repository.getAllRepresentatives();
  },
  async addRepresentative(name: string, email:string){
   const representative: Representative = {
    name: name,
    email: email,
   }
   repository.addRepresentative(representative);
  }
 }
}