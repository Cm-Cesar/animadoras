<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

class login_model extends CI_Model {

   function __construct() {
     parent::__construct();
   }
  function valida($post){
  	$sql="select count(*) as cuenta from usuarios where usuario='".$post["usuario"]."' and contrasena='".$post["contra"]."'";
  	$resulta =$this->db->query($sql);
  	foreach($resulta->result() as $row)
  	if($row->cuenta>=1)	{
  		return true;
  	}else{
  		return false;
  	}
  }
 }