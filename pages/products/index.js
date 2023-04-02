import styles from '../../styles/Product.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    return {
        props: { products: data.products }
    }
}

export default function Product({ products }) {
    return (
        <>
            <div>Product</div>
            {
                products.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`} className={styles.single}>
                        <h1>{product.title}</h1>
                    </Link>
                ))
            }
        </>
    )
}
