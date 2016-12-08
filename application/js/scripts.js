
   var keyStr = "ABCDEFGHIJKLMNOP" +
                 "QRSTUVWXYZabcdef" +
                 "ghijklmnopqrstuv" +
                 "wxyz0123456789+/" +
                 "=";


    function check3(e) {
        var k;
        document.all ? k = e.keyCode : k = e.which;
        return (String.fromCharCode(k)!="'" && String.fromCharCode(k)!='"');
    }

    function check4(e) {
        var k;
        document.all ? k = e.keyCode : k = e.which;
        return (String.fromCharCode(k)!="'" && String.fromCharCode(k)!='"' && String.fromCharCode(k)!='Ñ'
                && String.fromCharCode(k)!='ñ' && String.fromCharCode(k)!='á' && String.fromCharCode(k)!='Á'  
                && String.fromCharCode(k)!='É'  && String.fromCharCode(k)!='é' && String.fromCharCode(k)!='í'
                && String.fromCharCode(k)!='Í'  && String.fromCharCode(k)!='ó' && String.fromCharCode(k)!='Ó'
                && String.fromCharCode(k)!='Ú'  && String.fromCharCode(k)!='ú');
    }

    function check_row(check, formulario){
    
    document.getElementById(check+formulario).checked=!document.getElementById(check+formulario).checked;
    

    if(document.getElementById(check+formulario).checked)
       document.getElementById('r_'+check+formulario).className = 'div_selected';
      else
       document.getElementById('r_'+check+formulario).className = 'div';

  }

   
    function encode64(input) {
       input = escape(input);
       var output = "";
       var chr1, chr2, chr3 = "";
       var enc1, enc2, enc3, enc4 = "";
       var i = 0;
   
       do {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
   
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
   
          if (isNaN(chr2)) {
             enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
             enc4 = 64;
          }
   
          output = output +
             keyStr.charAt(enc1) +
             keyStr.charAt(enc2) +
             keyStr.charAt(enc3) +
             keyStr.charAt(enc4);
          chr1 = chr2 = chr3 = "";
          enc1 = enc2 = enc3 = enc4 = "";
       } while (i < input.length);
   
       return output;
    }
   
    function decode64(input) {
       var output = "";
       var chr1, chr2, chr3 = "";
       var enc1, enc2, enc3, enc4 = "";
       var i = 0;
   
       // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
       var base64test = /[^A-Za-z0-9\+\/\=]/g;
       if (base64test.exec(input)) {
          alert("There were invalid base64 characters in the input text.\n" +
                "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                "Expect errors in decoding.");
       }
       input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
   
       do {
          enc1 = keyStr.indexOf(input.charAt(i++));
          enc2 = keyStr.indexOf(input.charAt(i++));
          enc3 = keyStr.indexOf(input.charAt(i++));
          enc4 = keyStr.indexOf(input.charAt(i++));
   
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
  
          output = output + String.fromCharCode(chr1);
   
          if (enc3 != 64) {
             output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
             output = output + String.fromCharCode(chr3);
          }
   
          chr1 = chr2 = chr3 = "";
          enc1 = enc2 = enc3 = enc4 = "";
   
       } while (i < input.length);
   
       return unescape(output);
    }

  function ajaxlists(url, page, formulario){

  formulario||(formulario='');
  page||(page=1);

   $.ajax({
  url: url,

  type: 'post',

  data: 'valor='+$("#buscar"+formulario).val()+'&registros='+$("#registros"+formulario).val()+'&pagina='+page+'&combo1='+$("#combo1"+formulario).val()+'&combo2='+$("#combo2"+formulario).val()+'&combo3='+$("#combo3"+formulario).val()+'&combo4='+$("#combo4"+formulario).val()+'&combo5='+$("#combo5"+formulario).val()+'&combo6='+$("#combo6"+formulario).val()+'&combo7='+$("#combo7"+formulario).val()+'&combo8='+$("#combo8"+formulario).val()+'&combo9='+$("#combo9"+formulario).val()+'&combo10='+$("#combo10"+formulario+':checked').val(),
  success: function(data) {
    
    $('#radio_select'+formulario).val('');
    $('#resultado'+formulario).html(data);
  }

  });
   

  } 
 function ajaxlists2(url, page, formulario){
    combo1 = $("#combo1"+formulario).val();
    combo2 = $("#combo2"+formulario).val();
    combo3 = $("#combo3"+formulario).val();
    combo4 = $("#combo4"+formulario).val();
    combo5 = $("#combo5"+formulario).val();
    combo6 = $("#combo6"+formulario).val();
    combo7 = $("#combo7"+formulario).val();
    combo8 = $("#combo8"+formulario).val();

    if($("#combo1"+formulario).attr('type') == 'checkbox' && !$("#combo1"+formulario).is(':checked')){
      combo1 = "";
    }

    if($("#combo2"+formulario).attr('type') == 'checkbox' && !$("#combo2"+formulario).is(':checked')){
      combo2 = "";
    }

    if($("#combo3"+formulario).attr('type') == 'checkbox' && !$("#combo3"+formulario).is(':checked')){
      combo3 = "";
    }

    if($("#combo4"+formulario).attr('type') == 'checkbox' && !$("#combo4"+formulario).is(':checked')){
      combo4 = "";
    }

    if($("#combo5"+formulario).attr('type') == 'checkbox' && !$("#combo5"+formulario).is(':checked')){
      combo5 = "";
    }

    if($("#combo6"+formulario).attr('type') == 'checkbox' && !$("#combo6"+formulario).is(':checked')){
      combo5 = "";
    }

    if($("#combo7"+formulario).attr('type') == 'checkbox' && !$("#combo7"+formulario).is(':checked')){
      combo5 = "";
    }

    if($("#combo8"+formulario).attr('type') == 'checkbox' && !$("#combo8"+formulario).is(':checked')){
      combo5 = "";
    }

    formulario||(formulario='');
    page||(page=1);

    dialogocargandoajax();

     $.ajax({
      url: url,
      type: 'post',
      data: 'valor='+$("#buscar"+formulario).val()+'&registros='+$("#registros"+formulario).val()+'&pagina='+page+
            '&combo1='+combo1+'&combo2='+combo2+'&combo3='+combo3+'&combo4='+combo4+'&combo5='+combo5+'&combo6='+combo6+'&combo7='+combo7+'&combo8='+combo8,

      success: function(data) {
        $('#radio_select'+formulario).val('');
        $('#resultado'+formulario).html(data);
        $("#cargandoajax").dialog('close');
      }
    });
   

  }

  function change_row(radio, formulario){

  formulario||(formulario='');
  
     
  var tabla = document.getElementById("grid"+formulario);

  var trs = tabla.getElementsByTagName("tr");

  

  for(var x=0; x<trs.length; x++){

  trs[x].className ="div";

  

  document.getElementById(radio+formulario).checked = 'checked';

  document.getElementById('radio_select'+formulario).value = document.getElementById(radio+formulario).value;

  document.getElementById('r_'+radio+formulario).className = 'div_selected';}


  }

function changediv(div_show,div_hidde,formulario)
{  

  formulario||(formulario='');

//  var hidde = div_hidde.split("-");

  //for(x=0; x<=hidde.length-1; x = x+1){

  document.getElementById(div_hidde+formulario).style.display = 'none';
  document.getElementById(div_show+formulario).style.display = 'block';

}      


function number_format (number, decimals, dec_point, thousands_sep) {
 
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}



 function fecha(){

      return  $.datepicker.formatDate('dd/mm/yy', new Date());

 }


 function solonumeros(evt){

  
  if((evt < 48 || evt > 57) && evt!=8 && evt!=46 && evt!=13 && evt!=9 && evt!=39 && evt!=37 && evt!=190)
   return false;

 }

 function masking(id){

    $('#'+id).val(number_format($('#'+id).val(),2,'.',','));

 }

 function unmasking(id){

    
    if($('#'+id).val()=='0.00'){
      $ ('#'+id).val('');
      return null;
    }

    $('#'+id).val($('#'+id).val().replace(/,/g,""));

 }


function validate(e) {
   tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla==8) return true; // 3
   if (tecla==9) return true; // 3
   if (tecla==11) return true; // 3
    patron = /[0-9\s\t]/; // 4
 
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}


