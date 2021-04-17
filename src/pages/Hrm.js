import React from 'react';
import firebase from 'firebase';

import config from '../config/config';
import { Formik, Form } from 'formik';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import NormalUserDataViewAndEdit from './components/NormalUserDataViewAndEdit';
import initFormikValues from './utils/initFormikValues';
import getValidationSchema from './utils/getValidationSchema'

const Frame = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  .ant-btn.ant-btn-circle{
    width: calc(50% - 20px);
    height: 100px;
    margin: 0px 10px;
    border-width: 8px;
    font-size: 2.5em;
    border-radius: 25px;
  }
  .ant-btn-block,.ant-input,.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    min-height: 60px;
    font-size: 1.2em;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item{
    line-height: 45px
  }
  .ant-select-item{
    min-height: auto;
    padding: 20px 10px;
    font-size: 1.2em;
  }
  .ant-form-item{
    margin-bottom: 0;
  }
`;
const FooterStyled = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 35px 0 0;
`;
const ModalStyled = styled.div`
font-size: 2em;
line-height: 1.5em;
`;
// sheet.best
// const submitHandler = data => {
//   axios.post('https://sheet.best/api/sheets/b1eb45ec-9827-4eea-a012-8d173d9d4393', data)
//     .then(response => {
//       const { personnel, project, startDate, startTime, endDate, endTime } = response?.data[0]
//       Modal.success({
//         content: `${personnel} ${project} ${startDate}${startTime}${endDate}${endTime} `,
//       });
//     })
// }

// firebase
const firebaseSubmitHandler = (personnelNumber, data) => {

  if (!firebase.apps.length) {
    const app = firebase.initializeApp(config);

    const database = app.database()

    database.ref(`/personnel/personnelNumber${personnelNumber}`).push(data)
      .then(function () {
        const { personnel, project, startDate, startTime, endDate, endTime } = data
        Modal.success({
          content: <ModalStyled>{project}<br /> {startDate}{startTime}{endDate}{endTime} </ModalStyled>,
        });
      }).catch(function () {
        alert("伺服器發生錯誤，請稍後再試");
      });
  }
  else {
    const app = firebase.app();
  }
}


export const Hrm = props => {
  // 取得路由上使用者 id
  const personnelNumber = props.match.params.id
  // 無法動態之前每月固定寫死
  // const personnelNumber = 'gzybfooy8brj202104'

  return (
    <Frame>
      <Formik
        initialValues={initFormikValues()}
        validationSchema={getValidationSchema}
        onSubmit={values => {
          firebaseSubmitHandler(personnelNumber, values)
        }}
      >
        {formikProps => {
          const { startDate, endDate } = formikProps.values
          return (
            <Form>
              <NormalUserDataViewAndEdit personnelNumber={personnelNumber} />
              <FooterStyled>
                <Button block type="primary" disabled={!startDate && !endDate} htmlType="submit">
                  送出
            </Button>
              </FooterStyled>
            </Form>
          )
        }}
      </Formik>
      {/* <footer>果匠設計</footer> */}
    </Frame>
  );
}