import Ability from '../../../src/Domain/Ability/Ability';
import { AbilityName } from '../../../src/Domain/Ability/types';

describe('Ability', () => {
    it('should show displayed name', () => {
        const ability = new Ability(AbilityName.Strength);

        expect(ability.name).toEqual('Strength');
    });
});
