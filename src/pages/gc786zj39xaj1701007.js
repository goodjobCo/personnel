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
  .ant-btn.ant-btn-circle{
    width: 160px;
    height: 160px;
    border-width: 5px;
    font-size: 2.5em;
  }
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
            content: `${personnel} ${project} ${startDate}${startTime}${endDate}${endTime} `,
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
  return (
    <Frame>
      <Formik
        initialValues={initFormikValues()}
        validationSchema={getValidationSchema}
        onSubmit={values => {
          firebaseSubmitHandler(personnelNumber, values)
        }}
      >
        {formikProps => (
          <Form>
            <NormalUserDataViewAndEdit personnelNumber={personnelNumber} />
            <Button block type="primary" htmlType="submit">
              Submit
          </Button>
          </Form>
        )}
      </Formik>
      <footer>果匠設計</footer>
    </Frame>
  );
}