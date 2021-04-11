import * as yup from 'yup';
// import axios from 'axios';

const requiredText = '此欄位必填';


const SignupSchema = yup.object().shape({
    startDate: yup.string(),
        // .required(requiredText),
    startTime: yup.string(),
        // .required(requiredText),
    endDate: yup.string(),
        // .required(requiredText),
    endTime: yup.string(),
        // .required(requiredText),
    remarks: yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!'),
    personnel: yup.string()
        .required(requiredText),
    project: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(requiredText),
});

export default SignupSchema