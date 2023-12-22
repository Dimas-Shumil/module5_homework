let x = []

switch (typeof x) {
    case 'namber':
        console.log('x - число')
        break
    case 'string':
        console.log('x - строка')
        break
    case 'boolean':
        console.log('x - boolean')
        break
    default:
        console.log('тип не определен')
}
