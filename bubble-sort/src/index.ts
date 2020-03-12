// import { NumbersCollection } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -60]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('ZZaHyITx');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// const sorter = new Sorter(charactersCollection);
// sorter.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(99);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
