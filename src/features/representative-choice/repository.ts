type Representative = {
  name: string;
  email: string;
};

const representatives: Representative[] = [
  {
    name: "Matt",
    email: "aa@gmail.com",
  },
];

export function createRepository(){
 return{
  getAllRepresentatives: async() => {
   return await representatives;
  }
 }
}

export type Repository = ReturnType<typeof createRepository>;