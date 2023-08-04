const SrPizza = {
    name: 'Nicolás',
    age: 26,
    approvedCourses: ['Curso 1'],

    AddCourse(newCourse) {
        console.log('this: ', this);
        console.log('this.approvedCourses', this.approvedCourses);
        this.approvedCourses.push(newCourse)
    }
}

// console.log(Object.keys(SrPizza));
// console.log(Object.getOwnPropertyNames(SrPizza))
// console.log(Object.entries(SrPizza));

Object.seal(SrPizza) // => bloquea  eliminarlo con delete
// Object.freeze(SrPizza) // => Bloquea el porder Renombrarlo y eliminarlo

console.log(Object.getOwnPropertyDescriptors(SrPizza))

Object.defineProperty(SrPizza, 'PruebaNASA', {
    value: 'OVNIS',
    writable: false,
    enumerable: false,
    configurable: false
})
Object.defineProperty(SrPizza, 'Navegador', {
    value: 'Brave',
    writable: true,
    enumerable: false, // => Bloquea el enumerarlo con Object.Keys
    configurable: true
})
Object.defineProperty(SrPizza, 'Editor', {
    value: 'VSC',
    writable: false, // => Bloquea el poder renombrarlo
    enumerable: true,
    configurable: true
})
Object.defineProperty(SrPizza, 'Game', {
    value: 'AOM',
    writable: true,
    enumerable: true,
    configurable: false // => Bloquea el poder eliminarlo con Delete
})