function isObj(subject) {
    return typeof subject == 'object'; //devuelve true o false
}

function isArray(subject) {
    return Array.isArray(subject) //devuelve true o false
}

function deepCopy(subject) {
    let copySubject;

    const subjectArray = isArray(subject); //subject es Array ?
    const subjectObj = isObj(subject); //subject es Obj ?

    if (subjectArray) {
        copySubject = [] //si es array copySubject ...
    }else if(subjectObj){
        copySubject = {} //si es obj copySubject ...
    }else{
        return subject //si es otra cosa lo devuelve tal cual
    }

    for(key in subject){
        const keyObj = isObj(subject[key]) //se valida que cada propiedad sea un objeto

        if (keyObj) { // si keyObj entonces ..
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if(subjectArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject
}

const student = {
    name: undefined,
    age:undefined,
    email: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    SocialMedia:{
        twitter: undefined,
        LinkedIn: undefined,
        Github: undefined
    }
}

const Nicolas = deepCopy(student);
Object.seal(Nicolas)