import {Mock} from '../node_modules/moq.ts/index';
import {It} from '../node_modules/moq.ts/index';
import {Times} from '../node_modules/moq.ts/index';
import {moqToHaveBeenCalledMatcher} from '../src/toHaveBeenCalledMatcher';

interface ITestObject {
    property: string;
}

describe('Mock: Get property', () => {

    it('Verifies get property', () => {
        const mock = new Mock<ITestObject>();
        const object = mock.object;

        object.property;

        expect(mock).moqToHaveBeenCalled(instance => instance.property, Times.AtLeast(2));
    });
});