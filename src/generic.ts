interface sstorage<T> {
  [key: string]: T
}

class LocalStorage<T> {
  private storage: sstorage<T> = {}
  set(key: string, value: T) {
      this.storage[key] = value;
  }
}

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("test", true);

const stringStorage = new LocalStorage<string>();
stringStorage.set("test", "test")

// "use strict";
// class LocalStorage {
//     constructor() {
//         this.storage = {};
//     }
//     set(key, value) {
//         this.storage[key] = value;
//     }
// }
// const booleanStorage = new LocalStorage();
// booleanStorage.set("test", true);
// const stringStorage = new LocalStorage();
// stringStorage.set("test", "test");