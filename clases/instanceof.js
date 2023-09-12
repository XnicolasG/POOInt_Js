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
    // const private = { 
    //     _name: name,
    //     _courses : courses
    // }
    // const public = {

    //     get courses() {
    //         return private._coursescourses;
    //     }, 

    //     set courses(newCourses) {
    //         if (newCourses.length != 0) {
    //             private._courses = newCourses;
    //         } else {
    //             console.warn('Tu nombre debe tener al menos 1 caracter');
    //         }
    //     },
    //     get name() {
    //         return private._name;
    //     },
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private._name = newName;
    //         } else {
    //             console.warn('Tu nombre debe tener al menos 1 caracter');
    //         }
    //     },
    // }

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

    if (isArray(learningPaths)) { // si learningPaths es un array
        this._learningPaths = []; // _learningPaths sera igual a un array vacío
        for (const learningPathItem of learningPaths) { //se itera cada item en learningPaths 
            if (learningPathItem instanceof LearningPath) { // si cada uno de estos items SI son instancias de LearningPath
                this._learningPaths.push(learningPathItem); //entonces les iremos hacienod push al array vacio que acabamos de agregar
            }
        }
    }


    // const private = {
    //     _privateName: name,
    //     _learningPaths: learningPaths
    // };

    // const public = {
    //     age,
    //     email,
    //     approvedCourses,
    //     socialMedia: {
    //         LinkedIn,
    //         GitHub
    //     },

    //     get name() {
    //         return private._privateName;
    //     },
    //     set name(newName) {
    //         if (newName.length != 0) {
    //             private._privateName = newName;
    //         } else {
    //             console.warn('Tu nombre debe tener al menos 1 caracter');
    //         }
    //     },

    //     get learningP() {
    //         return private._learningPaths;
    //     },
    //     set learningP(newLP) {
    //         if (!newLP.name) {
    //             console.warn("El Lp no tiene propiedad de name");
    //             return
    //         }
    //         if (!isArray(newLP.courses)) {
    //             console.warn("Tu Lp no es una lista de cursos");
    //             return
    //         }else if (!newLP.courses) {
    //             console.warn("Tu Lp no tiene courses");

    //         }
    //         private._learningPaths.push(newLP)
    //     },
    // }
    // return public


}

Object.defineProperty(Student.prototype, "LearningPath", {
    get() {
        return this._learningPaths
    },
    set(newLp) {
        for (const learningPathItem of learningPaths) {
            if (learningPathItem instanceof LearningPath) {
                this._learningPaths.push(learningPathItem);
            }
        }
    }
})

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