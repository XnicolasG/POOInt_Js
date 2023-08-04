function requiredData(param) {
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

} = {}) {

    const private = {
        _privateName: name,
    };

    const public = {
        age,
        email,
        socialMedia: {
            LinkedIn,
            GitHub
        },
        ReadName() {
            return private._privateName;
        },
        ChangeName(newName) {
            private._privateName = newName;
        },
    };

    Object.freeze(public, "ReadName");
    Object.freeze(public, "ChangeName");

    return public
        
    
}

const NicolasG = createStudent({
    name: "Nicolás García",
    email: "xnicolas@gmail.com",
    age: 26,
    LinkedIn: "linkedIn/nicolasG",
    GitHub: "Github/xnicolasg"
});
