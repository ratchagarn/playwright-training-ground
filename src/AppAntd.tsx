import { useState } from 'react'
import {
  Form,
  Row,
  Col,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Radio,
  Select,
  DatePicker,
  Upload,
  Switch,
  Modal,
  Space,
} from 'antd'
import 'antd/dist/reset.css'
import styled, { createGlobalStyle } from 'styled-components'

interface FormValues {
  fullname?: string
  favoriteNumber?: number
  gender?: string
  skills?: string[]
  birthday?: string
  periodDate?: string
  yourself?: string
  resume?: any[]
  needNewsletterByEmail?: boolean
}

const AppAntd = () => {
  const [formValues, setFormValues] = useState<FormValues>()
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const [form] = Form.useForm<FormValues>()

  return (
    <>
      <Container>
        <ContainerInner>
          <Title>Test Ant Design</Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={async (values) => {
              setLoading(true)
              await delay()

              setFormValues(values)
              setOpenModal(true)
              setLoading(false)
            }}
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="Your Name" name="fullname">
                  <Input placeholder="Firstname Lastname" />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Your Favorite Number" name="favoriteNumber">
                  <InputNumber
                    min={1}
                    max={9999999999}
                    step={100}
                    maxLength={10}
                    placeholder="69"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Your Native Language" name="language">
                  <Select
                    showSearch
                    placeholder="Select Your Native Language"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').includes(input)
                    }
                    options={[
                      {
                        label: 'English',
                        value: 'en_US',
                      },
                      {
                        label: 'Japanese',
                        value: 'ja_JP',
                      },
                      {
                        label: 'Thai',
                        value: 'th_TH',
                      },
                      {
                        label: 'Chinese',
                        value: 'zh_CN',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="Gender" name="gender">
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                      <Radio value="unknown">Don't want to tell</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Skills" name="skills">
                  <Checkbox.Group>
                    <Space direction="vertical">
                      <Checkbox value="HTML">HTML</Checkbox>
                      <Checkbox value="CSS">CSS</Checkbox>
                      <Checkbox value="JS">JS</Checkbox>
                      <Checkbox value="GO">GO</Checkbox>
                    </Space>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Birthday" name="birthday">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label="Period Date" name="periodDate">
                  <DatePicker.RangePicker data-testid="periodDate" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="Explain about yourself" name="yourself">
                  <Input.TextArea
                    placeholder="What is your personality"
                    style={{ resize: 'none' }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Your Resume"
                  name="resume"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => {
                    if (Array.isArray(e)) {
                      return e
                    }
                    return e?.fileList
                  }}
                >
                  <Upload.Dragger
                    name="file"
                    multiple={false}
                    accept=".csv"
                    beforeUpload={() => false}
                  >
                    <div>Click or drag file to this area to upload</div>
                  </Upload.Dragger>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Newsletter by Email"
                  name="needNewsletterByEmail"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
            </Row>

            <Space style={{ marginTop: 16 }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              <Button onClick={() => form.resetFields()}>Reset</Button>
            </Space>
          </Form>
        </ContainerInner>
      </Container>

      <Modal
        open={openModal}
        title="Form Values"
        width={640}
        footer={null}
        centered
        onCancel={() => setOpenModal(false)}
      >
        <Pre>
          <code>{JSON.stringify(formValues, null, 2)}</code>
        </Pre>
      </Modal>

      <GlobalStyled />
    </>
  )
}

export default AppAntd

async function delay(ms = 250) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), ms)
  })
}

const GlobalStyled = createGlobalStyle`
  body {
    background-color: #f6f6f6;
  }

  .ant-form-item {
    .ant-form-item-label {
      padding-bottom: 2px;

      > label {
        font-weight: 500;
        color: #008dd3;
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 960px;
  min-height: 100vh;
  margin: auto;
`

const ContainerInner = styled.div`
  position: relative;
  flex: 1;
  margin-top: 40px;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
`

const Title = styled.h1`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  z-index: 99;
  margin: 0;
  margin-bottom: 1em;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

const Pre = styled.pre`
  display: flex;
  height: 100%;
  background-color: #363636;
  padding: 16px;
  border-radius: 4px;

  > code {
    font-size: 12px;
    line-height: 1.5;
    color: orange;
  }
`
