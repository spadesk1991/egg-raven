
import * as  Raven from 'raven';
  declare module 'egg' {
    export interface Application {
      raven: typeof Raven
    }
    export interface Context {
      raven: typeof Raven
    }
     // extend your config
    export interface EggAppConfig {
        raven: {
            url:String
        }
    }
  };