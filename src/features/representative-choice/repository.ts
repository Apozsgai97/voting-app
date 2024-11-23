export type Representative = {
  name: string;
  email: string;
};

const representatives: Representative[] = [
  { name: "Alex Johnson", email: "alex.johnson@example.com" },
  { name: "Taylor Smith", email: "taylor.smith@example.com" },
  { name: "Jordan Lee", email: "jordan.lee@example.com" },
  { name: "Morgan Brown", email: "morgan.brown@example.com" },
];

export function createRepository(){
 return{
  async getAllRepresentatives(){
   return await representatives;
  },
  async addRepresentative(representative: Representative){
   representatives.push(representative)
  }
 }
}

export type Repository = ReturnType<typeof createRepository>;