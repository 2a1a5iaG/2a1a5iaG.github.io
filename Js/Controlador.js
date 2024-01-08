$( document ).ready( function() {
    aplicacionParametros();
    aplicacionParametrosPerfilesNomina();
    aplicacionParametrosPerfilesConvocatoria();
    aplicacionParametrosPerfilesIncidentes()
} );


var nameListaParametros = "Parametros";
var ValueAplicacion = "Aplicación";

//variables de perfiles

var PerfilNomina = "Perfil_Nomina";
// var PerfilBDUC = "Perfil_BDUC";
var PerfilIncidentes = "Perfil_IM";
var PerfilConvocatorias =  "Perfil_Convocatorias";


async function aplicacionParametros() {
    var url = "/_api/web/lists/getByTitle('" + nameListaParametros + "')/items?$select=*&$filter=Type eq 'Aplicación'&$top=5000";
    var data = await ConsultaDatos(url);
    var htmlSistema = "<option>Seleccione...</option>";

    for (var i = 0; i < data.length; i++) {
        var IDAplicacion = data[i].ID;
        var NombreAplicacion = data[i].Value;
        htmlSistema += "<option value='" + IDAplicacion + "'>" + NombreAplicacion + "</option>";
    }
    document.getElementById("AppRemitente").innerHTML = ("beforeend", htmlSistema);
}


async function aplicacionParametrosPerfilesNomina() {
    var url = "/_api/web/lists/getByTitle('" + nameListaParametros + "')/items?$select=*&$filter=Type eq '"+PerfilNomina+"'&$top=5000";
    var data = await ConsultaDatos(url);
    var htmlSistema = "<option>Seleccione...</option>";

    for (var i = 0; i < data.length; i++) {
        var IDPerfil = data[i].ID;
        var NombrePerfil = data[i].Value;
        htmlSistema += "<option value='" + IDPerfil + "'>" + NombrePerfil + "</option>";
    }
    document.getElementById("PerfilUsuario").innerHTML = ("beforeend", htmlSistema);
}

async function aplicacionParametrosPerfilesConvocatoria() {
    var url = "/_api/web/lists/getByTitle('" + nameListaParametros + "')/items?$select=*&$filter=Type eq '"+PerfilConvocatorias+"'&$top=5000";
    var data = await ConsultaDatos(url);
    var htmlSistema = "<option>Seleccione...</option>";

    for (var i = 0; i < data.length; i++) {
        var IDPerfil = data[i].ID;
        var NombrePerfil = data[i].Value;
        htmlSistema += "<option value='" + IDPerfil + "'>" + NombrePerfil + "</option>";
    }
    document.getElementById("PerfilLogin").innerHTML = ("beforeend", htmlSistema);
}

async function aplicacionParametrosPerfilesIncidentes() {
    var url = "/_api/web/lists/getByTitle('" + nameListaParametros + "')/items?$select=*&$filter=Type eq '"+PerfilIncidentes+"'&$top=5000";
    var data = await ConsultaDatos(url);
    var htmlSistema = "<option>Seleccione...</option>";

    for (var i = 0; i < data.length; i++) {
        var IDPerfil = data[i].ID;
        var NombrePerfil = data[i].Value;
        htmlSistema += "<option value='" + IDPerfil + "'>" + NombrePerfil + "</option>";
    }
    document.getElementById("PerfilIncidentes").innerHTML = ("beforeend", htmlSistema);
}


//Funcion del PQR//
async function crearDatosPqr(){
    var Nombre = document.getElementById ("NombreRemitente").value;
    var Correo  = document.getElementById ("CorreoRemitente").value;
    var Aplicacion  = document.getElementById ("AppRemitente").value;
    var Descripcion  = document.getElementById ("DescripcionRemitente").value;
    var Spdata = 'SP.Data.PqrsListItem';


    if (Correo.includes("@globalhitss.com")  || Correo.includes("@claro.com.co") &&  Nombre != '' || Descripcion != '' || Aplicacion != '' ) {
        
     var DataCrear = {

        //Name colum  : nameVar,
        Title: Nombre,  
        Correo: Correo,
        AplicacionId: Aplicacion,
        Descripcion: Descripcion

     }
     console.log(DataCrear);
     var datacreadaFuncion = await CrearDataPqr(DataCrear,Spdata);
     //await CrearDataPqr();
    } else {
        alert("Ingrese un correo válido");
    }
    
}

//_________________________________________Soporte/Ingresoso___________________________________________________//


// async function crearDatosSoporte(){
//     var Cedula = document.getElementById ("CedulaUsuario").value;
//     var CodigoSAP  = document.getElementById ("CodigoSAP").value;
//     var Nombre = document.getElementById ("Nombre").value;
//     var NombreProyecto = document.getElementById ("NombreProyecto").value;
//     var IDproyecto  = document.getElementById ("IDproyecto").value;
//     var CargoReal  = document.getElementById ("CargoReal").value;
//     var CorreoHitss  = document.getElementById ("CorreoHitss").value;
//     var CorreoClaro  = document.getElementById ("CorreoClaro").value;
//     var DireccionClaro  = document.getElementById ("DireccionClaro").value;
//     var GerenteClaro  = document.getElementById ("GerenteClaro").value;
//     var Coordinador  = document.getElementById ("Coordinador").value;
//     var GerenteHitss  = document.getElementById ("GerenteHitss").value;
//     var Perfil = document.getElementById ("Perfil").value;
//     var Comentario  = document.getElementById ("Comentario").value;

//     var Spdata = 'SP.Data.SoporteListItem';
 

