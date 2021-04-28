import React from 'react'
import PaymentTableDay from './PaymentTableDay';
import PaymentTableTerm from './PaymentTableTerm';

const PaymentTable = (props) => {

    return (
        <>
        <PaymentTableTerm coin = {props.coin} сonsumption={props.сonsumption} plan={props.plan}/>
        <PaymentTableDay coin = {props.coin} сonsumption={props.сonsumption} plan={props.plan}/>
        </>
    )
}

export default PaymentTable
