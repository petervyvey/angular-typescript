import { Log, Level } from 'ng2-logger';

export class LogInfo {

    constructor(log: Log, isDefault: boolean = false) {
        this._log = log;
        this._isDefault = isDefault;
    }

    private _log: Log;
    public get log(): Log { return this._log; }

    private _isDefault = false;
    public get isDefault(): boolean { return this._isDefault; }

    /* tslint:disable-next-line:no-any */
    public error(message: string, ...params: any[]): void { (this.log as any).er(message, params); }

    /* tslint:disable-next-line:no-any */
    public info(message: string, ...params: any[]): void { (this.log as any).i(message, params); }

    /* tslint:disable-next-line:no-any */
    public warn(message: string, ...params: any[]): void { (this.log as any).w(message, params); }

    /* tslint:disable-next-line:no-any */
    public debug(message: string, ...params: any[]): void { (this.log as any).d(message, params); }
}

export interface ILogIndexer {
    [name: string]: LogInfo;
}

export class Logger {

    public static get DEFAULT_LOG_NAME(): string { return 'bootstrap'; }

    public static sinks: ILogIndexer = {};

    public static addLog(name: string, log: Log, isDefault: boolean = false) {
        Logger.sinks[name] = new LogInfo(log, isDefault);

        if (isDefault) {
            Logger.defaultSink = Logger.sinks[name];
        }
    }

    /* tslint:disable-next-line:no-any */
    public static error(message: string, ...params: any[]): void { (Logger.defaultSink.log as any).er(message, params); }

    /* tslint:disable-next-line:no-any */
    public static info(message: string, ...params: any[]): void { (Logger.defaultSink.log as any).i(message, params); }

    /* tslint:disable-next-line:no-any */
    public static warn(message: string, ...params: any[]): void { (Logger.defaultSink.log as any).w(message, params); }

    /* tslint:disable-next-line:no-any */
    public static debug(message: string, ...params: any[]): void { (Logger.defaultSink.log as any).d(message, params); }

    /* tslint:disable-next-line:no-any */
    private static defaultSink: LogInfo = new LogInfo(Log.create(Logger.DEFAULT_LOG_NAME, Level.ERROR, Level.INFO, Level.WARN, Level.DATA));
}
