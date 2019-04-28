/*
 *  drag-nd-drop-upload-mg v1.0.7 - 2019
 *  Drag & Drop File Upload
 *  https://www.npmjs.com/package/drag-nd-drop-upload-mg
 *  (c) 2019 Abdelhadi Habchi - @adev
 *  (c) 2019 Taoufik Douhi - @tchiko23
 *
 *  Under MIT License - https://github.com/abdodeve/drag-nd-drop-upload-mg.git
 */

function ready(callback){
  // in case the document is already rendered
  if (document.readyState!='loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') callback();
  });
}

// when document is ready
ready(function(){
  
  var message = getMsgByNavLang(),
  uploadFile = document.getElementsByClassName('upload-file')[0];
  document.getElementById('drag-drop-msg').innerHTML = message;
  
    // OnFileChange
    uploadFile.addEventListener("change", function () {
      // Check file exist.
      if( 0 !== this.files.length  ){
        document.getElementById('drag-drop-msg').innerHTML = this.files[0].name ;
        return ;
      } 
      document.getElementById('drag-drop-msg').innerHTML = message;
    } );
});

// get msg by navigator language
function  getMsgByNavLang(){
  var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage; // IE <= 10
  switch ( language ){
    case 'en-US': return 'Drag your files here or click in this area.'; // English (United States)
    case 'fr-FR': return 'Faites glisser vos fichiers ici ou cliquez dans cette zone.';  // French (France)
    case 'zh-hk': return '将文件拖到此处或单击此区域';// Chinese (Hong Kong)	
    case 'es-es': return 'Arrastre sus archivos aquí o haga clic en esta área.'; // Spanish (Spain)
    case 'ar-ma': return 'اسحب ملفاتك هنا أو انقر في هذا المجال'; // Arabic
    case 'pt-br': return 'Arraste seus arquivos aqui ou clique nesta área.'; // Portuguese
    case 'id': return 'Seret file Anda ke sini atau klik di area ini.'; // Indonesian
    case 'ja': return 'ここにファイルをドラッグするか、この領域をクリックしてください。'; // Japanese
    case 'ru': return 'Перетащите свои файлы сюда или щелкните в этой области.'; // Russian
    case 'de-de': return 'Ziehen Sie Ihre Dateien hierher oder klicken Sie in diesen Bereich.'; // German
    default: return 'Drag your files here or click in this area.';
  }
}


