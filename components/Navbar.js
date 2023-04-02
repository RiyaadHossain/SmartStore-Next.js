import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo1.png" alt="site logo" width={118} height={67} style={{ objectFit: 'cover' }} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
        </nav>
    );
}

export default Navbar;