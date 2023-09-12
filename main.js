function requiredData(param) {
    throw new Error(param + " es obligatorio");
}
function isArray(subject) {
    return Array.isArray(subject) //devuelve true o false
}

function LearningPath({
    name = requiredData('name'),
    courses = []
}) {
    this.name = name;
    this.courses = courses;

}

function Student({  //prototipo
    name = requiredData("name"),
    email = requiredData("Email"),
    age,
    Twitter,
    LinkedIn,
    GitHub,
    learningPaths = [],
    approvedCourses = []

} = {}) {


    this.name = name;
    this.age = age;
    this.email = email;
    this.socialMedia = {
        LinkedIn,
        GitHub,
        Twitter
    }
    this.approvedCourses = approvedCourses;

    const private = {
        "_learningPaths": []
    }

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"]
        },
        set(newLp) {
            if (newLp instanceof LearningPath) { // si cada uno de estos items SI son instancias de LearningPath
                private["_learningPaths"].push(newLp); //entonces les iremos hacienod push al array vacio que acabamos de agregar
            } else {
                console.warn("Alguno de los learningPaths no es prototipe de LearningPath");
            }
        }
    })

    // if (isArray(learningPaths)) { // si learningPaths es un array
    //     this._learningPaths = []; // _learningPaths sera igual a un array vacío
    //     for (let learningPathItem of learningPaths) {
    //         this.learningPaths = learningPathItem
    //     }
    // }
    for (let learningPathItem of learningPaths) {
        this.learningPaths = learningPathItem
    }


}



const webSchool = new LearningPath({
    name: "Desarrollo web",
    courses: []
});
const dataSchool = new LearningPath({
    name: "Data",
    courses: []
});
const Nicolas = new Student({
    name: "Nicolás García",
    email: "xnicolas@gmail.com",
    learningPaths: [
        webSchool,
        dataSchool,
        { name: "marketing", courses: [] }

    ],
    age: 26,
    LinkedIn: "linkedIn/nicolasG",
    GitHub: "Github/xnicolasg"
});


// ------------------------


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