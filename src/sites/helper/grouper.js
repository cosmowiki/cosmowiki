export default class Grouper {
  
  constructor(objectToGroup) {
    this.objectToGroup = objectToGroup;
  }
  
  byName() {
    const property = 'name';
    const toBeGrouped = this.objectToGroup;
    const grouped = {};
    toBeGrouped.forEach(item => {
      const groupingKey = item[property][0].toUpperCase();
      if (!grouped[groupingKey]) {
        grouped[groupingKey] = {
          key: groupingKey,
          data: []
        };
      }
      grouped[groupingKey].data.push(item);
    });
    return grouped;
  }
}
