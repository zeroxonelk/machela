import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/users">Users</Link>
            <Link href="/users/land">Landsnn</Link>
            <h1>Hello</h1>
        </main>
    )
}
