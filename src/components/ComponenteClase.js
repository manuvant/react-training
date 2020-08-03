import react from 'react';
import axios from 'axios';
import API_URL from '../cfg';


class Producto extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            productos: []
        }
    };

    componentDidMount() {
        axios.get(API_URL/product)
            .then(response => {
                const productosTraidos = response.data
                this.setState({productos: productosTraidos})
            })
            .catch(err => {
                console.log(err)
            })
    };


    render() {
        return (
            <div>
                {this.state.productos.map(producto => <li>
                    {producto}
                </li>)}
            </div>
        )
    }
}

export default Producto