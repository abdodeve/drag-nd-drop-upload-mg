/*
 *  drag-nd-drop-upload-mg v1.0.0 - 2019
 *  Drag & Drop File Upload
 *  http://marocgeek.com
 *  (c) 2019 Abdelhadi Habchi - @adev
 *
 *  Under MIT License - http://marocgeek.com
 */


$(document).ready(function(){

  var message = "Faites glisser vos fichiers ici ou cliquez dans cette zone." ;

    // OnFileChange
    // $('.drag-nd-drop-upload .upload-file').change(function () {
    $(document).on('change', '.drag-nd-drop-upload .upload-file', function(e) {
  
      if( this.files.length != 0 ){
        $('.drag-nd-drop-upload p').text(this.files[0].name);
        return ;
      } 
  
      $('.drag-nd-drop-upload p').text(message);
    });

    // OnUpload 
    //1
    $(document).on('click', '.btn-upload-mg', function(e) {  
      $('.drag-nd-drop-upload p').text(message);
    });


  });