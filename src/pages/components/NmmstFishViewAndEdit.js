import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import { Field, useFormikContext } from 'formik';
import styled from 'styled-components';
import get from 'lodash/get';

/**編制人員對應編號 */
const personnelNumberComparison = {
  'g1iivfrxes6jHrmOptional': '',
  'g1iivfrxes6j1701001': '1號箱豚缸',
  'g3b0pju2vdgj1701002': '2號石狗公',
  'g4gum8cctlnj1701003': '3號兩性缸',
  'g6vb5bc6wegj1701004': '4號大花枝',
  'g745ylfzh21j1701005': '5號裸胸鯙',
  'g917kzq5vvvj1701006': '6號蝦虎缸',
  'gc786zj39xaj1701007': '7號鱟缸',
}

const optionsFood = [
  { label: '飼料', value: '飼料' },
  { label: '朱文錦', value: '朱文錦' },
  { label: '黑殼蝦', value: '黑殼蝦' },
  { label: '豐年蝦', value: '豐年蝦' },
  { label: '魚塊', value: '魚塊' },
  { label: '透抽', value: '透抽' },
  { label: '白蝦', value: '白蝦' },
  { label: '康蝦', value: '康蝦' },
];

const optionsUnusual = [
  { label: '主馬達', value: '主馬達' },
  { label: '造浪', value: '造浪' },
  { label: '殺菌燈', value: '殺菌燈' },
  { label: '曝氣機', value: '曝氣機' },
  { label: '臭氧機', value: '臭氧機' },
  { label: '缸底水位', value: '缸底水位' },
  { label: '缸底硫化氫', value: '缸底硫化氫' },
  { label: '自動補水', value: '自動補水' },
  { label: '溫度顯示', value: '溫度顯示' },
  { label: '燈光/定時器', value: '燈光/定時器' },
  { label: '感測線不在水中', value: '感測線不在水中' },
];

const Frame = styled.div`
  padding-bottom: 100px;
`;
const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 100%;
    padding: 0 10px;
`;

const NameStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
  padding: 10px;
  background: #23c9c9;
  color: #fff;
  font-size: 1.5em;
  justify-content: center;
`;

const FormItemStyled = styled.div`
    padding: 10px 10px 0;
    .ant-checkbox-wrapper{
      font-size: 1.6em;
    }
    .ant-checkbox{
      top: -2px
    }
    .ant-checkbox-wrapper + .ant-checkbox-wrapper{
      margin-left: 0
    }
`;


const FormHiddenStyled = styled.div`
display: none;
`;




