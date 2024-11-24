type Props={
 choice:{
  name:string,
  votes:number,
  result: string,
 }
}

export function ChoiceStat({choice}: Props){
 return (
   <article className="stats shadow my-8">
     <div className="stat text-center">
       <div className="stat-title">First Choice</div>
       <div className="stat-value">{choice.name}</div>
       <div className="stat-title">Votes</div>
       <div className="stat-value">{choice.votes}</div>
       <div className="stat-title">Result</div>
       <div className="stat-value">{choice.result}</div>
     </div>
   </article>
 );
}