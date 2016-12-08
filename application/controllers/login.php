<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login extends CI_Controller {
	function __construct() {
     parent::__construct();

     $this->load->model('login_model');
   }

	function index()
	{
		$this->load->view('login_view');
	}
	function validausuario()
	{
		$post["usuario"]=$this->input->post('usuario');
		$post["contra"]=$this->input->post('contra');
		$valido=$this->login_model->valida($post);
		if($valido){
            $_SESSION["animadoras_enlinea"]="S";
			redirect(base_url()."animadoras/index.php/menu");
		}else{
            $_SESSION["animadoras_enlinea"]="N";
			$data['error']="Lo Sentimos, Usuario y/o Clave Incorrectos.";
            $this->load->view('login_view',$data);
		}
	}
}