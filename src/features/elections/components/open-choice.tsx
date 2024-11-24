export function OpenChoice({name}: {name:string}){
 return (
   <article className="stats shadow my-8">
     <div className="stat text-center">
       <div className="stat-title">First Choice</div>
       <div className="stat-value">{name}</div>
       <div className="flex justify-center items-center pt-4">
         <button
           className=" btn
           bg-emerald-900
           text-gray-100
           hover:bg-emerald-800
           rounded-lg
           w-20"
         >
           Vote
         </button>
       </div>
     </div>
   </article>
 );
}