import React from 'react'

import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

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
        const minCoin = props.coin > item.minInvestments
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
            minDay10:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 10
                : 0,
            maxDay10:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 10
                : 0,
            minDay25:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 25
                : 0,
            maxDay25:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 25
                : 0,
            minDay40:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 40
                : 0,
            maxDay40:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 40
                : 0,
            minDay50:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 50
                : 0,
            maxDay50:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 50
                : 0,
            minDay60:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 60
                : 0,
            maxDay60:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 60
                : 0,
            minDay180:
                minCoin
                && dailyOutput
                ? (minPercentageDaily) * 180
                : 0,
            maxDay180:
                minCoin
                && dailyOutput
                ? (maxPercentageDaily) * 180
                : 0,
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
            <ColumnGroup title="На счете">
                <Column title="10 дней" dataIndex="minDay10" key="minDay10" />
                <Column title="10 дней" dataIndex="maxDay10" key="maxDay10" />
                <Column title="25 дней" dataIndex="minDay25" key="minDay25" />
                <Column title="25 дней" dataIndex="maxDay25" key="maxDay25" />
                <Column title="40 дней" dataIndex="minDay40" key="minDay40" />
                <Column title="40 дней" dataIndex="maxDay40" key="maxDay40" />
                <Column title="50 дней" dataIndex="minDay50" key="minDay50" />
                <Column title="50 дней" dataIndex="maxDay50" key="maxDay50" />
                <Column title="60 дней" dataIndex="minDay60" key="minDay60" />
                <Column title="60 дней" dataIndex="maxDay60" key="maxDay60" />
                <Column title="180 дней" dataIndex="minDay180" key="minDay180" />
                <Column title="180 дней" dataIndex="maxDay180" key="maxDay180" />
            </ColumnGroup>
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
