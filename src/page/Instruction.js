import { Steps } from 'antd'
import Title from 'antd/lib/typography/Title';
import React from 'react'
import { Link } from 'react-router-dom';

const { Step } = Steps;

const Instruction = () => {
    return (
        <Steps direction="vertical">
            <Step title={
                <a target="_blank" href="https://perfectmoney.com/index.html">
                    "Зарегистрировать кошелек на Perfect Money"
                </a>
            } description="Необходима для пополнения и снятия денег для TEQRA." />
            <Step title={
                <a target="_blank" href="https://www.bestchange.ru/sberbank-to-perfectmoney-usd.html">
                    "Закинуть деньги со Сбербанка на Perfect Money"
                </a>
            } description="" />
            <Step title={
                <a target="_blank" href="https://teqra.com/ru/?ref=yON7fRg4joZDRO4">
                    "Зарегистрироваться на Teqra"
                </a>
            } description="" />
        </Steps>
    )
}

export default Instruction
