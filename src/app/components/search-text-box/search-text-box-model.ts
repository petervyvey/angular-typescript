export interface ISearchTextBoxModel {
    query: string;
}

export class SearchTextBoxModel implements ISearchTextBoxModel {
    constructor(public query: string = '') {
    }
}
