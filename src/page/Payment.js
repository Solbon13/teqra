import React from 'react'
import PaymentForm from '../components/PaymentForm/PaymentForm'
import PaymentTable from '../components/PaymentTable/PaymentTable'

const Payment = () => {
    return (
        <div>
            Цена на Teqra фиксирована + для того чтоб положить на кошелек цена доллара выше примерно на 5 рублей
            <PaymentForm/>
            <PaymentTable/>
        </div>
    )
}

export default Payment
