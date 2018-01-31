// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Level } from 'ng2-logger';

export const environment = {
  production: false,
  defaultUiLanguage: 'en',

  logger: {
    default: {
      levels: [
        Level.ERROR,
        Level.WARN,
        Level.INFO
        /* , Level.DATA */
      ]
    },
    sinks: {
      application: {
        name: 'application',
        levels: [
          Level.ERROR,
          Level.WARN,
          Level.INFO
          /* , Level.DATA */
        ]
      },
      rest: {
        name: 'rest',
        levels: [
          Level.ERROR,
          Level.WARN,
          Level.INFO
          /* , Level.DATA */
        ]
      },
      router: {
        name: 'router',
        levels: [
          Level.ERROR,
          Level.WARN,
          Level.INFO
          /* , Level.DATA */
        ]
      },
      model: {
        name: 'model',
        levels: [
          Level.ERROR,
          Level.WARN,
          Level.INFO
          /* , Level.DATA */
        ]
      },
    }
  }
};
