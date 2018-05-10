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
		// contact page id is 109
	$contact = get_fields( 109 );
	$contact["interested_list_tpl"] = "";
	foreach ($contact["interested_list"] as $key => $item)
		$contact["interested_list_tpl"] .= "<light-ui-select-option value='".$item."'>".$item."</light-ui-select-option>";

	$about = get_fields( 121 );
	$about["team_member_list"] = [];

	for($idx = 1; $idx <= 10; $idx++){
		$key = "team_member_".$idx;
		array_push($about["team_member_list"], array(
			"img" => $about[$key]["url"],
			"name" => $about[$key]["alt"],
			"role" => $about[$key]["caption"]
		));
	}

		// global page id 49
		$global = get_fields( 49 );
		$global["add_btn_container_class"] = "";
		$global["add_btn_container_class_xs"] = "";
		$global["one_more_button_tpl"] = "";
		$global["one_more_button_xs_tpl"] = "";
		if( $global["add_one_more_button"] ) {
			$global["one_more_button_tpl"] = '<a href="'.$global["more_button_link"].'" target="_blank" class="c-link u-inline-block u-valign-middle  c-button--login u-marg-b-xs c-anim--slide-x c-anim--8 | u-marg-b-md@sm ">'.$global["more_button_text"].'</a>';

			$global["one_more_button_xs_tpl"] = '<a href="'.$global["more_button_link"].'" target="_blank" class="c-link u-inline-block u-valign-middle  c-button--login u-marg-r-sm">'.$global["more_button_text"].'</a>';

			$global["add_btn_container_class_xs"] = " px-xs-5 d-xs-flex flex-column text-center ";
		}

		// home page id is 38
		$home = get_fields( 38 );
		$home["add_btn_container_class"] = "";
		$home["add_btn_container_class_xs"] = "";
		$home["one_more_button_tpl"] = "";
		$home["one_more_button_xs_tpl"] = "";

		if( $home["add_one_more_button"] ) {
			$home["one_more_button_tpl"] = '<a href="'.$home["more_button_link"].'" class="u-pointer-auto c-link u-inline-block c-button--expand2 m-sm-t-2 {{currentIndex==3?\'is-active\':\'\'}}"><svg  class="c-button--expand2__left-block" viewbox="0 0 24 24"><circle  cx="12" cy="12" r="12" /></svg><span class="c-button--expand2__center-block"></span><svg  class="c-button--expand2__right-block" viewbox="0 0 24 24"><circle  cx="12" cy="12" r="12" /></svg><span class="c-button--expand2__text">'.$home["more_button_text"].'</span></a>';
			$home["add_btn_container_class"] = " d-flex flex-column ";

			$home["one_more_button_xs_tpl"] = '<a href="'.$home["more_button_link"].'" class="c-link u-inline-block c-button--expand2 m-sm-t-2 {{currentIndex==3?\'is-active\':\'\'}}"><svg  class="c-button--expand2__left-block" viewbox="0 0 24 24"><circle  cx="12" cy="12" r="12" /></svg><span class="c-button--expand2__center-block"></span><svg  class="c-button--expand2__right-block" viewbox="0 0 24 24"><circle  cx="12" cy="12" r="12" /></svg><span class="c-button--expand2__text">'.$home["more_button_text"].'</span></a>';
			$home["add_btn_container_class_xs"] = " px-xs-5 d-xs-flex flex-column text-center ";
		}
 
	$params = array(
		"about"			=> 	$about,
		"contact"		=>	$contact,
		"global"		=>	$global,
		"home"			=> 	$home,
		"privacy"		=>	get_fields( 146 ), // privacy page id is 146
		"solution"	=>	get_fields( 67 )    // solution page id is 67
	);

	return wp_json_encode( $params );
}