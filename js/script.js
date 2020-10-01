$(document).ready(function(){
    $('.popupimage').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('href'));
        $('.modal').modal('show');
    });
    $('.mydatatable').DataTable();
});