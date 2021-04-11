import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, Button } from 'antd';
import { Field, useFormikContext } from 'formik';
import get from 'lodash/get';

const { Option } = Select;

/**編制人員對應編號 */
// const personnelNumberComparison = {
//     'g1iivfrxes6j1701001': '賴建良',
//     'g3b0pju2vdgj1701002': '洪黛君',
//     'g4gum8cctlnj1701003': '李育修',
//     'g6vb5bc6wegj1701004': '林彥如',
//     'g745ylfzh21j1701005': '王思涵',
//     'g917kzq5vvvj1701006': '莊銘育',
//     'gc786zj39xaj1701007': '莊銘昕',
// }
const personnelNumberComparison = [
    {
        name: '賴建良',
        id: 'g1iivfrxes6j1701001'
    },
    {
        name: '洪黛君',
        id: 'g3b0pju2vdgj1701002'
    },
    {
        name: '李育修',
        id: 'g4gum8cctlnj1701003'
    },
    {
        name: '林彥如',
        id: 'g6vb5bc6wegj1701004'
    },
    {
        name: '王思涵',
        id: 'g745ylfzh21j1701005'
    },
    {
        name: '莊銘育',
        id: 'g917kzq5vvvj1701006'
    },
    {
        name: '莊銘昕',
        id: 'gc786zj39xaj1701007'
    },
]

/**專案 */
const projectName = [
    {
        name: '其他',        
        id: '202001'
    },
    {
        name: '樹谷',
        id: '202002'
    },
    {
        name: '鬼屋',
        id: '202003'
    },
]

function NormalUserDataViewAndEdit(props) {
    // 取得路由上使用者 id
    // const { personnelNumber } = props;

    const { errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

    // 取得目前時間 
    const today = new Date();
    const [getDate, steGetDate] = useState(today.toLocaleDateString());
    const [getTime, steGetTime] = useState(today.toLocaleTimeString());

    // 使用者上班下班按鈕
    const handleWork = (date, time) => {

        steGetDate(
            () => today.toLocaleDateString()
        )
        steGetTime(
            () => today.toLocaleTimeString()
        )
        // handleChange('personnel', personnelNumber)
        handleChange(date, getDate)
        handleChange(time, getTime)

        return;
    }

    const getHelpByFieldName = fieldName => {
        return get(touched, fieldName) && get(errors, fieldName) ? get(errors, fieldName) : '';
    };

    const getValidateStatusByFieldName = fieldName => {
        return get(touched, fieldName) && get(errors, fieldName) ? 'error' : '';
    };


    const handleChange = (field, value) => {
        setFieldTouched(field, true, false);
        setFieldValue(field, value);
    };


    return (
        <>
            <Row>
                <Col xs={24}>
                    <Form.Item>
                        {/* {personnelNumberComparison[personnelNumber]}  */}
                        你好! 現在時間: {getDate} {getTime}
                    </Form.Item>
                </Col>

                <Col xs={12}>
                {/** 人員 */}
                <Form.Item
                    // label="personnel"
                    name="personnel"
                    help={getHelpByFieldName('personnel')}
                    validateStatus={getValidateStatusByFieldName('personnel')}
                >

                    <Field name="personnel" >
                     {() => (<Input placeholder="我是誰" onChange={event => handleChange('personnel', event.target.value)} />)}
                        {/* {
                            () => {
                                return (
                                    <Select defaultValue="我是誰" style={{ width: '100%' }} onChange={value => handleChange('personnel', value)} >
                                         {personnelNumberComparison.map((value) => (
                                                <Option key={value.id} value={value.name}>{value.name}</Option>
                                            ))}
                                    </Select>
                                )
                            }
                        } */}

                    </Field>
                </Form.Item>
            </Col>

                <Col xs={12}>
                    {/** 專案 */}
                    <Form.Item
                        // label="project"
                        name="project"
                        help={getHelpByFieldName('project')}
                        validateStatus={getValidateStatusByFieldName('project')}
                    >
                        <Field name="project" >
                            {
                                () => {
                                    return (
                                        <Select defaultValue="負責專案" style={{ width: '100%' }} onChange={value => handleChange('project', value)} >
                                            {projectName.map((value) => (
                                                <Option key={value.id} value={value.name}>{value.name}</Option>
                                            ))}
                                        </Select>
                                    )
                                }
                            }
                        </Field>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    {/** 備註 */}
                    <Form.Item
                        // label="remarks"
                        name="remarks"
                        help={getHelpByFieldName('remarks')}
                        validateStatus={getValidateStatusByFieldName('remarks')}
                    >
                        <Field name="remarks" >
                            {() => (<Input.TextArea placeholder="我有話要說(選填)" onChange={event => handleChange('remarks', event.target.value)} />)}
                        </Field>
                    </Form.Item>
                </Col>
                <Col xs={12}>
                    <Button shape="circle" onClick={() => handleWork('startDate', 'startTime')}>上班</Button>
                </Col>
                <Col xs={12}>
                    <Button shape="circle" onClick={() => handleWork('endDate', 'endTime')}>下班</Button>
                </Col>
            </Row>
            <Row wrap={false}>
                <Col xs={24}>
                    {/** 人員 */}
                    {/* <Form.Item
                        // label="personnel"
                        name="personnel"
                        help={getHelpByFieldName('personnel')}
                        validateStatus={getValidateStatusByFieldName('personnel')}
                    >
                        <Field name="personnel" >
                            {() => (<Input type="hidden" value={personnelNumber} onChange={event => handleChange('personnel', personnelNumber)} />)}
                        </Field>
                    </Form.Item> */}
                </Col>
                <Col xs={6}>
                    {/** 開始日期 */}
                    <Form.Item
                        // label="startDate"
                        name="startDate"
                        help={getHelpByFieldName('startDate')}
                        validateStatus={getValidateStatusByFieldName('startDate')}
                    >
                        <Field name="startDate" >
                            {() => (<Input type="hidden" value={getDate} onChange={event => handleChange('startDate', getDate)} />)}
                        </Field>
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    {/** 開始時間 */}
                    <Form.Item
                        // label="startTime"
                        name="startTime"
                        help={getHelpByFieldName('startTime')}
                        validateStatus={getValidateStatusByFieldName('startTime')}
                    >
                        <Field name="startTime" >
                            {() => (<Input type="hidden" value={getTime} onChange={event => handleChange('startTime', getTime)} />)}
                        </Field>
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    {/** 結束日期 */}
                    <Form.Item
                        // label="endDate"
                        name="endDate"
                        help={getHelpByFieldName('endDate')}
                        validateStatus={getValidateStatusByFieldName('endDate')}
                    >
                        <Field name="endDate" >
                            {() => (<Input type="hidden" value={getDate} onChange={event => handleChange('endDate', getDate)} />)}
                        </Field>
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    {/** 結束時間 */}
                    <Form.Item
                        // label="endTime"
                        name="endTime"
                        help={getHelpByFieldName('endTime')}
                        validateStatus={getValidateStatusByFieldName('endTime')}
                    >
                        <Field name="endTime" >
                            {() => (<Input type="hidden" value={getTime} onChange={event => handleChange('endTime', getTime)} />)}
                        </Field>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
}

export default NormalUserDataViewAndEdit;
