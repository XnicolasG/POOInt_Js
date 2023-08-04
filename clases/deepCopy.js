const obj1 = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
    gretting: undefined,
      hello(grettings) {
           this.gretting = grettings
      }
  };


function isObj(subject) {
    return typeof subject == 'object'; //devuelve true o false
}

function isArray(subject) {
    return Array.isArray(subject) //devuelve true o false
}

// Recibe un parametro que puede ser un objeto, array u otro tipo de dato
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