import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link className="text-lg p-1 font-bold" href=".">
          Voting App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="px-2">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">Elections</Link>
          </li>
          <li>
            <Link href="\representatives\">Representatives</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
