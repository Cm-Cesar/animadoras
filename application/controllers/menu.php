<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class menu extends CI_Controller {
	function __construct() {
     parent::__construct();
        
    if($_SESSION["animadoras_enlinea"]!="S"){
        redirect(base_url()."animadoras/index.php/login"); 
    }
   }

	function index()
	{   
        $data['titulo']="Menu";
		$this->load->view('cabecera',$data);
		$this->load->view('menu_view');
		$this->load->view('pie');
	}
}