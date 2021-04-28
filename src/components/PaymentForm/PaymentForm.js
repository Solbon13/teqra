import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { coinStore, сonsumptionStore } from '../../redux/mainReducer';
import { SET_COIN, SET_CONSUMPTION } from '../../utils/const';

const PaymentForm = (props) => {

    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(coinStore(values.coin))
        dispatch(сonsumptionStore(values.сonsumption))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log(props)

    return (
        <Form
            name="basic"
            initialValues={{
                сonsumption: props.сonsumption,
                coin: props.coin,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Сумма"
                name="coin"
                rules={[
                    {
                        required: true,
                        message: 'Не введена сумма!',
                    },
                ]}
            >
                <Input type = 'number'/>
            </Form.Item>
            <Form.Item
                label="Расход"
                name="сonsumption"
                rules={[
                    {
                        required: true,
                        message: 'Не введена сумма!',
                    },
                ]}
            >
                <Input type = 'number'/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Расчитать
                    </Button>
            </Form.Item>
        </Form>
    )
}

let mapStateToProps = (state) => {
    return {
        coin: state.main.coin,
        сonsumption: state.main.сonsumption,
    }
}

export default connect(mapStateToProps, {
})(PaymentForm)
