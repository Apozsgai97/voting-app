import { representativeFeature } from "../instance";

export async function Representatives() {
 const representatives =  await representativeFeature.service.getAllRepresentatives()
 
 return (
   <section>
     {representatives.map((representative, index) => (
       <div key={index}>
         <p>{representative.name}</p>
         <button>Read more</button>
       </div>
     ))}
   </section>
 );
}
