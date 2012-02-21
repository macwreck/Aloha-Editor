/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/

define( [
	'aloha',
	'aloha/jquery',
	'aloha/plugin',
	'aloha/floatingmenu'
], function ( Aloha, jQuery, Plugin, FloatingMenu ) {
	"use strict";
	
	var GENTICS = window.GENTICS;

	/**
	 * register the plugin with unique name
	 */
	return Plugin.create( 'test', {

		/**
		 * Initialize the plugin and set initialize flag on true
		 */
		init: function () {
			console.log('testing');
		},

		/**
		 * Make the given jQuery object (representing an editable) clean for saving
		 * Find all abbrs and remove editing objects
		 * @param obj jQuery object to make clean
		 * @return void
		 */
		makeClean: function ( obj ) {
			// nothing to do...
		},

		/**
		* toString method
		* @return string
		*/
		toString: function () {
			return 'test';
		}

	} );
	
} );
