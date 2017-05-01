
export class MatchResult implements jasmine.CustomMatcherResult {
    public pass: boolean;
    public message: string = "undefined message";

    constructor(action: (result: MatchResult) => boolean) {
        this.pass = action(this);
    }
}