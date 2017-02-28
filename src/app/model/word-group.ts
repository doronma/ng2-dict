import { DictWord } from '.';
export class WordGroup {
    private groupName : string;
    private wordList : DictWord[];
    constructor(groupName:string, wordList: DictWord[]){
        this.groupName = groupName;
        this.wordList = wordList;
    }

}
