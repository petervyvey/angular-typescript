export interface IModel {
    query: string;
}

export class Model implements IModel {
    constructor(public query: string = '') {
    }
}
