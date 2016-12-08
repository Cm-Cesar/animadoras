<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="<?php echo base_url(); ?>animadoras/application/js/jquery-ui-1.9.1.custom.js"></script>
    <script src="<?php echo base_url(); ?>animadoras/application/jquery/jquery.min.js"></script>
	<script src="<?php echo base_url(); ?>animadoras/application/jquery/jquery-ui/jquery-ui.min.js"></script>
	<link media="screen" type="text/css" href="<?php echo base_url(); ?>animadoras/application/css/estilo.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url(); ?>animadoras/application/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo base_url(); ?>animadoras/application/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="<?php echo base_url(); ?>animadoras/application/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?php echo base_url(); ?>animadoras/application/css/font-awesome.min.css">
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
	<title><?php echo $titulo;?> - Animadoras Fiesta</title>
	
</head>
<body>
<div class="menu">
<nav class="navbar navbar-default" role="navigation">
  <!-- El logotipo y el icono que despliega el menú se agrupan
       para mostrarlos mejor en los dispositivos móviles -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
      <span class="sr-only">Desplegar navegación</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
      <a class="navbar-brand" href="<?php echo base_url(); ?>animadoras/index.php/menu">Inicio</a>
  </div>
 
  <!-- Agrupar los enlaces de navegación, los formularios y cualquier
       otro elemento que se pueda ocultar al minimizar la barra -->
  <div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          Catalogos <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li><a href="<?php echo base_url(); ?>animadoras/index.php/catalogoclientes"><i class="fa fa-address-book-o" aria-hidden="true"></i>&nbsp; Clientes</a></li>
        </ul>
      </li>
    </ul>
 
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          Animadoras <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Cambiar Contrase&ntilde;a</a></li>
          <li class="divider"></li>
          <li><a href="<?php echo base_url(); ?>animadoras/index.php/logout">Cerrar Sesi&oacute;n</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</div>
