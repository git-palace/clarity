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

  register_rest_route( '/api/data', '/community', array(
    'methods' => 'GET',
    'callback' => function() {
    	return array(
				"ID"  => 15,
				"filter"  => "all",
				"filters"  => array(
				  array (
				    "count"  => 7,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "Articles",
				    "parent"  => 0,
				    "slug"  => "articles",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 2,
				    "term_taxonomy_id"  => 2
				  ),
				  array (
				    "count"  => 0,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "Case Studies",
				    "parent"  => 0,
				    "slug"  => "case-studies",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 3,
				    "term_taxonomy_id"  => 3
				  ),
				  array (
				    "count"  => 8,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "In The News",
				    "parent"  => 0,
				    "slug"  => "news",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 4,
				    "term_taxonomy_id"  => 4
				  ),
				  array (
				    "count"  => 1,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "Non classé",
				    "parent"  => 0,
				    "slug"  => "non-classe",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 1,
				    "term_taxonomy_id"  => 1
				  ),
				  array (
				    "count"  => 1,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "Press Releases",
				    "parent"  => 0,
				    "slug"  => "press-releases",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 18,
				    "term_taxonomy_id"  => 18
				  ),
				  array (
				    "count"  => 1,
				    "description"  => "",
				    "filter"  => "raw",
				    "name"  => "Resources",
				    "parent"  => 0,
				    "slug"  => "resources",
				    "taxonomy"  => "category",
				    "term_group"  => 0,
				    "term_id"  => 5,
				    "term_taxonomy_id"  => 5
				  )
				),
				"meta"  => array (
				  "description"  => "This is where we share thoughts, case studies, news, and resources.",
				  "title"  => "Clarity Movement Co. |  Community"
				),
				"page-template"  => "page-community",
				"page-title"  => "Clarity Movement Co. | Community",
				"posts"  => array(
				  array (
				    "category"  => array(
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 190,
				    "img"  => array (
				      "ID"  => 191,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-04-13 22:24:23",
				      "description"  => "",
				      "filename"  => "1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				      "height"  => 480,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 191,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-04-13 22:24:23",
				      "name"  => "1_fu9weqjm8gy2t64r0ojrsg",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/04/14002423/1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				        "large-height"  => 480,
				        "large-width"  => 720,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/04/14002423/1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/04/14002423/1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				        "medium_large-height"  => 480,
				        "medium_large-width"  => 720,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/04/14002423/1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "1_fu9wEQJM8gy2T64r0ojRsg",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/04/14002423/1_fu9wEQJM8gy2T64r0ojRsg.jpeg",
				      "width"  => 720
				    ),
				    "name"  => "paris-chooses-clarity-for-novel-air-quality-monitoring-solution-d3c8c2aee05b",
				    "title"  => "Paris Chooses Clarity for Novel Air Quality Monitoring Solution",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 178,
				    "img"  => array (
				      "ID"  => 184,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-04-02 19:19:32",
				      "description"  => "",
				      "filename"  => "KL_Malaysia.jpg",
				      "height"  => 667,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 184,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-04-02 19:19:32",
				      "name"  => "kl_malaysia",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/02211932/KL_Malaysia.jpg",
				        "large-height"  => 667,
				        "large-width"  => 1000,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/02211932/KL_Malaysia.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/02211932/KL_Malaysia.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/02211932/KL_Malaysia.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "KL_Malaysia",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/02211932/KL_Malaysia.jpg",
				      "width"  => 1000
				    ),
				    "name"  => "kuala-lumpur-deploys-hyperlocal-air-quality-monitoring-network-at-wuf9-d85dcd1e037e",
				    "title"  => "Kuala Lumpur Deploys Hyperlocal Air Quality Monitoring Network at WUF9 with Clarity",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 182,
				    "img"  => array (
				      "ID"  => 183,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-03-30 19:34:38",
				      "description"  => "",
				      "filename"  => "AQ0A9135.jpg",
				      "height"  => 400,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 183,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-03-30 19:34:38",
				      "name"  => "aq0a9135",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30213438/AQ0A9135.jpg",
				        "large-height"  => 400,
				        "large-width"  => 600,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30213438/AQ0A9135.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30213438/AQ0A9135.jpg",
				        "medium_large-height"  => 400,
				        "medium_large-width"  => 600,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30213438/AQ0A9135.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "AQ0A9135",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30213438/AQ0A9135.jpg",
				      "width"  => 600
				    ),
				    "name"  => "discover-the-10-winning-innovative-projects-of-the-air-quality-experimentation-programme-a884129c0397",
				    "title"  => "Discover the 10 Winning Innovative Projects of the Air Quality Experimentation Programme",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Resources",
				        "parent"  => 0,
				        "slug"  => "resources",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 5,
				        "term_taxonomy_id"  => 5
				      )
				    ),
				    "id"  => 170,
				    "img"  => array (
				      "ID"  => 175,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-03-20 00:55:36",
				      "description"  => "",
				      "filename"  => "Image-uploaded-from-iOS-11.jpg",
				      "height"  => 762,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 175,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-03-20 00:55:36",
				      "name"  => "image-uploaded-from-ios-11",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/20015536/Image-uploaded-from-iOS-11.jpg",
				        "large-height"  => 571,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/20015536/Image-uploaded-from-iOS-11.jpg",
				        "medium-height"  => 167,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/20015536/Image-uploaded-from-iOS-11.jpg",
				        "medium_large-height"  => 428,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/20015536/Image-uploaded-from-iOS-11.jpg",
				        "thumbnail-height"  => 84,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Image-uploaded-from-iOS-11",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/20015536/Image-uploaded-from-iOS-11.jpg",
				      "width"  => 1366
				    ),
				    "name"  => "clarity-movement-leading-the-clean-air-movement-in-cupertino-e375f6a202be",
				    "title"  => "Leading the Clean Air Movement in Cupertino",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 179,
				    "img"  => array (
				      "ID"  => 181,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-03-30 19:25:33",
				      "description"  => "",
				      "filename"  => "Bangkok-Air.jpg",
				      "height"  => 667,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 181,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-03-30 19:25:33",
				      "name"  => "bangkok-air-2",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30212533/Bangkok-Air.jpg",
				        "large-height"  => 667,
				        "large-width"  => 1000,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30212533/Bangkok-Air.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30212533/Bangkok-Air.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30212533/Bangkok-Air.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Bangkok-Air",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/03/30212533/Bangkok-Air.jpg",
				      "width"  => 1000
				    ),
				    "name"  => "un-rideshare-app-makes-its-debut-at-asia-pacific-clean-air-week-6f5fb72e2ef8",
				    "title"  => "UN Rideshare app makes its debut at Asia-Pacific Clean Air Week",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 160,
				    "img"  => array (
				      "ID"  => 163,
				      "alt"  => "Clarity at Ecole Polytechnique",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-02-21 00:00:26",
				      "description"  => "",
				      "filename"  => "blog_cover1.jpg",
				      "height"  => 943,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 163,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-02-21 00:00:47",
				      "name"  => "blog_cover1",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/21010026/blog_cover1.jpg",
				        "large-height"  => 644,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/21010026/blog_cover1.jpg",
				        "medium-height"  => 189,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/21010026/blog_cover1.jpg",
				        "medium_large-height"  => 483,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/21010026/blog_cover1.jpg",
				        "thumbnail-height"  => 94,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Clarity at Ecole Polytechnique",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/21010026/blog_cover1.jpg",
				      "width"  => 1500
				    ),
				    "name"  => "ecole-polytechnique-partnership-f250f783f600",
				    "title"  => "Clarity and École Polytechnique Launch the French Air Revolution",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 157,
				    "img"  => array (
				      "ID"  => 158,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "As the building block of Clarity Air Monitoring, the Internet of Things-enabled Clarity Node is a comprehensive, weatherproof, air sensing device that can be deployed in less than 10 minutes.",
				      "date"  => "2018-02-13 00:34:31",
				      "description"  => "As the building block of Clarity Air Monitoring, the Internet of Things-enabled Clarity Node is a comprehensive, weatherproof, air sensing device that can be deployed in less than 10 minutes.",
				      "filename"  => "Clarity-170906142605DSC_0318.png",
				      "height"  => 668,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 158,
				      "mime_type"  => "image/png",
				      "modified"  => "2018-02-13 00:35:00",
				      "name"  => "clarity-170906142605dsc_0318",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/13013431/Clarity-170906142605DSC_0318.png",
				        "large-height"  => 668,
				        "large-width"  => 1000,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/13013431/Clarity-170906142605DSC_0318.png",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/13013431/Clarity-170906142605DSC_0318.png",
				        "medium_large-height"  => 513,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/13013431/Clarity-170906142605DSC_0318.png",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Clarity Node-S",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/02/13013431/Clarity-170906142605DSC_0318.png",
				      "width"  => 1000
				    ),
				    "name"  => "reducing-air-pollution-with-smart-design-d13e9cbb8edf",
				    "title"  => "Reducing Air Pollution with Smart Design",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 165,
				    "img"  => array (
				      "ID"  => 166,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2018-02-21 01:18:53",
				      "description"  => "",
				      "filename"  => "visionary_karenchow_staff-1.jpg",
				      "height"  => 580,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 166,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2018-02-21 01:18:53",
				      "name"  => "visionary_karenchow_staff-1",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/01/21021854/visionary_karenchow_staff-1.jpg",
				        "large-height"  => 580,
				        "large-width"  => 900,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/01/21021854/visionary_karenchow_staff-1.jpg",
				        "medium-height"  => 193,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/01/21021854/visionary_karenchow_staff-1.jpg",
				        "medium_large-height"  => 495,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/01/21021854/visionary_karenchow_staff-1.jpg",
				        "thumbnail-height"  => 97,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "visionary_karenchow_staff-1",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2018/01/21021854/visionary_karenchow_staff-1.jpg",
				      "width"  => 900
				    ),
				    "name"  => "a-dream-enabler-berkeley-innovators-hold-panel-on-city-s-startup-culture-9ee347877801",
				    "title"  => "‘A Dream Enabler’: Berkeley Innovators Hold Panel on City’s Startup Culture",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 148,
				    "img"  => array (
				      "ID"  => 150,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-13 20:58:34",
				      "description"  => "",
				      "filename"  => "71.jpg",
				      "height"  => 1333,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 150,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-13 20:58:49",
				      "name"  => "71",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/13215834/71.jpg",
				        "large-height"  => 682,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/13215834/71.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/13215834/71.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/13215834/71.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Welcome to the Congress",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/13215834/71.jpg",
				      "width"  => 2000
				    ),
				    "name"  => "looking-ahead-to-2018-smart-city-industry-trends-ff2c3cf14fb7",
				    "title"  => "Looking Ahead to 2018 Smart City Industry Trends",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 140,
				    "img"  => array (
				      "ID"  => 141,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 20:35:27",
				      "description"  => "",
				      "filename"  => "qualite_de_l_air_startup_rs.png",
				      "height"  => 660,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 141,
				      "mime_type"  => "image/png",
				      "modified"  => "2017-12-12 20:35:27",
				      "name"  => "qualite_de_l_air_startup_rs",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/12213527/qualite_de_l_air_startup_rs.png",
				        "large-height"  => 563,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/12213527/qualite_de_l_air_startup_rs.png",
				        "medium-height"  => 165,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/12213527/qualite_de_l_air_startup_rs.png",
				        "medium_large-height"  => 422,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/12213527/qualite_de_l_air_startup_rs.png",
				        "thumbnail-height"  => 83,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "qualite_de_l_air_startup_rs",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/12213527/qualite_de_l_air_startup_rs.png",
				      "width"  => 1200
				    ),
				    "name"  => "startups-working-to-ensure-smart-city-air-is-breathable-4cd4aa71738f",
				    "title"  => "Startups Working to Ensure Smart City Air is Breathable",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 38,
				    "img"  => array (
				      "ID"  => 84,
				      "alt"  => "",
				      "author"  => "1",
				      "caption"  => "",
				      "date"  => "2017-11-14 16:50:01",
				      "description"  => "",
				      "filename"  => "Clarity-170906191600DSC_0790-1.jpg",
				      "height"  => 1709,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 84,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-11-14 16:51:31",
				      "name"  => "clarity-170906191600dsc_0790",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175002/Clarity-170906191600DSC_0790-1-1024x684.jpg",
				        "large-height"  => 684,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175002/Clarity-170906191600DSC_0790-1-300x200.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175002/Clarity-170906191600DSC_0790-1-768x513.jpg",
				        "medium_large-height"  => 513,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175002/Clarity-170906191600DSC_0790-1-150x150.jpg",
				        "thumbnail-height"  => 150,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Clarity-170906191600DSC_0790",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175002/Clarity-170906191600DSC_0790-1.jpg",
				      "width"  => 2560
				    ),
				    "name"  => "letter-from-ceo-4d3fcf4d139d",
				    "title"  => "Letter from CEO",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 135,
				    "img"  => array (
				      "ID"  => 136,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 19:10:46",
				      "description"  => "",
				      "filename"  => "hazy-London-air-quality.jpg",
				      "height"  => 854,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 136,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-12 19:10:46",
				      "name"  => "london-city-aerial-view",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12201046/hazy-London-air-quality.jpg",
				        "large-height"  => 683,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12201046/hazy-London-air-quality.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12201046/hazy-London-air-quality.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12201046/hazy-London-air-quality.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "London city aerial view",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12201046/hazy-London-air-quality.jpg",
				      "width"  => 1280
				    ),
				    "name"  => "the-new-data-centric-approach-to-improving-urban-air-quality-d8df31c4046d",
				    "title"  => "The New Data-Centric Approach to Improving Urban Air Quality",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 142,
				    "img"  => array (
				      "ID"  => 143,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 20:44:20",
				      "description"  => "",
				      "filename"  => "citiestalks_vladgrin_sstock.jpg",
				      "height"  => 447,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 143,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-12 20:44:20",
				      "name"  => "citiestalks_vladgrin_sstock",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/10/12214420/citiestalks_vladgrin_sstock.jpg",
				        "large-height"  => 447,
				        "large-width"  => 735,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/10/12214420/citiestalks_vladgrin_sstock.jpg",
				        "medium-height"  => 182,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/10/12214420/citiestalks_vladgrin_sstock.jpg",
				        "medium_large-height"  => 447,
				        "medium_large-width"  => 735,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/10/12214420/citiestalks_vladgrin_sstock.jpg",
				        "thumbnail-height"  => 91,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "citiestalks_vladgrin_sstock",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/10/12214420/citiestalks_vladgrin_sstock.jpg",
				      "width"  => 735
				    ),
				    "name"  => "nature-speaks-cities-listen-fbe99524f563",
				    "title"  => "Nature Speaks, Cities Listen",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 144,
				    "img"  => array (
				      "ID"  => 145,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 21:06:17",
				      "description"  => "",
				      "filename"  => "anthony-delanoix-43713.jpg",
				      "height"  => 667,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 145,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-12 21:06:17",
				      "name"  => "anthony-delanoix-43713",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12220617/anthony-delanoix-43713.jpg",
				        "large-height"  => 667,
				        "large-width"  => 1000,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12220617/anthony-delanoix-43713.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12220617/anthony-delanoix-43713.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12220617/anthony-delanoix-43713.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "anthony-delanoix-43713",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12220617/anthony-delanoix-43713.jpg",
				      "width"  => 1000
				    ),
				    "name"  => "this-company-uses-tech-to-help-combat-air-pollution-ea3ab0b18c6d",
				    "title"  => "This Company Uses Tech to Help Combat Air Pollution",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "In The News",
				        "parent"  => 0,
				        "slug"  => "news",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 4,
				        "term_taxonomy_id"  => 4
				      )
				    ),
				    "id"  => 146,
				    "img"  => array (
				      "ID"  => 147,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 21:14:43",
				      "description"  => "",
				      "filename"  => "ST_20170715_TENCENT15_3275605.jpg",
				      "height"  => 520,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 147,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-12 21:14:43",
				      "name"  => "st_20170715_tencent15_3275605",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12221443/ST_20170715_TENCENT15_3275605.jpg",
				        "large-height"  => 520,
				        "large-width"  => 780,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12221443/ST_20170715_TENCENT15_3275605.jpg",
				        "medium-height"  => 200,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12221443/ST_20170715_TENCENT15_3275605.jpg",
				        "medium_large-height"  => 512,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12221443/ST_20170715_TENCENT15_3275605.jpg",
				        "thumbnail-height"  => 100,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "ST_20170715_TENCENT15_3275605",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/12/12221443/ST_20170715_TENCENT15_3275605.jpg",
				      "width"  => 780
				    ),
				    "name"  => "tencent-invests-big-money-in-us-cleantech-bd26450244be",
				    "title"  => "Tencent Invests Big Money in US Cleantech",
				    "type"  => "small"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Articles",
				        "parent"  => 0,
				        "slug"  => "articles",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 2,
				        "term_taxonomy_id"  => 2
				      )
				    ),
				    "id"  => 72,
				    "img"  => array (
				      "ID"  => 86,
				      "alt"  => "",
				      "author"  => "1",
				      "caption"  => "Old couple holding each others hands on the cane",
				      "date"  => "2017-11-14 16:50:11",
				      "description"  => "",
				      "filename"  => "AdobeStock_96476354-1.jpeg",
				      "height"  => 1000,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 86,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-11-14 16:52:00",
				      "name"  => "old-couple-holding-each-others-hands-on-the-cane",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175011/AdobeStock_96476354-1-1024x594.jpeg",
				        "large-height"  => 594,
				        "large-width"  => 1024,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175011/AdobeStock_96476354-1-300x174.jpeg",
				        "medium-height"  => 174,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175011/AdobeStock_96476354-1-768x445.jpeg",
				        "medium_large-height"  => 445,
				        "medium_large-width"  => 768,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175011/AdobeStock_96476354-1-150x150.jpeg",
				        "thumbnail-height"  => 150,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "Old couple holding each others hands on the cane",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2017/11/14175011/AdobeStock_96476354-1.jpeg",
				      "width"  => 1724
				    ),
				    "name"  => "link-between-air-pollution-and-dementia-calls-for-better-air-quality-data-d3514af2d8b6",
				    "title"  => "Link Between Air Pollution and Dementia Calls for Better Air Quality Data",
				    "type"  => "large"
				  ),
				  array (
				    "category"  => array (
				      array (
				        "count"  => 0,
				        "description"  => "",
				        "filter"  => "raw",
				        "name"  => "Press Releases",
				        "parent"  => 0,
				        "slug"  => "press-releases",
				        "taxonomy"  => "category",
				        "term_group"  => 0,
				        "term_id"  => 18,
				        "term_taxonomy_id"  => 18
				      )
				    ),
				    "id"  => 138,
				    "img"  => array (
				      "ID"  => 139,
				      "alt"  => "",
				      "author"  => "2",
				      "caption"  => "",
				      "date"  => "2017-12-12 19:59:29",
				      "description"  => "",
				      "filename"  => "sensirion-company-headquarters-switzerland-714ee.jpg",
				      "height"  => 400,
				      "icon"  => "http://35.161.173.153/data/wp-includes/images/media/default.png",
				      "id"  => 139,
				      "mime_type"  => "image/jpeg",
				      "modified"  => "2017-12-12 19:59:29",
				      "name"  => "sensirion-company-headquarters-switzerland-714ee",
				      "sizes"  => array (
				        "large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2016/10/12205929/sensirion-company-headquarters-switzerland-714ee.jpg",
				        "large-height"  => 400,
				        "large-width"  => 530,
				        "medium"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2016/10/12205929/sensirion-company-headquarters-switzerland-714ee.jpg",
				        "medium-height"  => 226,
				        "medium-width"  => 300,
				        "medium_large"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2016/10/12205929/sensirion-company-headquarters-switzerland-714ee.jpg",
				        "medium_large-height"  => 400,
				        "medium_large-width"  => 530,
				        "thumbnail"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2016/10/12205929/sensirion-company-headquarters-switzerland-714ee.jpg",
				        "thumbnail-height"  => 113,
				        "thumbnail-width"  => 150
				      ),
				      "title"  => "sensirion-company-headquarters-switzerland-714ee",
				      "type"  => "image",
				      "url"  => "https://s3-us-west-2.amazonaws.com/clarity-public/data/wp-content/uploads/2016/10/12205929/sensirion-company-headquarters-switzerland-714ee.jpg",
				      "width"  => 530
				    ),
				    "name"  => "sensirion-and-clarity-collaborate-on-pm2-5-sensor-technology-f00bb42fec93",
				    "title"  => "Sensirion and Clarity Collaborate on PM2.5 Sensor Technology",
				    "type"  => "small"
				  )
				),
				"title"  => "Community"
			);
    },
  ) );
} );