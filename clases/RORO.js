function requiredData(param){
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredData("name"),
    age,
    email = requiredData("Email"),
    Twitter = undefined,
    LinkedIn,
    GitHub,
    learningPaths = [],
    approvedCourses = []

} = {}){
    return {
        name,
        age,
        email,
        socialMedia:{
            LinkedIn,
            GitHub
        }
    };
}

const NicolasG = createStudent({
    name: "Nicolás García",
    email: "xnicolas@gmail.com",
    age: 26,
    LinkedIn: "linkedIn/nicolasG",
    GitHub: "Github/xnicolasg"
});