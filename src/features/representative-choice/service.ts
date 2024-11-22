import { Repository } from "./repository";

export function createService(repository:Repository){
 return{
  async getAllRepresentatives(){
   return await repository.getAllRepresentatives();
  }
 }
}