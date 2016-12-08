<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="<?php echo base_url(); ?>animadoras/application/js/jquery-ui-1.9.1.custom.js"></script>
    <script src="<?php echo base_url(); ?>animadoras/application/jquery/jquery.min.js"></script>
	<script src="<?php echo base_url(); ?>animadoras/application/jquery/jquery-ui/jquery-ui.min.js"></script>
	<link media="screen" type="text/css" href="<?php echo base_url(); ?>animadoras/application/css/estilo.css" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url(); ?>animadoras/application/iconoweb/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo base_url(); ?>animadoras/application/iconoweb/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url(); ?>animadoras/application/iconoweb/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo base_url(); ?>animadoras/application/iconoweb/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url(); ?>animadoras/application/iconoweb/favicon-16x16.png">
    <link rel="manifest" href="<?php echo base_url(); ?>animadoras/application/iconoweb/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo base_url(); ?>animadoras/application/iconoweb/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
	<title>Login - Animadoras Fiesta</title>
	
</head>
<body>
<div class="letrero">
<h1 id="letrero"><i>Animadoras Fiesta</i></h1>
</div>
<div class="fondo_general">
<div class="contenido">
<form id="login_form" action="<?php echo base_url(); ?>animadoras/index.php/login/validausuario" method="post">
<table>
	<tr>
	   <td style="text-align: right;">
		 <font size="4"><b>USUARIO:</b></font>
	   </td>
	   <td>
	     <input type="text" id="usuario" name="usuario"  placeholder="USUARIO" class="input acceso">.
	   </td>
	<tr>
	   <td style="text-align: right;">
		  <font size="4"><b>CLAVE:</b></font>
		</td>
		<td>   
		  <input type="password" name="contra" placeholder="•••••••••••••••" class="acceso">
	   </td>
	</tr>
	<tr>
	   <td colspan="2" style="text-align: center;" height="40px;">
		<input type="submit" value="Acceder" class="boton_submit">
	   </td>
	</tr>

</table>
</form>
</div>
</div>
</body>
<script type="text/javascript">
  <?php if(@$error!=""){
   ?>
   alert('<?php echo @$error;?>');
   window.location.href='<?php echo base_url()."animadoras/index.php/login";?>';
   <?php
       } ?>
  $('#usuario').focus();    
  $('.acceso').keydown(function(evt){

           if(evt.keyCode==13){

             $('#login_form').trigger("submit");

           }

        });

</script>
</html>