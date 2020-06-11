let tiendas = [{
    _id: 1,
    nombre: "Minisúper",
    domicilio: "Av. La Cantera, #123",
    telefono: "499923423",
    dueño: "Abraham Carranza Macías"
},
{
    _id: 2,
    nombre: "Mi Ranchito",
    domicilio: "Av. La Cantera, #123",
    telefono: "499923423",
    dueño: "Cecilia Mata Muñoz"
},
{
    _id: 3,
    nombre: "Botanas",
    domicilio: "Av. La Cantera, #123",
    telefono: "499923423",
    dueño: "María Isabel Hérnandez Vite"
}
];

let proveedores = [{
    _id: 1,
    nombre: "Francisco Tapia",
    empresa: "Bimbo",
    telefono: "44932423423",
    idTienda: 3
},
{
    _id: 2,
    nombre: "Pedro de la Cruz",
    empresa: "Santorini",
    telefono: "49234234324",
    idTienda: 2
}, {
    _id: 3,
    nombre: "Joel",
    empresa: "Coca Cola",
    telefono: "449123123123",
    idTienda: 1
}
];

let getTiendabyid= (idTienda) =>{

    return new Promise((resolve, reject) =>{
        let tienda = tiendas.find((tienda) =>{
               return tienda._id == idTienda;
        });

        if(!tienda){
            reject('No se puede encontrar la Tienda');
        }else{
            resolve(tienda);
        }
       
    });
}

let getProvedorbyid = (idProveedor) =>{
    return new Promise((resolve,reject)=> {
        let proveedor = proveedores.find((proveedor) =>{
            return proveedor.idTienda == idProveedor;
        });
        if(!proveedor){
            reject('No se puede encontrar el Proveedor');
        }else{
            resolve(proveedor);
        }
    });
}

getTiendabyid(1).then((tienda)=>{

    getProvedorbyid(tienda._id).then((proveedor) => {
        console.log(`Mi nombre es ${tienda.dueño}, soy dueño(a) de la tienda ${tienda.nombre} con domicilio ${tienda.domicilio}
        y mi proveedor de la empresa ${proveedor.empresa} es ${proveedor.nombre}`);
    }).catch((err) =>{
        console.log(err);
    });
}).catch((err)=>{
    console.log(err);
});