const connection = require("./db/connection");
const {addMovie, listMovies, deleteMovie, updateMovie} = require("./utils");


const command = process.argv[2];

const app = async () => {
    // console.log(process.argv);
    if (command === "add"){
        const newMovie = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        };
        console.log(newMovie);
        await connection(addMovie, newMovie);
    } else if (command === "list"){
        await connection(listMovies);
    } else if (command === "update"){
        const newMovie2 = {
            title: process.argv[3],
            newTitle: process.argv[4]            
        };
        await connection(updateMovie, newMovie2);    
    } else if (command === "delete"){                
        await connection(deleteMovie, process.argv[3]);
    } else {
        console.log("Incorrect Input")
    }
};

app();