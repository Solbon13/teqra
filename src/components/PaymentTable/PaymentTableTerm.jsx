import React from 'react'

import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

const { Column } = Table;


const PaymentTableTerm = (props) => {

    const data = props.plan.map(item => {
        const minCoin = props.coin >= item.minInvestments
        const minPercentageDaily = props.coin * item.minAccruals / 100
        const maxPercentageDaily = props.coin * item.maxAccruals / 100
        const dailyOutput = item.dailyWithdrawal === 'Да'
        return {
            key: item.plan,
            plan: item.plan,
            minPlanAccruals:
                minCoin && minPercentageDaily,
            maxPlanAccruals:
                minCoin && maxPercentageDaily,
            termPlan: item.term,
            // min:
            //     minCoin
            //     && (item.term * (minPercentageDaily)
            //         + (item.output === 'Да' && props.coin)),
            // max:
            //     minCoin
            //     && (item.term * (maxPercentageDaily)
            //         + (item.output === 'Да' && props.coin)),
            minDailyProfit:
                minCoin
                && (dailyOutput
                    ? item.minInvestments && minPercentageDaily
                    : 0),
            maxDailyProfit:
                minCoin
                && (dailyOutput
                    ? item.minInvestments && maxPercentageDaily
                    : 0),
            minСonsumption:
                minCoin
                && (item.term * (minPercentageDaily)
                    + (item.output === 'Да' && props.coin) - props.сonsumption) - props.coin,
            maxСonsumption:
                minCoin
                && (item.term * (maxPercentageDaily)
                    + (item.output === 'Да' && props.coin) - props.сonsumption) - props.coin,
        }
    }
    )

    return (
        <Table
            scroll={{ x: 2000 }}
            dataSource={data}>
            <Column title="План" dataIndex="plan" key="plan" />
            <Column title="Мин начисление в день" dataIndex="minPlanAccruals" key="minPlanAccruals" />
            <Column title="Макс начисление в день" dataIndex="maxPlanAccruals" key="maxPlanAccruals" />
            <Column title="Срок" dataIndex="termPlan" key="termPlan" />
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

export default PaymentTableTerm
