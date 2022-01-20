export{}

interface Teacher {
    id : number;
    name: string;
    age : number;
    department: string;
    phone: string;
}


let teacher:Teacher = {
    id: 420,
    name: "Dex",
    age: 59,
    department: "Software Engineering",
    phone: "087 74 82 22"
}

function displayTeacher(teacher:Teacher) {
    console.log(teacher);
}

displayTeacher(teacher)