function NmmstFishViewAndEdit(props) {
  // 取得路由上使用者 id
  const { personnelNumber } = props;

  const { values, errors, touched, setFieldValue, setFieldTouched } = useFormikContext();

  // 取得目前時間 
  const today = new Date();
  const getDate = today.toLocaleDateString();
  const getTime = today.toLocaleTimeString();

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
          <NameStyled> <strong>海洋嘉年華〈{personnelNumberComparison[personnelNumber]}〉保養紀錄 </strong></NameStyled>
        </Col>
        <Col xs={24}>
          <Header> {getDate} {getTime}
          </Header>
        </Col>

        {
          personnelNumber === 'g1iivfrxes6jHrmOptional' && (
            <Col xs={24}>
              <FormItemStyled>
                {/** 缸體 */}
                <Form.Item
                  // label="personnel"
                  name="personnel"
                  help={getHelpByFieldName('personnel')}
                  validateStatus={getValidateStatusByFieldName('personnel')}
                >
                  <Field name="personnel" >
                    {() => (<Input placeholder="缸體" onChange={event => handleChange('personnel', event.target.value)} />)}
                  </Field>
                </Form.Item>
              </FormItemStyled>
            </Col>
          )
        }

        <Col xs={12}>
          <FormItemStyled>
            {/** 海水比重 */}
            <Form.Item
              // label="seawater"
              name="seawater"
              help={getHelpByFieldName('seawater')}
              validateStatus={getValidateStatusByFieldName('seawater')}
            >
              <Field name="seawater" >
                {() => (<Input placeholder="海水比重" onChange={event => handleChange('seawater', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={12}>
          <FormItemStyled>
            {/** 下藥紀錄 */}
            <Form.Item
              // label="medication"
              name="medication"
              help={getHelpByFieldName('medication')}
              validateStatus={getValidateStatusByFieldName('medication')}
            >
              <Field name="medication" >
                {() => (<Input placeholder="下藥紀錄" onChange={event => handleChange('medication', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={24}>
          <FormItemStyled>
            {/** 上午餵食 */}
            <Form.Item
              label="上午餵食"
              name="morning"
              help={getHelpByFieldName('morning')}
              validateStatus={getValidateStatusByFieldName('morning')}
            >
              <Field name="morning" >
                {() => (
                  <Checkbox.Group
                    options={optionsFood}
                    defaultValue={[]}
                    onChange={value => handleChange('morning', value)}
                  />
                )}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={24}>
          <FormItemStyled>
            {/** 下午餵食 */}
            <Form.Item
              label="下午餵食"
              name="afternoon"
              help={getHelpByFieldName('afternoon')}
              validateStatus={getValidateStatusByFieldName('afternoon')}
            >
              <Field name="afternoon" >
                {() => (
                  <Checkbox.Group
                    options={optionsFood}
                    defaultValue={[]}
                    onChange={value => handleChange('afternoon', value)}
                  />
                )}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={24}>
          <FormItemStyled>
            {/** 是否添加 */}
            <Form.Item
              label="是否添加"
              name="nitrifying"
              help={getHelpByFieldName('nitrifying')}
              validateStatus={getValidateStatusByFieldName('nitrifying')}
            >
              <Field name="nitrifying" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('nitrifying', e.target.checked)}
                  >
                    硝化菌0.5cc
                  </Checkbox>
                )}
              </Field>
              <Field name="soda" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('soda', e.target.checked)}
                  >
                    小蘇打
                  </Checkbox>
                )}
              </Field>
              <Field name="hydroxide" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('hydroxide', e.target.checked)}
                  >
                    氫氧化鈣
                  </Checkbox>
                )}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={24}>
          <FormItemStyled>
            {/** 清潔更換 */}
            <Form.Item
              label="清潔更換"
              name="cylinderWall"
              help={getHelpByFieldName('cylinderWall')}
              validateStatus={getValidateStatusByFieldName('cylinderWall')}
            >
              <Field name="cylinderWall" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('cylinderWall', e.target.checked)}
                  >
                    缸壁藻類水垢
                  </Checkbox>
                )}
              </Field>
              <Field name="outlet" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('outlet', e.target.checked)}
                  >
                    出水口藻類清潔
                  </Checkbox>
                )}
              </Field>
              <Field name="proteinMachine" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('proteinMachine', e.target.checked)}
                  >
                    蛋白機清洗
                  </Checkbox>
                )}
              </Field>
              <Field name="filterSponge" >
                {() => (
                  <Checkbox
                    onChange={e => handleChange('filterSponge', e.target.checked)}
                  >
                    過濾白棉更換
                  </Checkbox>
                )}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={24}>
          <FormItemStyled>
            {/** 不正常設備 */}
            <Form.Item
              label="不正常設備"
              name="unusual"
              help={getHelpByFieldName('unusual')}
              validateStatus={getValidateStatusByFieldName('unusual')}
            >
              <Field name="unusual" >
                {() => (
                  <Checkbox.Group
                    options={optionsUnusual}
                    defaultValue={[]}
                    onChange={value => handleChange('unusual', value)}
                  />
                )}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={12}>
          <FormItemStyled>
            {/** 魚口增減 */}
            <Form.Item
              // label="魚口增減"
              name="fish"
              help={getHelpByFieldName('fish')}
              validateStatus={getValidateStatusByFieldName('fish')}
            >
              <Field name="fish" >
                {() => (<Input placeholder="魚口增減" onChange={event => handleChange('fish', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={12}>
          <FormItemStyled>
            {/** 突發事項/處理 */}
            <Form.Item
              // label="突發事項/處理"
              name="emergency"
              help={getHelpByFieldName('emergency')}
              validateStatus={getValidateStatusByFieldName('emergency')}
            >
              <Field name="emergency" >
                {() => (<Input placeholder="突發事項/處理" onChange={event => handleChange('emergency', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={12}>
          <FormItemStyled>
            {/** 維護人員 */}
            <Form.Item
              // label="維護人員"
              name="maintainPersonnel"
              help={getHelpByFieldName('maintainPersonnel')}
              validateStatus={getValidateStatusByFieldName('maintainPersonnel')}
            >
              <Field name="maintainPersonnel" >
                {() => (<Input placeholder="維護人員" onChange={event => handleChange('maintainPersonnel', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>

        <Col xs={12}>
          <FormItemStyled>
            {/** 交接建議 */}
            <Form.Item
              // label="remarks"
              name="remarks"
              help={getHelpByFieldName('remarks')}
              validateStatus={getValidateStatusByFieldName('remarks')}
            >
              <Field name="remarks" >
                {() => (<Input.TextArea placeholder="交接建議(選填)" onChange={event => handleChange('remarks', event.target.value)} />)}
              </Field>
            </Form.Item>
          </FormItemStyled>
        </Col>
      </Row>

    </Frame>
  );
}

export default NmmstFishViewAndEdit;
