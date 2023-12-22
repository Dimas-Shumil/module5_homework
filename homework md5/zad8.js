let listRar = new Map([
    ['car','red'],
    ['apple','green'],
    ['bluberry','blue']

]
)

for (let key of listRar.keys()) {
    let value = listRar.get(key)
    console.log(key)
    console.log(value)
}