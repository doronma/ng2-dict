import { DictWord } from '../beans/dict-word';

export class DummyWordsData {

    wordGroupList: string[] = ['group1', 'group2'];
    getWordGroupList(): string[] {
        return this.wordGroupList;
    }

    getDictWords(selectedGroup: string): DictWord[] {
        let result: DictWord[];

        if (selectedGroup == 'group1') {
            let word1: DictWord = new DictWord('about', 'בנוגע');
            let word2: DictWord = new DictWord('actually', 'למעשה');
            let word3: DictWord = new DictWord('afraid', 'מפחד');
            let word4: DictWord = new DictWord('afternoon', 'אחר הצהריים');
            let word5: DictWord = new DictWord('again', 'שוב');
            let word6: DictWord = new DictWord('almost', 'כמעט');
            let word7: DictWord = new DictWord('already', 'כבר');
            let word8: DictWord = new DictWord('always', 'תמיד');
            let word9: DictWord = new DictWord('angry', 'כועס');
            let word10: DictWord = new DictWord('another', 'אחר');
            result = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10];
        }
        else {
             let word1: DictWord = new DictWord('answer', 'תשובה');
            let word2: DictWord = new DictWord('anything', 'כל דבר');
            let word3: DictWord = new DictWord('beautiful', 'יפה');
            let word4: DictWord = new DictWord('because', 'בגלל ש');
            let word5: DictWord = new DictWord('behind', 'מאחורי');
            let word6: DictWord = new DictWord('believe', 'האמין');
            let word7: DictWord = new DictWord('better', 'טוב יותר');
            let word8: DictWord = new DictWord('birthday', 'יום הולדת');
            let word9: DictWord = new DictWord('break', 'שבר');
            let word10: DictWord = new DictWord('brother', 'אח');
            result = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10];
        }
      
        return result;

    }
}
