export type Representative = {
  id: string;
  name: string;
  email: string;
  publicVotes: number;
};

const representatives: Representative[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    publicVotes: 10,
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440111",
    name: "Taylor Smith",
    email: "taylor.smith@example.com",
    publicVotes: 5,
  },
  {
    id: "770e8400-e29b-41d4-a716-446655440222",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    publicVotes: 23,
  },
  {
    id: "880e8400-e29b-41d4-a716-446655440333",
    name: "Morgan Brown",
    email: "morgan.brown@example.com",
    publicVotes: 8,
  },
];

const publicUser = {
  id: "a3c6f123-4e4a-42b5-80d9-e6b0cd7f5a4f",
  repId: "880e8400-e29b-41d4-a716-446655440333",
};

export function createRepository() {
  return {
    async getAllRepresentatives() {
      return await representatives;
    },
    async addRepresentative(representative: Representative) {
      representatives.push(representative);
    },
    async getRepresentativeById(id: string) {
      const representative = representatives.find(
        (representative) => id === representative.id
      );
      return await representative!;
    },
    async changeRepIdForPublicUser(newRepId: string) {
      publicUser.repId = newRepId;
    },
    async getPublicUserRepId() {
      return publicUser.repId;
    },
    async changePublicVotes(id:string, newPublicVotes:number) {
     const representative = representatives.find(
       (representative) => id === representative.id
     );
     representative!.publicVotes = newPublicVotes;
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
