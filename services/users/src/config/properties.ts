import { config } from 'dotenv';
import Env from './env';

if (process.env.NODE_ENV !== Env.PRODUCTION) {
  config();
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      PORT: string
      TENANT_URL: string
    }
  }
}

const properties = {
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '', 10),
  tenantUrl: process.env.TENANT_URL,
};

export default properties;
