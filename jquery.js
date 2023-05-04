$(document).ready(function () {
  $(".tarjeta").click(function () {
    // Crear el elemento HTML para la tarjeta grande
    let tarjetaGrande = $('<div class="tarjeta-grande card_img_grande"></div>');
    tarjetaGrande.html($(this).html());

    // Agregar la tarjeta grande a la

    $("body").append(tarjetaGrande);

    $(".tarjeta-grande").click(function () {
      $(this).remove();
    });
  });

  

  $('#form_1').submit(function(event){
    event.preventDefault();
    const nombre = $('#form_name').val();
    const correo = $('#form_email').val();
    const telefono = $('#form_phone').val();
    const motivo = $('#form_motivo').val();
    const area = $('#form_area').val();

    console.log('Nombre:' + nombre);
    console.log('correo:' + correo);
    console.log('telefono:' + telefono);
    console.log('motivo:' + motivo);
    console.log('area:' + area);

    $('#form_name').val("");
    $('#form_email').val("");
    $('#form_phone').val("");
    $('#form_motivo').val("");
    $('#form_area').val("");
    
    alert('estimada '+  nombre + 'su sugerencia ha sido recibida correctamente se enviara una copia a su correo'+ correo + ' Gracias por preferirnos')

  })
  

  $('#form_2').submit(function(event){
    event.preventDefault();
    const nombre = $('#form_name_2').val();
    const correo = $('#form_email_2').val();
    const telefono = $('#form_phone_2').val();
    const fecha = $('#form_date').val();
    const hora = $('#form_time').val();
    const asistentes = $('#form_asist').val()

    console.log('Nombre:' + nombre);
    console.log('correo:' + correo);
    console.log('telefono:' + telefono);
    console.log('fecha:' + fecha);
    console.log('hora:' + hora);
    console.log('cantidad de asistentes:'+ asistentes)

    $('#form_name_2').val("");
    $('#form_email_2').val("");
    $('#form_phone_2').val("");
    $('#form_date').val("");
    $('#form_time').val("");
    $('#form_asist').val("");

    
    alert('estimado:'+ nombre + 'agradecemos por reservar con nosotros hemos registrado' + asistentes + 'se ha enviado el codigo de confirmacion al correo' + correo + 'Gracias por Preferirmos')
  })
 
});


