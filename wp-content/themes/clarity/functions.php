<?php
require("api-endpoints.php");

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_script( 'bundle_s', get_theme_file_uri( '/assets/bundle_s.js' ), array(), null, true );
} );

function getSiteValues() {
	$about = get_fields( 121 );
	$about["interested_list_tpl"] = "";
	foreach ($about["interested_list"] as $key => $item)
		$about["interested_list_tpl"] .= "<light-ui-select-option value='".$item."'>".$item."</light-ui-select-option>";

	$params = array(
		"about"			=> 	$about,
		"contact"		=>	array(),
		"global"		=>	get_fields( 49 ),
		"home"			=> 	get_fields( 38 ),
		"privacy"		=>	array(),
		"solution"	=>	get_fields( 67 )
	);

	return wp_json_encode( $params );
}