import * as Sentry from '@sentry/browser'; 

function init() {
  Sentry.init({
    dsn: "https://27fb973abf374b669cadd30b4920d27e@sentry.io/1405773"
   });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init, 
  log
};