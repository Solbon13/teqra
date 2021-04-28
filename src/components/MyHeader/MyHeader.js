import React from 'react'
import { Col, Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { NavLink } from 'react-router-dom'

const MyHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Row justify="space-between">
                <Col span={1}>
                    {/* <img height={50} src={logo} alt='LOGO' /> */}
                </Col>
                <Col span={17}>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1" ><NavLink to='/'>Главная</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/payment'>Расчет</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to='/programm'>Планы</NavLink></Menu.Item>
                    </Menu>
                </Col>
                <Col span={4}>
                    {/*одну кнопку сделать*/}
                    {/* <Menu theme="dark" mode="horizontal">
                        <SubMenu key="SubMenu" title="Администрирование">
                                <Menu.Item key="8"><NavLink to={ADMIN_ROUTE}>Справочники</NavLink></Menu.Item>
                                <Menu.Item key="9"><NavLink to={SIGNUP_ROUTE} onClick={props.logout} >Выход</NavLink></Menu.Item>
                            </SubMenu>
                            
                    </Menu> */}
                </Col>
            </Row>
        </Header>
    )
}

export default MyHeader
