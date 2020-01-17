import { compose, join } from "ramda";

const userProcessor = (function() {
  const hashTable = new Set();
  const logs = [];
  let recurringVisits = 0;
  let newVisits = 0;

  const checkAndAdd = person => {
    if (hashTable.has(person)) {
      recurringVisits++;
      return true;
    }

    hashTable.add(person);
    newVisits++;

    return false;
  };

  const handleRow = people => {
    const numberToProcess = people.length;
    while (people.length) {
      const person = people.pop();
      checkAndAdd(person);
    }

    return `${numberToProcess} users processed`;
  };

  const writeLogs = info => logs.push(info);

  const getStats = () => {
    const stats = (newVisits / recurringVisits).toFixed(3);

    return `
    New to reccuring visitors ratio is ${stats}
    
    ===========================================
    
    Logs:
    
    ${join(" | ", logs)}
    `;
  };

  return {
    process: compose(getStats, writeLogs, handleRow)
  };
})();

export default userProcessor;
