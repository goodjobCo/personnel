import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import config from '../config/config';
import { Formik, Form } from 'formik';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import NmmstFishViewAndEdit from './components/NmmstFishViewAndEdit';
import initFormikValues from './utils/NmmstFish/initFormikValues';
import getValidationSchema from './utils/NmmstFish/getValidationSchema'

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
//       const { personnel, seawater, startDate, startTime, endDate, endTime } = response?.data[0]
//       Modal.success({
//         content: `${personnel} ${seawater} ${startDate}${startTime}${endDate}${endTime} `,
//       });
//     })
// }

// firebase
const firebaseSubmitHandler = (personnelNumber, data) => {

  // Access your firebase app


  if (!firebase.apps.length) {
    console.log(789, firebase.apps.length)
    const app = firebase.initializeApp(config);

    const database = app.database()

    database.ref(`/nmmstFish/nmmstFishNumber${personnelNumber}`).push(data)
      .then(function () {
        const { personnel, seawater, medication, startDate, startTime, endDate, endTime } = data
        Modal.success({
          content: <ModalStyled>{seawater}{medication}<br /> {startDate}{startTime}{endDate}{endTime} </ModalStyled>,
        });
      }).catch(function () {
        alert("???????????????????????????????????????");
      });
  }
  else {
    const app = firebase.app();
  }
}


const NmmstFish = (props) => {
  // ???????????????????????? id
  const personnelNumber = props.match.params.id
  // ????????????????????????????????????
  // const personnelNumber = 'gzybfooy8brj202104'

  const [checkedStorageList, setCheckedStorageList] = useState([]);


  /**
   * ??????????????????????????????????????????????????????
   * https://stackoverflow.com/questions/37652328/how-to-check-if-a-firebase-app-is-already-initialized-on-android
   * ??????: ???????????????????????????????????????????????? app.delete(firebase.app());
   */
  useEffect(() => {
    const app = firebase.initializeApp(config);
    const database = app.database()
    database.ref(`/personnel/personnelNumber${personnelNumber}`).once('value', function (snapshot) {
      var data = snapshot.val();
      setCheckedStorageList(data)
      // ?????????????????????????????????????????????????????????
      app.delete(firebase.app());
    });

  }, [personnelNumber]);

  /**
   * ????????????????????????
   * TODO: ????????????????????????????? ??? personnelNumber ID ???????
   */
  const length = Object.keys(checkedStorageList).length
  const lastTime = (
    Object.values(checkedStorageList)
      .filter((list, index) => index === length - 1)
      .map(item => item)
  )

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
              <NmmstFishViewAndEdit personnelNumber={personnelNumber} lastTime={lastTime} />
              <FooterStyled>
                <Button block type="primary"
                  // disabled={!startDate && !endDate} 
                  htmlType="submit">
                  ??????
                </Button>
              </FooterStyled>
            </Form>
          )
        }}
      </Formik>
      {/* <footer>????????????</footer> */}
    </Frame>
  );
}

export default NmmstFish;
// /nmmstFish/#/nmmstFish/g1iivfrxes6j1701001