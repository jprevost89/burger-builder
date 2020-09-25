import React from 'react';
import Aux from '../../../high-order-components/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    componentWillUpdate() {
        console.log('OrderSummary will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Ryan's Order</h3>
                <p>Check out what Ryan slapped down on this cow patty:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;