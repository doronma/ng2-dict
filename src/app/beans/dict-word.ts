export class DictWord {
    private eng: string;
    private heb: string;
    constructor(eng: string, heb: string) {
        this.eng = eng;
        this.heb = heb;
    }

    get hebWord(): string {
        return this.heb;
    }
    get engWord(): string {
        return this.eng
    }
}
