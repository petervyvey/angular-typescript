// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Level } from 'ng2-logger';

export const environment = {
    production: false,
    defaultUiLanguage: 'en',

    timeZoneDb: {
        url: 'https://api.timezonedb.com/v2',
        apiKey: 'WH4CEN85KTC9',
        format: 'json'
    },

    logger: {
        default: {
            levels: [
                Level.ERROR,
                Level.WARN,
                Level.INFO,
                /* , Level.DATA */
            ]
        },
        sinks: {
            application: {
                name: 'application',
                levels: [
                    Level.ERROR,
                    Level.WARN,
                    Level.INFO,
                    /* , Level.DATA */
                ]
            },
            http: {
                name: 'http',
                levels: [
                    Level.ERROR,
                    Level.WARN,
                    Level.INFO,
                    /* , Level.DATA */
                ]
            },
            router: {
                name: 'router',
                levels: [
                    Level.ERROR,
                    Level.WARN,
                    Level.INFO,
                    Level.DATA
                ]
            },
            store: {
                name: 'store',
                levels: [
                    Level.ERROR,
                    Level.WARN,
                    Level.INFO,
                    /* , Level.DATA */
                ]
            },
        }
    }
};
