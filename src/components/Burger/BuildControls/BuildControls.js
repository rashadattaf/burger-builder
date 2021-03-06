// The BuildControls Component is responsible for
// wrapping every single control and displaying them
import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

// here we create an array that holds the values
// for the controls we have
// label: the text will be display as the label of the control
// type: is the value will be passed throughout Components
// so that the logic we created earlier will be accomplished
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p className={classes.Price}>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton}
                onClick={props.ordered}
                disabled={!props.purchasable}>Order
        </button>
    </div>
);

export default buildControls;