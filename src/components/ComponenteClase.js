import React from 'react';
import axios from 'axios';
import API_URL from '../cfg';

class Producto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productos: [],
            nombreDeProducto: '',
            descripcionDeProducto: '',
        }
    };

    componentDidMount() {
        this.fetchProducts()
    };

    fetchProducts () {
        axios.get(`${API_URL}/products`)
            .then(response => {
                console.log(response.data)

                const productosTraidos = response.data.map(productoNombre => {
                    console.log('id', productoNombre.id)
                    return (
                        <li>
                            {productoNombre.name} 
                                <button onClick={this.deleteClick(productoNombre.id)}>
                                    delete
                                </button>
                        </li>
                    )
                });
                
                console.log(productosTraidos)
                

                const productosId = response.data.map(id => <li>
                    {response.data.id}
                </li>);

                this.setState({
                    productos: productosTraidos
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleInputChange = (evt) => {
        console.log(evt.target.name)
        console.log(evt.target.value)

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    clickAnadir = () => {
        axios.post(`${API_URL}/products`, {
            name: this.state.nombreDeProducto,
            description: this.state.descripcionDeProducto,
            created: new Date(),
            isImportant: true
        })
        .then(response => {
            console.log(response.data)
            this.fetchProducts()
        })
        .catch(err => console.log(err))
    }

    deleteClick = (id) => () => {
        axios.delete(`${API_URL}/products/${id}`)
                .then(result => {
                    console.log(result)
                })
                .catch(err => {
                    console.log(err)
                })
        axios.get(`${API_URL}/products`)
                .then(response => {
                    const productosTraidos = response.data.map(producto => {
                        return (
                            <li>
                                {producto.name}
                                <button onClick={this.deleteClick()}>
                                    delete
                                </button>
                            </li>
                        )
                    })
                    this.setState({
                        productos: productosTraidos
                    })
                })
                
    };

    render() {
        return (
            <div>
                {this.state.productos} y {this.state.productosId}
                <input onChange={this.handleInputChange} name="nombreDeProducto" placeholder="nombre"/>
                <input onChange={this.handleInputChange} name="descripcionDeProducto" placeholder="descripcion"/>
                <button onClick={this.clickAnadir}>AÑADIR</button>
                
            </div>
        )
    }
};



export default Producto