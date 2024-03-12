import React from 'react'
import { Link } from 'react-router-dom'

function SingleProduct({product}) {
    const url='products'+product.id;
    return (
        <li >
            <figure>
                <Link to={url}>
                    <img src={'/parapharma_images/productTest.jpg'} alt={product.title} />
                </Link>
                <figcaption>
                    <main>
                        <p className="small">{product.name}</p>
                        <h3>
                            {product.current_price}, <em>{product.original_price}</em>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate inventor</p>
                    </main>

                    <footer>
                        <div>
                            <p className="small">discount</p>
                            <p className="price">{product.discount}</p>
                        </div>

                        <img
                            src="icons/icon-arrow-right-color.svg"
                            alt="Icon"
                        />
                    </footer>
                </figcaption>
            </figure>
        </li>
    )
}

export default SingleProduct
