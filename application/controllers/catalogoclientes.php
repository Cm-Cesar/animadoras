<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class catalogoclientes extends CI_Controller {
	function __construct() {
     parent::__construct();
   }

	function index()
	{
        $data['titulo']="Clientes";
		$this->load->view('cabecera',$data);
		$this->load->view('catalogoclientes/clientes_view');
		$this->load->view('pie');
	}
}