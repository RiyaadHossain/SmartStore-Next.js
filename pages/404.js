import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [router])

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Going back to the <Link href="/">Homepage</Link> is 3 seconds...</p>
        </div>
    )
}
