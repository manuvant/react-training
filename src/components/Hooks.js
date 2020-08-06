import React from 'react';

const Contador = (props) => {
    const [contador, setContador] = React.useState(0);

    const sumar = () => {
        setContador(contador + 1)
    };

    const restar = () => {
        setContador(contador - 1)
    };

    return (
        <div>
            <button onClick={sumar}>
                sumar
            </button>

            {contador}

            <button onClick={restar}>
                restar
            </button>

        </div>
    )
};

export default Contador