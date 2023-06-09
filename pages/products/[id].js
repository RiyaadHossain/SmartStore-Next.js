/* eslint-disable @next/next/no-img-element */
import Header from '../../components/Header'
import styles from '../../styles/Product.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    const paths = data.products.map(product => (
        { params: { id: product.id.toString() } }
    ))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()

    return {
        props: { product: data }
    }
}

export default function Details({ product }) {
    return (
        <div className={styles.container}>
            <Header title={`Smart Shop | ${product.title}`} />
            <img src={`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`} alt={product.name} className={styles.imgContainer} />
            <div className={styles.product_container}>
                <h1>{product.title}</h1>
                <p className={styles.price}>{product.price}tk</p>
            </div>
            <span className={styles.brand}>{product.brand}</span>
            <p>{product.description}</p>
        </div>
    )
}
