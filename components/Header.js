import Head from 'next/head'
import React from 'react'

export default function Header({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content="products" />
        </Head>
    )
}
