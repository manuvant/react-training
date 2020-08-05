import React from 'react';
import axios from 'axios';
import API_URL from '../cfg';


class Producto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productos: []
        }
    };

    componentDidMount() {
        axios.get(`${API_URL}/products`)
            .then(response => {
                console.log(response.data)

                const productosTraidos = response.data.map(productoNombre => <li>
                    {productoNombre.name}
                </li>);
                console.log(productosTraidos)

                this.setState({
                    productos: productosTraidos
                })
            })
            .catch(err => {
                console.log(err)
            })
    };


    render() {
        return (
            <div>
                {this.state.productos}
            </div>
        )
    }
};

export default Producto