import Voiture from '../app/Voiture';

describe('Calculator', () => {
    var subject: Voiture;

    beforeEach(function() {
        subject = new Voiture();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result: number = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});