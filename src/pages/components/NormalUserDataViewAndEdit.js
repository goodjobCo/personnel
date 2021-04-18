import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Field, useFormikContext } from 'formik';
import styled from 'styled-components';
import get from 'lodash/get';

/**編制人員對應編號 */
const personnelNumberComparison = {
    'g1iivfrxes6jHrmOptional': '',
    'g1iivfrxes6j1701001': '賴建良',
    'g3b0pju2vdgj1701002': '洪黛君',
    'g4gum8cctlnj1701003': '李育修',
    'g6vb5bc6wegj1701004': '林彥如',
    'g745ylfzh21j1701005': '王思涵',
    'g917kzq5vvvj1701006': '莊銘育',
    'gc786zj39xaj1701007': '莊銘昕',
}

/**專案 */
// const projectName = [
//     {
//         name: '其他',
//         id: '202001'
//     },
//     {
//         name: '樹谷',
//         id: '202002'
//     },
//     {
//         name: '鬼屋',
//         id: '202003'
//     },
// ]


const Frame = styled.div`
padding-bottom: 100px;
`;
const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 100%;
    height: 250px;
    padding: 10px;
    background: url(https://i2.wp.com/cowrich.com/wp-content/uploads/2020/04/thomas-tucker-au3CYbd7vCU-unsplash-scaled.jpg?fit=770%2C416&ssl=1) no-repeat center right;
    color: #fff;
    font-size: 2.5em;
    line-height: 1.5em;
    strong{
        font-size: 1.2em;
    }
`;

const FormItemStyled = styled.div`
    padding: 0 10px;
    text-align: center
`;

const NameStyled = styled.strong`
    display: block;
    text-align: left;
    font-size: 1.5em;
    line-height: 2.5em;
`;

const FormHiddenStyled = styled.div`
display: none;
`;



function NormalUserDataViewAndEdit(props) {
    // 取得路由上使用者 id
    const { personnelNumber, dataLast } = props;

    const { values, errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

    console.log(values)
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

        if (personnelNumber !== 'g1iivfrxes6jHrmOptional') (handleChange('personnel', personnelNumber))

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
        <Frame>
            <Row>
                <Col xs={24}>
                    <Header>
                        <strong>
                            {getDate}<br />
                            {getTime}
                        </strong>
                    </Header>
                </Col>

                <Col xs={24}>
                    <FormItemStyled>
                        <NameStyled> {personnelNumberComparison[personnelNumber]}  你好!</NameStyled>
                    </FormItemStyled>
                </Col>

                {
                    personnelNumber === 'g1iivfrxes6jHrmOptional' && (
                        <Col xs={24}>
                            <FormItemStyled>
                                {/** 人員 */}
                                <Form.Item
                                    // label="personnel"
                                    name="personnel"
                                    help={getHelpByFieldName('personnel')}
                                    validateStatus={getValidateStatusByFieldName('personnel')}
                                >
                                    <Field name="personnel" >
                                        {() => (<Input placeholder="請輸入姓名" onChange={event => handleChange('personnel', event.target.value)} />)}
                                    </Field>
                                </Form.Item>
                            </FormItemStyled>
                        </Col>
                    )
                }


                <Col xs={24}>
                    <FormItemStyled>
                        {/** 專案 */}
                        <Form.Item
                            // label="project"
                            name="project"
                            help={getHelpByFieldName('project')}
                            validateStatus={getValidateStatusByFieldName('project')}
                        >
                            <Field name="project" >
                                {() => (<Input placeholder="請輸入負責專案" onChange={event => handleChange('project', event.target.value)} />)}
                                {/* {
                                () => {
                                    return (
                                        <Select defaultValue="負責專案" style={{ width: '100%' }} onChange={value => handleChange('project', value)} >
                                            {projectName.map((value) => (
                                                <Option key={value.id} value={value.name}>{value.name}</Option>
                                            ))}
                                        </Select>
                                    )
                                }
                            } */}
                            </Field>
                        </Form.Item>
                    </FormItemStyled>
                </Col>
                <Col xs={24}>
                    <FormItemStyled>
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
                    </FormItemStyled>
                </Col>
                <Col xs={24}>
                    <FormItemStyled>

                        <Button shape="circle" disabled={values.endDate} onClick={() => handleWork('startDate', 'startTime')}>上班</Button>

                        <Button shape="circle" disabled={values.startDate} onClick={() => handleWork('endDate', 'endTime')}>下班</Button>

                    </FormItemStyled>
                </Col>
            </Row>
            <FormHiddenStyled>
                {personnelNumber === 'g1iivfrxes6jHrmOptional' && (
                    <Col xs={24}>
                        {/** 人員 */}
                        <Form.Item
                            // label="personnel"
                            name="personnel"
                            help={getHelpByFieldName('personnel')}
                            validateStatus={getValidateStatusByFieldName('personnel')}
                        >
                            <Field name="personnel" >
                                {() => (<Input type="hidden" value={personnelNumber} onChange={event => handleChange('personnel', personnelNumber)} />)}
                            </Field>
                        </Form.Item>
                    </Col>
                )}

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
            </FormHiddenStyled>
        </Frame>
    );
}

export default NormalUserDataViewAndEdit;
