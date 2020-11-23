class Storage {
  constructor(array) {
    this.items = array
  }

  getItems() {
    return this.items
  }
  
  addItem(item) {
    this.items.push(item)
  }
  
  removeItem(item) {
    for (const purt of this.items) {
      if (purt === item) {
          this.items.splice(this.items.indexOf(purt), 1)
        }
    }
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);