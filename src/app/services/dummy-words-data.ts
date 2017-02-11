import { DictWord } from '../beans/dict-word';

export class DummyWordsData {

    wordGroupList: string[] = ['group1', 'group2', 'group3'];
    getWordGroupList(): string[] {
        return this.wordGroupList;
    }

    getDictWords(selectedGroup: string): DictWord[] {
        let result : DictWord[];

        if (selectedGroup == 'group1') {
            let word1: DictWord = new DictWord('word1', 'אחד');
            let word2: DictWord = new DictWord('word2', 'two');
            let word3: DictWord = new DictWord('word3', 'three');
            let word4: DictWord = new DictWord('word4', 'four');
            result =  [word1, word2, word3, word4];
        }
        else {
            let word1: DictWord = new DictWord('word5', 'five');
            let word2: DictWord = new DictWord('word6', 'six');
            let word3: DictWord = new DictWord('word7', 'seven');
            let word4: DictWord = new DictWord('word8', 'eight');
            result =  [word1, word2, word3, word4];
        }
        console.log(result);
        return result;

    }
}
