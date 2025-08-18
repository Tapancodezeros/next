import Link from "next/link";
import "../app/globals.css"
export default function Navigation() {
  return(
    <header className="grid grid-cols-2">
      <div>next's first web</div>
      <nav>
        <ul className="flex gap-4 font-bold  ">
          <li className="underline bg-blue-400 rounded">
            <Link href="/">Home</Link>
          </li>
           <li className=" underline bg-blue-400 rounded">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="underline bg-blue-400 rounded">
            <Link href="/Services">Services</Link>
          </li>
          <li className="underline bg-blue-400 rounded">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}