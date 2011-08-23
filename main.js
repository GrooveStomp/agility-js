var error = $$({
  model: {msg:''},
  view: {
    format: ' \
    	<div> \
				<span data-bind="msg"/> \
				<span id="close">(Click anywhere to close)</span> \
			</div>',
    style: GrooveStomp.to_css({
    	"&": {
				"position": "fixed",
				"top": 0,
				"left": 0,
				"right": 0,
				"z-index": 1000,
				"background": "#f55",
				"color": "white",
				"display": "none",
				"padding": "5px 15px"
			},
			"& #close": {
				"float": "right"
			}
    })
  },
  controller: {},
  // User-defined
  show: function(s){
    var self = this;
    this.model.set({msg:s});
    this.view.$().slideDown(200, function(){
      $(document).one('click', function(){ self.hide(); });
    });
  },
  hide: function(){ this.view.$().slideUp(100); }
});
$$.document.append(error);
error.show("Hello");