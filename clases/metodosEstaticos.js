function SuperObject() {
    SuperObject.isObj = function (subject) {
        return typeof subject == 'object'; //devuelve true o false
    }
    SuperObject.isArray = function (subject) {
        return Array.isArray(subject) //devuelve true o false
    }
    SuperObject.deepCopy = function (subject) {
        let copySubject;

        const subjectArray = SuperObject.isArray(subject); //subject es Array ?
        const subjectObj = SuperObject.isObj(subject); //subject es Obj ?

        if (subjectArray) {
            copySubject = [] //si es array copySubject ...
        } else if (subjectObj) {
            copySubject = {} //si es obj copySubject ...
        } else {
            return subject //si es otra cosa lo devuelve tal cual
        }

        for (key in subject) {
            const keyObj = SuperObject.isObj(subject[key]) //se valida que cada propiedad sea un objeto

            if (keyObj) { // si keyObj entonces ..
                copySubject[key] = SuperObject.deepCopy(subject[key]);
            } else {
                if (subjectArray) {
                    copySubject.push(subject[key])
                } else {
                    copySubject[key] = subject[key];
                }
            }
        }

        return copySubject
    }

}
console.log(SuperObject.deepCopy({ key: 'value' }));