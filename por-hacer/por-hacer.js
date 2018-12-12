const fs = require('fs');

//el listado por hacer será un arreglo donde se guarden todos los eventos registrados

let listadoHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoHacer); //pasando el arreglo a formato JSON

    fs.writeFile('data-base/data.json', data, (err) => { //primero va el path seguido del nombre del archivo, la data y el callback
        if(err) throw new Error('No se pudo grabar',err);
            
    });
}

const cargarDB = () => {

    try {
        listadoHacer = require('../data-base/data.json');
    } catch (error) {
        listadoHacer = [];
    }
}

const crear = (descripcion) => {
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoHacer;
}

const actualizar = (descripcion, completado=true) => {
    cargarDB();

    let index = listadoHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });

    if(index>=0){
        listadoHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

//la función filter permite eliminar (filtrar) algún elemento de un arreglo y retorna un nuevo arreglo sin el elemento
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoHacer.filter((tarea) => {
        return tarea.descripcion !== descripcion;
        //retorna al nuevoListado todas las tareas que NO cumplan con la condicion, por lo cual, excluye al no deseado       
    })

    if(listadoHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoHacer = nuevoListado;
        guardarDB();
        return true;
    }
 
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}