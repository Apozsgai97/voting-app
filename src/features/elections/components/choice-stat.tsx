type Props = {
  name: string;
  votes: number | null ;
  result: string;
};

export function ChoiceStat({ name, votes, result }: Props) {
  return (
    <article className="stats shadow my-8">
      <div className="stat text-center">
        <div className="stat-title">First Choice</div>
        <div className="stat-value">{name}</div>
        <div className="stat-title">Votes</div>
        <div className="stat-value">{votes}</div>
        <div className="stat-title">Result</div>
        <div className="stat-value">{result}</div>
      </div>
    </article>
  );
}
