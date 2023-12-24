let myMap = new Map();
myMap.set("optic",'MTS');
myMap.set(3.14, 'Число Пи');
myMap.set(true, 777);
for (let key of myMap.keys()) {
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`)
}       
  