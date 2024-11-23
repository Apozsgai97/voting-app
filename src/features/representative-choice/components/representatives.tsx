import { representativeFeature } from "../instance";

export async function Representatives() {
 const representatives =  await representativeFeature.service.getAllRepresentatives()
 
 return (
   <section className="flex flex-col justify-center mt-6 w-full lg:w-3/6">
     <div className="lg:overflow-x-auto">
       <table className="table">
         <thead>
           <tr>
             <th></th>
             <th>Name</th>
           </tr>
         </thead>
         {representatives.map((representative, index) => (
           <tbody key={index}>
             <tr className="py-4">
               <th>{index + 1}</th>
               <td>{representative.name}</td>
               <td><button className="btn bg-emerald-950 text-gray-100 hover:bg-emerald-900">
                 Read more
               </button></td>
             </tr>
           </tbody>
         ))}
       </table>
     </div>
   </section>
 );
}
