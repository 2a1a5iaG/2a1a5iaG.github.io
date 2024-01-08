function ConsultaDatos(urlConsulta) {
        var consulta = _spPageContextInfo.webAbsoluteUrl  + urlConsulta;
        console.log(consulta);
        return new Promise((resuelta, rechazada) => {
            $.ajax(
                {
                    url: consulta,
                    type: "GET",
                    headers: { "accept": "application/json;odata=verbose" },
                    success: (datos) => {
                      console.log(datos.d.results);
                        resuelta(datos.d.results);
                    },
                    error: (error) => {
                        console.log(error);
                        rechazada(error);
                    }
                }
            );
        });
}



function CrearDataPqr(ObjetoAcrearLista){
  
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('Pqrs')/Items";
    ObjetoAcrearLista.__metadata = { 'type': 'SP.Data.PqrsListItem' };
      return new Promise((resuelta, rechazada) => {
          $.ajax({
              url: url,
              type: "POST",
              headers: {
                  "accept": "application/json;odata=verbose",
                  "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                  "content-Type": "application/json;odata=verbose"
              },
              data: JSON.stringify(ObjetoAcrearLista),
              success: function (ObjetoAcrearLista) {
                limpiarcamposPqr();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Su registro ha sido enviado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                resuelta(ObjetoAcrearLista);
              },
              error: function (error) {
                  rechazada(error);
                  console.log(error);
              }
          });
      });
  }

  //_____________________Soporte/Ingresos________________________________________________//

  function ConsultaDatosSoporte(urlConsulta) {
    var consulta = _spPageContextInfo.webAbsoluteUrl  + urlConsulta;
    console.log(consulta);
    return new Promise((resuelta, rechazada) => {
        $.ajax(
            {
                url: consulta,
                type: "GET",
                headers: { "accept": "application/json;odata=verbose" },
                success: (datos) => {
                  console.log(datos.d.results);
                    resuelta(datos.d.results);
                },
                error: (error) => {
                    console.log(error);
                    rechazada(error);
                }
            }
        );
    });
}


function crearDatosSoporteList(ObjetoAcrearLista,spdata){
    console.log(ObjetoAcrearLista);
    console.log(spdata);
  
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('Soporte')/items";
    ObjetoAcrearLista.__metadata = { 'type': `${spdata}` };
    console.log(ObjetoAcrearLista);
    console.log(ObjetoAcrearLista.__metadata = { 'type': `${spdata}` });
      return new Promise((resuelta, rechazada) => {
          $.ajax({
              url: url,
              type: "POST",
              headers: {
                  "accept": "application/json;odata=verbose",
                  "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                  "content-Type": "application/json;odata=verbose"
              },
              data: JSON.stringify(ObjetoAcrearLista),
              success: function (ObjetoAcrearLista) {
                limpiarcamposSoporte();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Su registro ha sido enviado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
                //  resuelta(ObjetoAcrearLista);
              },
              error: function (error) {
                  rechazada(error);
                  console.log(error);
              }
          });
      });
  }

