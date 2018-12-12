const argv = require('yargs')
        .command('crear', 'éste comando crea una nueva tarea por hacer',{
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Éste comando crea una nueva tarea por hacer'
            }
        })
        .command('listar', 'éste comando muestra las tareas por hacer', {
            descripcion: {
                //demand: true,
                alias: 'l',
                desc: 'Éste comando muestra las tareas por hacer'
            }
        })
        .command('actualizar', 'éste comando actualiza el estatus de una tarea', {
            descripcion: {
                demand: true,
                alias: 'a',
                desc: 'Éste comando actualiza el estatus de una tarea'
            },
            completado: {
                default: true,
                alias: 'c',
                desc: 'Marca como completado o como pendiente una tarea'
            }
        })
        .command('borrar', 'éste comando borra una tarea por hacer', {
            descripcion: {
                //demand: true,
                alias: 'b',
                desc: 'Borra una tarea del listado de tareas por hacer'
            }
        })
        .help()
        .argv;
//hasta acá ya se encuentra configurado el objeto argv 
//pero para poder ser usado en otro archivo, éste necesita ser exportado

module.exports = {
    argv
}









