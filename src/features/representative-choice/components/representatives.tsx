import { representativeService } from "../instance";

export async function Representatives() {
 const representatives =  await representativeService.getAllRepresentatives()
 
 return (
   <section>
     <p>{representatives[0].name}</p>
   </section>
 );
}