//     if (Correo.includes("@globalhitss.com")  || Correo.includes("@claro.com.co") &&  Nombre != '' || Descripcion != '' || Aplicacion != '' ) {
        
//      var DataCrear = {

//         //Name colum  : nameVar,
//         Title: Nombre,  
//         Cedula: Cedula,
//         IDproyecto: IDproyecto,
//         NombreProyecto: NombreProyecto,
//         CodigoSap: CodigoSAP,
//         CargoReal:CargoReal,
//         CorreoHitss: CorreoHitss,
//         CorreoClaro: CorreoClaro,
//         GerenteClaro: GerenteClaro,
//         DireccionClaro: DireccionClaro,
//         Coordinador: Coordinador,
//         GerenteHitss: GerenteHitss,
//         Perfil: Perfil,
//         Comentario: Comentario

//     }
//      console.log(DataCrear);
//      var datacreadaFuncion = await crearDatosSoporte(DataCrear,Spdata);
//      //await CrearDataPqr();
//     } else {
//         alert("Ingrese un correo válido");
//     }
    
// }
async function crearDatosSoporte() {
    var NombreAplicacion = $('#select-option').val();

    if (NombreAplicacion == "seleccionar") {
        alert("Seleccione una herramienta");
        return
    }

    switch (NombreAplicacion) {
        case 'Novedadesdenomina':
            
            var Cedula = $('#CedulaUsuario').val();
            var CodigoSAP = $('#CódigoSAPUsuario').val(); 
            var Nombre =  $('#NumbresUsuario').val();
            var NombreProyecto = $('#NombreProyectoUsuario').val();
            var IDproyecto = $('#IDproyectoUsuario').val();
            var CargoReal = $('#CargorealUsuario').val();
            var Correo_Hitss = $('#CorreoHitssUsuario').val();
            var Correo_Claro = $('#CorreoClaroUsuario').val();
            var DireccionClaro = $('#DireccionClaroUsuario').val(); 
            var Coordinador = $('#CoordinadorUsuario').val();
            var GerenteHitss = $('#GerenteHitssUsuario').val(); 
            var GerenteClaro = $('#GerenteClaroUsuario').val(); 
            var Perfil = $('#PerfilUsuario').val();
            var Comentario = $('#ComentarioUsuario').val(); 


            if (Cedula == '' || CodigoSAP == '' || Nombre == '' || NombreProyecto =='' || IDproyecto =='' || CargoReal =='' || DireccionClaro =='' || GerenteClaro =='' || Coordinador =='' || GerenteHitss =='' || Perfil =='' || Comentario =='') {
                alert('Campos sin deligenciar');
                return
            } else {
                try {
                    var ObjetNomina = {
                        Title: Nombre,
                        Cedula: Cedula,
                        IDproyecto: IDproyecto,
                        NombreProyecto: NombreProyecto,
                        CodigoSap: CodigoSAP,
                        Cargoreal: CargoReal,
                        CorreoHitss: Correo_Hitss,
                        CorreoClaro: Correo_Claro,
                        GerenteClaro: GerenteClaro,
                        DireccionClaro: DireccionClaro,
                        Coordinador: Coordinador,
                        GerenteHitss: GerenteHitss,
                        PerfilId: Perfil,
                        Comentario: Comentario
                    }

                    console.log(ObjetNomina);
                    
                    var Spdata = 'SP.Data.SoporteListItem';

                    await crearDatosSoporteList(ObjetNomina, Spdata);
                } catch (error) {
                    alert(error);
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al crear los datos.',
                        'error'
                    )
                }  
                break;
                
                
            }
        
            case 'Convocatoria':
            
        
            var Correo_Hitss = $('#CorreoHitssLogin').val();
            var Correo_Claro = $('#CorreoClaroLogin').val();
            var Perfil = $('#PerfilLogin').val();
            var Comentario = $('#ComentarioLogin').val(); 


            if (Perfil =='' || Comentario =='') {
                alert('Campos sin deligenciar');
                return
            } else {
                try {
                    var ObjetConvocatoria = {
                
                        CorreoHitss: Correo_Hitss,
                        CorreoClaro: Correo_Claro,
                        PerfilId: Perfil,
                        Comentario: Comentario
                    }

                    console.log(ObjetConvocatoria);
                    
                    var Spdata = 'SP.Data.SoporteListItem';

                    await crearDatosSoporteList(ObjetConvocatoria, Spdata);
                } catch (error) {
                    alert(error);
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al crear los datos.',
                        'error'
                    )
                }  
                break;
                
                
            }

            case 'IncidetesMayores':
            
        
            var Correo_Hitss = $('#CorreoHitssIncidentes').val();
            var Correo_Claro = $('#CorreoClaroIncidentes').val();
            var Perfil = $('#PerfilIncidentes').val();
            var Comentario = $('#ComentarioIncidentes').val(); 


            if (Perfil =='' || Comentario =='') {
                alert('Campos sin deligenciar');
                return
            } else {
                try {
                    var ObjetIncidentes = {
                        //Colunma - variable//
                        CorreoHitss: Correo_Hitss,
                        CorreoClaro: Correo_Claro,
                        PerfilId: Perfil,
                        Comentario: Comentario
                    }

                    console.log(ObjetIncidentes);
                    
                    var Spdata = 'SP.Data.SoporteListItem';

                    await crearDatosSoporteList(ObjetIncidentes, Spdata);
                } catch (error) {
                    alert(error);
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al crear los datos.',
                        'error'
                    )
                }  
                break;
                
                
            }
    }   
    
    

}


