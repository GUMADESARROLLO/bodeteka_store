<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class home_controller extends CI_Controller {
	public function __construct() {

		parent::__construct();
	}

	public function index() {
	    $this->load->view('header');
	    $this->load->view('Inicio/inicio');
	    $this->load->view('footer');
	}
}