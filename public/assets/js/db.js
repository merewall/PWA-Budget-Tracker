let db;
// create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  // create object store called "BudgetStore" and set autoIncrement to true
  db.createObjectStore("BudgetStore", {
    keyPath: "id",
    autoIncrement: true
  });  
};

request.onsuccess = function () {
  db = request.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log("Error: ", request.error)
};

function saveRecord(record) {
  console.log(record)
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  // access your pending object store
  const BudgetStore = transaction.objectStore("BudgetStore");
  // add record to your store with add method.
  BudgetStore.add(record)
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  // access your pending object store
  const BudgetStore = transaction.objectStore("BudgetStore");
  // get all records from store and set to a variable
  const getAll = BudgetStore.getAll();
  
  getAll.onsuccess = function () {
    console.log(getAll.result);
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          const transaction = db.transaction(["BudgetStore"], "readwrite");
          // access your pending object store
          const BudgetStore = transaction.objectStore("BudgetStore");
          // clear all items in your store
          BudgetStore.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
