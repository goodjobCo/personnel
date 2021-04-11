// import moment from 'moment';


function initFormikValue(data = {}) {
  const value = {
    startDate: data?.personnel || '',
    startTime: data?.personnel || '',
    endDate: data?.personnel || '',
    endTime: data?.personnel || '',
    remarks: data?.personnel || '',
    personnel: data?.personnel || '',
    project: data?.project || '',
  };

  return value;
}

export default initFormikValue;
