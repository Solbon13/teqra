import React from 'react'
import { Card, Avatar, Table } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Meta } = Card;
const { Column } = Table;


const ProgrammCard = (props) => {

    const data = props.plan.map( item => {
        return {
            key: item.plan,
            plan: item.plan,
            term: item.term,
            minInvestments: item.minInvestments,
            maxInvestments: item.maxInvestments,
            minAccruals: item.minAccruals,
            maxAccruals: item.maxAccruals,
            output: item.output,
            dailyWithdrawal: item.dailyWithdrawal
        }}
    )

    

    return (
        <div>
            <Table dataSource={data}>
                <Column title="План" dataIndex="plan" key="plan" />
                <Column title="Срок" dataIndex="term" key="term" />
                <Column title="Мин. инвестиции" dataIndex="minInvestments" key="minInvestments" />
                <Column title="Макс. инвестиции" dataIndex="maxInvestments" key="maxInvestments" />
                <Column title="Мин. ежедневные начисления" dataIndex="minAccruals" key="minAccruals" />
                <Column title="Макс. ежедневные начисления" dataIndex="maxAccruals" key="maxAccruals" />
                <Column title="Вывод тела" dataIndex="output" key="output" />
                <Column title="Ежедневный вывод" dataIndex="dailyWithdrawal" key="dailyWithdrawal" />
            </Table>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        plan: state.main.plan,
    }
}

export default connect(mapStateToProps, {
})(ProgrammCard)