function cargaplazo(dateText,days,objetoVencimiento){

  dateText=dateText.split("/");
  var p = new Date(Date.parse(dateText[2]+"/"+dateText[1]+"/"+dateText[0]) + (days*24*60*60*1000));
  var curr_date = p.getDate();
  var curr_month = p.getMonth();
  curr_month++;
  var curr_year = p.getFullYear();

  if (curr_date < 10) {curr_date = "0" + curr_date;}
  if (curr_month < 10) {curr_month = "0" + curr_month;}

  var newdate = curr_date + "/" + curr_month + "/" + curr_year;

  $(objetoVencimiento).val(newdate)

}

function nuevoplazo(dateText,dateText2,plazo){
   
   dateText=dateText.split("/");
   dateText2=dateText2.split("/");
   milisegundos=Date.parse(dateText2[2]+"/"+dateText2[1]+"/"+dateText2[0])-Date.parse(dateText[2]+"/"+dateText[1]+"/"+dateText[0]);
   milisegundos=milisegundos/1000;
   milisegundos=milisegundos/60;
   milisegundos=milisegundos/60;
   milisegundos=milisegundos/24;

   $(plazo).val(Math.round(milisegundos));
   return Math.round(milisegundos);
 
}


function damefolio(url,formulario){

  $.ajax({

      url: url,

      type: 'post',

      success: function(data) {
        
        $('#resultados_generales').html(data);
        $('#'+formulario+'_nuevo').val($('#resultadofolio').val());
        
      }

  });


}

  function ajaxlistsmasterdetail(url, page, grid1, grid2){

    page||(page=1);

     $.ajax({

    url: url,

    type: 'post',

    data: 'valor='+$("#buscar"+grid2).val()+'&registros='+$("#registros"+grid2).val()+'&pagina='+page+'&combo1='+$("#combo1"+grid1).val()+'&combo2='+$("#combo2"+grid1).val()+'&combo3='+$("#combo3"+grid1).val()+'&id='+$('#radio_select'+grid1).val()+'&combo10='+$("#combo10"+grid2+':checked').val(),

    success: function(data) {
      
      $('#radio_select'+grid2).val('');
      $('#resultado'+grid2).html(data);
      
    }

    });
   

  }


  function str_pad(input, pad_length, pad_string, pad_type) {
  //  discuss at: http://phpjs.org/functions/str_pad/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Michael White (http://getsprink.com)
  //    input by: Marco van Oort
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
  //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
  //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
  //   returns 2: '------Kevin van Zonneveld-----'

  var half = '',
    pad_to_go;

  var str_pad_repeater = function(s, len) {
    var collect = '',
      i;

    while (collect.length < len) {
      collect += s;
    }
    collect = collect.substr(0, len);

    return collect;
  };

  input += '';
  pad_string = pad_string !== undefined ? pad_string : ' ';

  if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
    pad_type = 'STR_PAD_RIGHT';
  }
  if ((pad_to_go = pad_length - input.length) > 0) {
    if (pad_type === 'STR_PAD_LEFT') {
      input = str_pad_repeater(pad_string, pad_to_go) + input;
    } else if (pad_type === 'STR_PAD_RIGHT') {
      input = input + str_pad_repeater(pad_string, pad_to_go);
    } else if (pad_type === 'STR_PAD_BOTH') {
      half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
      input = half + input + half;
      input = input.substr(0, pad_length);
    }
  }

  return input;
} 

function dialogocargandoajax(){

     var dialogcargando = $("#cargandoajax").dialog({ 
                                                             autoOpen: false,
                                                             height:120,
                                                             width: 400,
                                                             draggable:true,
                                                             resizable: false,
                                                             modal:true,
                                                             closeOnEscape: false,
                                                             close: function() { $(this).remove();
                                                                                 $("#dialogocargandoajax").append('<div id="cargandoajax"></div>');  

                                                                               }
                                            });   
         
     dialogcargando.load("http://localhost/atico/index.php/login/cargandoajax").dialog('open');
     dialogcargando.dialog('option', 'title', '');
     $(".ui-dialog-titlebar" ).css("display", "none" ); 
     $("#cargandoajax" ).css("overflow", "hidden"); 

  }