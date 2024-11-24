import Link from "next/link";
import { Representative as Rep } from "../repository";

type Props = {
  representatives: Rep[];
  publicUserRepId: string;
};

export function Representative({ representatives, publicUserRepId }: Props) {
  return (
    <>
      <tbody>
        {representatives.map((representative, index) => (
          <tr key={representative.id} className={
              publicUserRepId === representative.id
                ? "bg-green-100 py-4" 
                : "py-4"}>
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
        ))}
      </tbody>
    </>
  );
}
