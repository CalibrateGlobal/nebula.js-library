const qlikConfig = (appId) => ({
  id: appId,
  qsHost: process.env.REACT_APP_HOST ,
  reloadURI: 'http://localhost:3000',
});

export default qlikConfig;
//'wss://cc-edapps.calibrateconsulting.com'