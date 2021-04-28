import React from 'react'

import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

const { Column } = Table;


const PaymentTableDay = (props) => {

    const days = []

    for (let i = 1; i < 181; i++)
        days.push(i)
    const data = days.map(day => {
        let row = props.plan.map(item => {
            const minCoin = props.coin >= item.minInvestments
            const minPercentageDaily = props.coin * item.minAccruals / 100
            const maxPercentageDaily = props.coin * item.maxAccruals / 100
            const dailyOutput = item.dailyWithdrawal === 'Да'
            const output = item.output === 'Да'

            const paymentDay = (percentageDaily, day) => {
                if (minCoin && dailyOutput && item.term >= (day)) {
                    return percentageDaily * day + (output && item.term === day && props.coin)
                }
                return 0
            }

            return {
                key: item.plan,
                plan: item.plan,
                day:
                    day,
                minDay:
                    paymentDay(minPercentageDaily, day),
                maxDay:
                    paymentDay(maxPercentageDaily, day),
            }
        })
        return {
            key: day,
            day:
                day,
            minDay10:
                row[0].minDay,
            maxDay10:
                row[0].maxDay,
            minDay25:
                row[1].minDay,
            maxDay25:
                row[1].maxDay,
            minDay40:
                row[2].minDay,
            maxDay40:
                row[2].maxDay,
            minDay50:
                row[3].minDay,
            maxDay50:
                row[3].maxDay,
            minDay60:
                row[4].minDay,
            maxDay60:
                row[4].maxDay,
            minDay180:
                row[5].minDay,
            maxDay180:
                row[5].maxDay,
        }
    })

    const consumption = (val) => {
        let color = val > 0 ? 'green' : 'red';
        color = val > props.coin ? '#006d75' : color;
        return (
            <Tag color={color} key={val}>
                {val}
            </Tag>
        );
    }

    return (
        <Table dataSource={data}>
            <Column title="План" dataIndex="plan" key="plan" />
            <Column title="день" dataIndex="day" key="day" />
            <Column
                title="Мин."
                dataIndex="minDay10"
                key="minDay10"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay10"
                key="maxDay10"
                render={tag => consumption(tag)}
            />
            <Column
                title="Мин."
                dataIndex="minDay25"
                key="minDay25"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay25"
                key="maxDay25"
                render={tag => consumption(tag)}
            />
            <Column
                title="Мин."
                dataIndex="minDay40"
                key="minDay40"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay40"
                key="maxDay40"
                render={tag => consumption(tag)}
            />
            <Column
                title="Мин."
                dataIndex="minDay50"
                key="minDay50"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay50"
                key="maxDay50"
                render={tag => consumption(tag)}
            />
            <Column
                title="Мин."
                dataIndex="minDay60"
                key="minDay60"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay60"
                key="maxDay60"
                render={tag => consumption(tag)}
            />
            <Column
                title="Мин."
                dataIndex="minDay180"
                key="minDay180"
                render={tag => consumption(tag)}
            />
            <Column
                title="Макс"
                dataIndex="maxDay180"
                key="maxDay180"
                render={tag => consumption(tag)}
            />
        </Table>
    )
}

export default PaymentTableDay
