export type Representative = {
 id: string;
 name: string;
  email: string;
};

const representatives: Representative[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440111",
    name: "Taylor Smith",
    email: "taylor.smith@example.com",
  },
  {
    id: "770e8400-e29b-41d4-a716-446655440222",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
  },
  {
    id: "880e8400-e29b-41d4-a716-446655440333",
    name: "Morgan Brown",
    email: "morgan.brown@example.com",
  },
];

export function createRepository(){
 return {
   async getAllRepresentatives() {
     return await representatives;
   },
   async addRepresentative(representative: Representative) {
     representatives.push(representative);
   },
   async getRepresentativeById(id:string) {
     const representative = representatives.find(
        (representative) => id === representative.id
      );
    
    return await representative!;
   },
 };
}

export type Repository = ReturnType<typeof createRepository>;