import Link from "next/link";
import { Representative  as Rep} from "../repository";

type Props = {
 representatives: Rep[]
}

export function Representative({representatives}: Props){
 return (
   <>
     {representatives.map((representative, index) => (
       <tbody key={index}>
         <tr className="py-4">
           <th>{index + 1}</th>
           <td>{representative.name}</td>
           <td>
             <Link
               href={`/representatives/${representative.id}`}
               className="btn bg-emerald-900 text-gray-100 hover:bg-emerald-800 px-4 py-2 rounded-lg"
             >
               Read more
             </Link>
           </td>
         </tr>
       </tbody>
     ))}
   </>
 );
}