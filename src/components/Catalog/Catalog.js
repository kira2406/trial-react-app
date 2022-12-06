import React, { useEffect, useState } from 'react'
import "./catalog.css"
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Catalog() {

    const [categories, setCategories] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [products, setProducts] = useState([])

    const fetchCategoryList = () => {
        axios.get("https://dummyjson.com/products/categories")
            .then(response => setCategories(response.data))
    }

    const getProductByCategory = (categoryName) => {
        console.log("KP category", categoryName)
        axios.get(`https://dummyjson.com/products/category/${categoryName}`)
            .then(response => {
                setProducts(response.data.products)
                console.log(response.data.products)
            })
    }

    const displayProducts = () => {
        console.log("KP products", products)

        if (products.length > 0)
            return products.map(product =>
                <div className='col-sm-4 col-md-4 productContainer'>
                    <Card >
                        <Card.Img variant="top" className='img-responsive mx-auto imageContainer text-center' src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                            <Card.Text>{product.description}
                            </Card.Text>
                            <Button variant="primary">Shop</Button>
                        </Card.Body>
                    </Card>
                </div>
            )

    }

    useEffect(() => {
        fetchCategoryList()
    }, [])

    return (
        <div className='container catalogContainer'>
            <div className='row'>
                <h2 className='text-center'>Product Catalogue</h2>
            </div>
            <div className='row text-center searchBoxContainer'>
                <div className='col-sm-10 col-md-10 col-lg-10'>
                    <Form.Select aria-label="Default select" onChange={(event) => setSelectedCategory(event.target.value)}>
                        <option>Open this select menu</option>
                        {
                            categories && categories.map((category, index) => <option key={index} value={category}>{category}</option>)
                        }
                    </Form.Select>
                </div>
                <div className='col-sm-2 col-md-2 col-lg-2'>
                    <Button onClick={() => getProductByCategory(selectedCategory)}>Search</Button>
                </div>

            </div>
            <div className='row container productContainer'>
                {displayProducts()}
            </div>
        </div>
    )
}

export default Catalog