export function RepVotingStats(){
 return (
   <section>
     <h2 className="text-2xl font-bold mt-4">Representatives Statistics</h2>
     <div className="overflow-x-auto">
       <table className="table">
         <thead>
           <tr>
             <th></th>
             <th>Name</th>
             <th>Public Votes</th>
             <th>Choice</th>
             <th>Agreement Rate</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th>1</th>
             <td>Taylor Smith</td>
             <td>20</td>
             <td>Yes</td>
             <td>60%</td>
           </tr>
         </tbody>
       </table>
     </div>
   </section>
 );
}