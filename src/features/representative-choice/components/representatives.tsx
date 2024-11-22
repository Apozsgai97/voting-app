import { representativeFeature } from "../instance";

export async function Representatives() {
 const representatives =  await representativeFeature.service.getAllRepresentatives()
 
 return (
   <section>
     <p>{representatives[0].email}</p>
   </section>
 );
}
