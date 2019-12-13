
import * as  Raven from 'raven';
  declare module 'egg' {
    export interface Application {
      raven: Raven
      hh :String
    }
     // extend your config
    export interface EggAppConfig {
        raven: {
            url:String
        }
    }
  };