import { IMock } from 'moq.ts';
import { Times } from 'moq.ts';
import { IExpectedExpression } from 'moq.ts';
import { MatchResult } from './match.result';

export function moqToHaveBeenCalledMatcher() {
    return {
        moqToHaveBeenCalled: (util, customEqualityTesters) => {
            return {
                compare: (actual: IMock<any>, ...args: any[]): jasmine.CustomMatcherResult => {
                    const expected: IExpectedExpression<any> = args[0];
                    const times: Times = args.length > 1 ? args[1] : undefined;
                    return new MatchResult((result: MatchResult) => {
                        try {
                            actual.verify(expected, times);
                        } catch (e) {
                            result.message = e.message;
                            return false;
                        }
                        return true;
                    });
                }
            }
        }
    }
}