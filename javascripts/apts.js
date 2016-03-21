// JavaScript Document

$.getJSON('apts.json', function(data) {
		var output = '<ul>';
		$.each(data, function(key, val) {
				output += '<li>' + val.id +'</li>';
				output += '<li>' + val.name +'</li>';
				output += '<li>' + val.pics+'</li>';
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
