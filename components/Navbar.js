import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </ul>
        </div>
    )
}
