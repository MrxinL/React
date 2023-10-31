
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.css';
import { Get } from '../../utils/index'
function Login() {
    const [name, setName] = useState(void 0)
    const [password, setPassword] = useState(void 0)
    const handleGetName = (e: any) => {
        setName(e.target.value)
    }

    const handleGetPassword = (e: any) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async () => {
        const data: any = await Get('https://mock.mengxuegu.com/mock/653f413882cf792009576e18/example/mock/login')
        const { data: { res } } = data
        if (res.name === name && res.password === password) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    return (
        <div className="login-index">
            <video 
            className='video-deom'
            src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/campus/2022-landing-page.mp4' 
            muted
            autoPlay
            ></video>
            <div className='login-input'>
                <Form className='login-input-form'>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            placeholder="账号"
                            onChange={handleGetName}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="密码：123456"
                            onChange={handleGetPassword}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login