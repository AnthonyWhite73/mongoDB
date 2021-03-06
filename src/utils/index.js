const exp = require("constants");

exports.addMovie = async (collection, dataObj) =>{
    try{        
        await collection.insertOne(dataObj)
    } catch(error){
        console.log(error)
    }
}

exports.listMovies = async (collection) => {
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error){
        console.log(error);
    }
}

exports.updateMovie = async (collection, dataObj) =>{
    try{
        //const update1 = await collection.findOneAndUpdate({title: "a"}, {$set: {title : "superman"}})
        const update1 = await collection.findOneAndUpdate({title: dataObj.title}, {$set: {title : dataObj.newTitle}})
        
        console.log(update1);
    } catch(error){
        console.log(error);
    }
}

exports.deleteMovie = async (collection, dataObj) =>{
    try{
        const delete1 = await collection.deleteOne({title: dataObj});
        console.log(delete1);        
    }catch(error){
        console.log(error);
    }
}