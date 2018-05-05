<?php
function create_posttype() {
	$labels = array(
    'name'                => _x( 'Configurations', 'Post Type General Name', 'twentythirteen' ),
    'singular_name'       => _x( 'Configuration', 'Post Type Singular Name', 'twentythirteen' ),
    'menu_name'           => __( 'Configurations', 'twentythirteen' ),
    'parent_item_colon'   => __( 'Parent Configuration', 'twentythirteen' ),
    'all_items'           => __( 'All Configurations', 'twentythirteen' ),
    'view_item'           => __( 'View Configuration', 'twentythirteen' ),
    'add_new_item'        => __( 'Add New Configuration', 'twentythirteen' ),
    'add_new'             => __( 'Add New', 'twentythirteen' ),
    'edit_item'           => __( 'Edit Configuration', 'twentythirteen' ),
    'update_item'         => __( 'Update Configuration', 'twentythirteen' ),
    'search_items'        => __( 'Search Configuration', 'twentythirteen' ),
    'not_found'           => __( 'Not Found', 'twentythirteen' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'twentythirteen' ),
  );
   
  $args = array(
    'label'               => __( 'configurations', 'twentythirteen' ),
    'description'         => __( 'Configuration news and reviews', 'twentythirteen' ),
    'labels'              => $labels,
    'supports'            => array( 'title' ),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 5,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'page',
  );
   
  register_post_type( 'configuration', $args );
}
add_action( 'init', 'create_posttype', 0 );

require("api-endpoints.php");

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_script( 'bundle_s', get_theme_file_uri( '/assets/bundle_s.js' ), array(), null, true );
} );

function getSiteValues() {
	$contact = get_fields( 109 );
	$contact["interested_list_tpl"] = "";
	foreach ($contact["interested_list"] as $key => $item)
		$contact["interested_list_tpl"] .= "<light-ui-select-option value='".$item."'>".$item."</light-ui-select-option>";

	$about = get_fields( 121 );
	$about["teamMembers"] = [];

	for($idx = 1; $idx <= 10; $idx++){
		$key = "team_member_".$idx;
		array_push($about["teamMembers"], array(
			"img" => $about[$key]["url"],
			"name" => $about[$key]["alt"],
			"role" => $about[$key]["caption"]
		));
	}
 
	$params = array(
		"about"			=> 	$about,
		"contact"		=>	$contact,
		"global"		=>	get_fields( 49 ),
		"home"			=> 	get_fields( 38 ),
		"privacy"		=>	get_fields( 146 ),
		"solution"	=>	get_fields( 67 )
	);

	return wp_json_encode( $params );
}