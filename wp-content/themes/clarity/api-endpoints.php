<?php
add_action( 'rest_api_init', function () {
  register_rest_route( '/api/data', '/home', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
			  "ID"		=> 5,
			  "meta"	=> array(
			    "description"	=> "Transform your city using hundreds to thousands of IoT devices collecting actionable air quality data to create healthy communities.",
			    "title"	=> "Clarity Movement Co. - Leading the Clean Air Movement"
			  ),
			  "page-template"	=> "page-home",
			  "page-title"	=> "Clarity Movement Co. | Home",
			  "title"	=> "Home"
			);
    },
  ) );

  register_rest_route( '/api/data', '/solution', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
		    "ID"	=> 9,
		    "meta"	=> array(
		    "description"	=> "By integrating Internet Of Things hardware with machine learning algorithms and cloud‑based data analytics, Clarity’s Smart City Air Monitoring delivers truly actionable air quality data aimed at transforming how cities understand and tackle air pollution.",
		    "title"	=> "Clarity Movement Co. |  Solution"
		    ),
		    "page-template"	=> "page-solution",
		    "page-title"	=> "Clarity Movement Co. | Solution",
		    "title"	=> "Solution"
			);
    },
  ) );

  register_rest_route( '/api/data', '/about', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
			  "ID"  => 7,
			  "meta"  => array(
			    "description"  => "Clarity Movement Co. is a team of passionate engineers and scientists focused on making a positive impact in the world by tackling the global air pollution crisis.",
			    "title"  => "Clarity Movement Co. |  About"
			  ),
			  "page-template"  => "page-about",
			  "page-title"  => "Clarity Movement Co. | About",
			  "title"  => "About"
			);
    },
  ) );

  register_rest_route( '/api/data', '/contact', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
			  "ID"	=> 13,
			  "meta"	=> array(
			    "description"	=> "Clarity is looking to partner with leading government agencies, smart city solution aggregators, and other forward thinking institutions to deploy the next generation of distributed air quality monitoring networks.",
			    "title"	=> "Clarity Movement Co. |  Contact"
			  ),
			  "page-template"	=> "page-contact",
			  "page-title"	=> "Clarity Movement Co. | Contact",
			  "title"	=> "Contact"
			);
    },
  ) );

  register_rest_route( '/api/data', '/privacy-policy', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
			  "ID" => 11,
			  "meta" => array(
			    "description"	=> "",
			    "title" => "Clarity Movement Co. |  Policies"
			  ),
			  "page-template" => "page-policies",
			  "page-title" => "Clarity Movement Co. | Policies",
			  "title" => "Policies"
			);
    },
  ) );
} );