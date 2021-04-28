import React from 'react'
import { Button, Col, Menu, Row, Typography } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { NavLink } from 'react-router-dom'
const { Title } = Typography;

const MyHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Row justify="space-between">
                <Col span={17}>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1" ><NavLink to='/'>Главная</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/payment'>Расчет</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to='/programm'>Программы</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to='/instruction'>Инструкция для регистрации</NavLink></Menu.Item>
                    </Menu>
                </Col>
                <Col span={4}>
                    {/*одну кнопку сделать*/}
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="5">
                            <Button ghost size="large">
                                <a target="_blank" href='https://teqra.com/ru/?ref=yON7fRg4joZDRO4'>
                                    <Title type="danger" level={3}>TEQRA.COM</Title>
                                </a>
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}

export default MyHeader
