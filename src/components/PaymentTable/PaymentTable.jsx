import React from 'react'

import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';

const { Column } = Table;


const PaymentTable = (props) => {

    // const data = [
    //     {
    //         key: '1',
    //         plan: 'План',
    //         minPlanAccruals: 'Мин начисление',
    //         maxPlanAccruals: 'Макс начисление',
    //         termPlan: 'Срок',
    //         minPayback: 'Окупаемость минимум',
    //         maxPayback: 'Окупаемость максимум',
    //         minPaybackWithdrawal: 'Окупаемость минимум со снятием',
    //         maxPaybackWithdrawal: 'Окупаемость максимум со снятием',
    //         minPaybackTerm: 'Окупаемость минимум по исетечении срока',
    //         maxPaybackTerm: 'Окупаемость максимум по исетечении срока',
    //     },
    // ];

    const data = props.plan.map(item => {
        return {
            key: item.plan,
            plan: item.plan,
            minPlanAccruals:
                props.coin > item.minInvestments && props.coin * item.minAccruals / 100,
            maxPlanAccruals:
                props.coin > item.minInvestments && props.coin * item.maxAccruals / 100,
            termPlan: item.term,
            min:
                props.coin > item.minInvestments
                && (item.term * (props.coin * item.minAccruals / 100)
                    + (item.output === 'Да' && props.coin)),
            max:
                props.coin > item.minInvestments
                && (item.term * (props.coin * item.maxAccruals / 100)
                    + (item.output === 'Да' && props.coin)),
            minDailyProfit:
                props.coin > item.minInvestments
                && (item.dailyWithdrawal === 'Да'
                    ? item.minInvestments && props.coin * item.minAccruals / 100
                    : 0),
            maxDailyProfit:
                props.coin > item.minInvestments
                && (item.dailyWithdrawal === 'Да'
                    ? item.minInvestments && props.coin * item.maxAccruals / 100
                    : 0),
            minСonsumption:
                props.coin > item.minInvestments
                && (item.term * (props.coin * item.minAccruals / 100)
                    + (item.output === 'Да' && props.coin) - props.сonsumption) - props.coin,
            maxСonsumption:
                props.coin > item.minInvestments
                && (item.term * (props.coin * item.maxAccruals / 100)
                    + (item.output === 'Да' && props.coin) - props.сonsumption) - props.coin,
        }
    }
    )

    //             <Column title="Срок" dataIndex="term" key="term" />
    //             <Column title="Макс. инвестиции" dataIndex="maxInvestments" key="maxInvestments" />
    //             <Column title="Мин. ежедневные начисления" dataIndex="minAccruals" key="minAccruals" />
    //             <Column title="Макс. ежедневные начисления" dataIndex="maxAccruals" key="maxAccruals" />
    //             <Column title="Вывод тела" dataIndex="output" key="output" />
    //             <Column title="Ежедневный вывод"

    const fixedColumns = [
        {
            title: 'plan',
            dataIndex: 'plan',
            fixed: true,
            width: 100,
        }
    ];

    return (
        <Table
            scroll={{ x: 2000 }}
            dataSource={data}>
            <Column title="План" dataIndex="plan" key="plan" />
            <Column title="Мин начисление в день" dataIndex="minPlanAccruals" key="minPlanAccruals" />
            <Column title="Макс начисление в день" dataIndex="maxPlanAccruals" key="maxPlanAccruals" />
            <Column title="Срок" dataIndex="termPlan" key="termPlan" />
            <Column title="Минимум" dataIndex="min" key="min" />
            <Column title="Максимум" dataIndex="max" key="max" />
            <Column title="Мин ежедневная прибыль" dataIndex="minDailyProfit" key="minDailyProfit" />
            <Column title="Макс ежедневная прибыль" dataIndex="maxDailyProfit" key="maxDailyProfit" />
            <Column
                title="Минимум прибыли с учетом раходов"
                dataIndex="minСonsumption"
                key="minСonsumption"
                render={tag => {
                    let color = tag > 0 ? 'green' : 'red';
                    return (
                      <Tag color={color} key={tag}>
                        {tag}
                      </Tag>
                    );
                }}
                />
            <Column
                title="Максимум прибыли с учетом раходов"
                dataIndex="maxСonsumption"
                key="maxСonsumption"
                render={tag => {
                    let color = tag > 0 ? 'green' : 'red';
                    return (
                      <Tag color={color} key={tag}>
                        {tag}
                      </Tag>
                    );
                }}
            />
        </Table>
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
})(PaymentTable)
