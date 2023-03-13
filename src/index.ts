import Ability from './Domain/Ability/Ability';
import { AbilityName } from './Domain/Ability/types';

const strength = new Ability(AbilityName.Strength);

console.log(strength);
