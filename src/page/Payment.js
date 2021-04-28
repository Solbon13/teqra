import React from 'react'
import { connect } from 'react-redux'
import PaymentForm from '../components/PaymentForm/PaymentForm'
import PaymentTable from '../components/PaymentTable/PaymentTable'

const Payment = (props) => {
    return (
        <div>
            Цена на Teqra фиксирована = 24 доллара + для того чтоб положить на кошелек цена доллара выше примерно на 5 рублей
            <PaymentForm/>
            <PaymentTable coin = {props.coin} сonsumption={props.сonsumption} plan={props.plan}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        coin: state.main.coin,
        сonsumption: state.main.сonsumption,
        plan: state.main.plan,
    }
}

export default connect(mapStateToProps, {
})(Payment)
