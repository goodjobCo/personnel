// import moment from 'moment';


function initFormikValue(data = {}) {
  const value = {
    personnel: data?.personnel || '',
    seawater: data?.seawater || '',
    medication: data?.medication || '',
    morning: data?.morning || '',
    afternoon: data?.afternoon || '',
    nitrifying: data?.nitrifying ?? false,
    soda: data?.soda ?? false,
    hydroxide: data?.hydroxide ?? false,
    cylinderWall: data?.cylinderWall ?? false,
    outlet: data?.outlet ?? false,
    proteinMachine: data?.proteinMachine ?? false,
    filterSponge: data?.filterSponge ?? false,
    unusual: data?.unusual || '',
    fish: data?.fish || '',
    emergency: data?.emergency || '',
    maintainPersonnel: data?.maintainPersonnel || '',
    remarks: data?.remarks || '',
  };

  return value;
}

export default initFormikValue;
