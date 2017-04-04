require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $('ul.summary li').hide();
		$('li.active').parents().show();
		$('li.active').parents("ul").not("ul.summary").children().show();
		$('li.active').show();
		$('li.active').children("ul").children().show();   
    });
});
