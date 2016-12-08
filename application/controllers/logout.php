<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class logout extends CI_Controller {
	function __construct() {
     parent::__construct();
   }

    
    function index(){
      session_destroy();
      redirect(base_url()."animadoras/index.php/login");  
    }
    
}
?>