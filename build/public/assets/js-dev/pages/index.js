define([
	"BaseContainer",
	'text!/assets/templates/contentExample.html'
], function(
	BaseContainer,
	loadedTemplate
) {
	var templateID = window.App.injectTemplate(loadedTemplate);

	// add Private Variables here:
	
    return BaseContainer.extend({
    	
    	// Configure your view with these variables that will be
    	// injected into the template and can be autoupdated on change
    	controller : Ember.Object.create(),

    	// Default tag is div = <DIV>
    	//tagName: 'li',

    	// Array of strings to put into the class="" attribute
    	classNames: ['container'],

    	// Loaded Handlebars or HTML template to display 
    	// this view on the page:
    	// template: Ember.Handlebars.compile(loadedTemplate),
    	templateName: templateID,

    	// Event manager for this view 
    	// keeps in scope of this view only 
    	// so nothing else will respond to 'event'
    	eventManager: Ember.Object.create({
    		// ---- Touch
			// touchStart
			// touchMove
			// touchEnd
			// touchCancel
    		
    		// ---- KEY
   			// keyDown
			// keyUp
			// keyPress
			
			// ---- MOUSE
   			// mouseDown
			// mouseUp
			// contextMenu
			click 	: function(ev, view){
				view.someFurtherFunction();
			}
			// doubleClick
			// mouseMove
			// focusIn
			// focusOut
			// mouseEnter
			// mouseLeave
			
			// ---- FORM
			// submit
			// change
			// focusIn
			// focusOut
			// input

			// ---- HTML 5 drag and drop
			// dragStart
			// drag
			// dragEnter
			// dragLeave
			// drop
			// dragEnd
    	}),

    	subviews : [],

    	// init: function() {
    	// 	this._super();
    	// },

    	// didInsertElement : function() {
    	// 	this._super();
    	// },

    	// willInsertElement : function(){
    		
    	// },

    	// Demonstration of how to bind from events:
    	someFurtherFunction : function () {
    		Debug.trace(' execute more work here if you want THIS:');
    	}

    });
});