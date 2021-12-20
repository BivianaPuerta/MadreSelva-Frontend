var myIndex;
$(document).ready(function() {
    console.log("Estas en la página de perfil Administrador Productos");
    init();
});

function init() {
    var d_user = JSON.parse(sessionStorage.getItem('miUser'));
    $(".miNombreUsuario").html(d_user.name);
    traerInformacion();

    $('#tablaProductos tbody').on('click', 'tr', function() {
        var table = $('#tablaProductos').DataTable();
        miIndiceProducto = table.row(this).index();
        console.log("MiIndiceProducto " + miIndiceProducto);

    });


}

function traerInformacion() {

    $.ajax({
            method: "GET",
            url: "http://localhost:8080/api/cosmetics/all"
        })
        .done(
            function(respuesta) {
                //alert("Datos"+respuesta);
                //recuperarJson = respuesta;
                $('#tablaProductos').dataTable({
                    responsive: true,
                    data: respuesta,
                    /* estos atributos son diferentes para cada reto */
                    columns: [
                        { "data": "reference" },
                        { "data": "brand" },
                        { "data": "category" },
                        { "data": "name" },
                        { "data": "description" },
                        { "data": "price" },
                        { "data": "availability" },
                        { "data": "quantity" },
                        { "data": "photography" },
                        { "defaultContent": "<div class='text-center'><div class='btn-group'><button type='button' class='btn btn-primary btnEditarAbrir'>Editar</button><button type='button' class='btn btn-danger btn_borrar'>Borrar</button></div></div>" }
                    ],
                });
            }
        )
        .fail(
            function() {
                //alert("Error servidor");
            }
        )
        .always(
            function() {
                //alert("siempre ejecutandose")
            }
        );

}

function agregarProductos() {
    var reference = $.trim($("#reference").val());
    var brand = $.trim($("#brand").val());
    var category = $.trim($("#category").val());
    var name = $.trim($("#name").val());
    var description = $.trim($("#description").val());
    var price = $.trim($("#price").val());
    var availability = $.trim($("#availability").val());
    var quantity = $.trim($("#quantity").val());
    var photography = $.trim($("#photography").val());


    let myData = {
        reference: reference,
        brand: brand,
        category: category,
        name: name,
        description: description,
        price: price,
        availability: availability,
        quantity: quantity,
        photography: photography,

    }
    let dataToSend = JSON.stringify(myData);

    ///// Se crea producto
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/cosmetics/new",
        data: dataToSend,
        datatype: "json",
        cache: false,
        timeout: 600000,
        success: function(respuesta) {
            location.reload();
        },
        error: function(e) {
            alert("No FUNCIONA");
        },
        done: function(e) {
            alert("No FUNCIONA");
        }
    });

}

function getProductData(id) {
    $.ajax({
        url: "http://localhost:8080/api/cosmetics/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            //console.log(respuesta);

            $("#reference_e").val(respuesta[id].reference);
            $("#brand_e").val(respuesta[id].brand);
            $("#category_e").val(respuesta[id].category);
            $("#name_e").val(respuesta[id].name);
            $("#description_e").val(respuesta[id].description);
            $("#price_e").val(respuesta[id].price);
            $("#availabillity_e").val(respuesta[id].availability);
            $("#quantity_e").val(respuesta[id].quantity);
            $("#photography_e").val(respuesta[id].photography);

            //esto es para abrir el modal modalEditUser
            var myModal = new bootstrap.Modal(document.getElementById("modalEditProduct"), {});
            myModal.show();
        }
    });
}

function editProduct() {
    var reference = $.trim($("#reference_e").val());
    var brand = $.trim($("#brand_e").val());
    var category = $.trim($("#category_e").val());
    var name = $.trim($("#name_e").val());
    var description = $.trim($("#description_e").val());
    var price = $.trim($("#price_e").val());
    var availability = $.trim($("#availability_e").val());
    var quantity = $.trim($("#quantity_e").val());
    var photography = $.trim($("#photography_e").val());


    let myData = {
        reference: reference,
        brand: brand,
        category: category,
        name: name,
        description: description,
        price: price,
        availability: availability,
        quantity: quantity,
        photography: photography,

    }
    let dataToSend = JSON.stringify(myData);

    ///// Se crea producto
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/cosmetics/update",
        data: dataToSend,
        datatype: "json",
        cache: false,
        timeout: 600000,
        success: function(respuesta) {
            location.reload();
        },
        error: function(e) {
            alert("Producto Editado");
        },
        done: function(e) {
            alert("Producto no Editado");
        }
    });

}

function borrarProducto(_miIndex) {
    let myData = {
        id: _miIndex
    };
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: "http://localhost:8080/api/cosmetics/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            //console.log(respuesta);
            var reference = respuesta[_miIndex].reference;

            $.ajax({
                url: "http://localhost:8080/api/cosmetics/" + reference,
                type: "DELETE",
                data: dataToSend,
                contentType: "application/JSON",
                datatype: "JSON",
                success: function(respuesta) {

                    location.reload();
                }
            });

        }
    });
}


$(document).on("click", ".btn_agregarProductos", function() {
    agregarProductos();
});

$(document).on("click", ".btnEditarAbrir", function() {
    getProductData(miIndiceProducto);

});

$(document).on("click", ".btn_editarProducto", function() {
    editProduct();
});

$(document).on("click", ".btn_borrar", function() {
    borrarProducto(miIndiceProducto);

});
