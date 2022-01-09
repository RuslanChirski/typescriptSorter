import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection    = new NumberCollection([4, -3, -16, 10]);
const characterCollection = new CharacterCollection('ZxYmba');

const linkedList          = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-7);
linkedList.add(3);


numberCollection.sort();
characterCollection.sort();
linkedList.sort();
console.log(numberCollection.data);
console.log(characterCollection.data);
linkedList.print();
