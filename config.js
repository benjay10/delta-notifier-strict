//Might need to enable the following on newer versions of NodeJS:
//import process from 'node:process';
import env from 'env-var';

const LOG_SERVER_CONFIGURATION = env
  .get('LOG_SERVER_CONFIGURATION')
  .default('false')
  .asBool();
const LOG_REQUESTS = env.get('LOG_REQUESTS').default('false').asBool();
const DEBUG_DELTA_MATCH = env
  .get('DEBUG_DELTA_MATCH')
  .default('false')
  .asBool();
const DEBUG_TRIPLE_MATCHES_SPEC = env
  .get('DEBUG_TRIPLE_MATCHES_SPEC')
  .default('false')
  .asBool();
const DEBUG_DELTA_SEND = env.get('DEBUG_DELTA_SEND').default('false').asBool();

export default {
  LOG_SERVER_CONFIGURATION,
  LOG_REQUESTS,
  DEBUG_DELTA_MATCH,
  DEBUG_DELTA_SEND,
  DEBUG_TRIPLE_MATCHES_SPEC,
};
