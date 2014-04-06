amplify.subscribe( "loadCommunionTypes", function( data ) {
		var source = null;
						$.ajax({
						async: false,
						url: "/masters/communionTypes",
						success: function (data, status, xhr) {
						source=data;
						$.each(data, function (index, value) {
							var newOption = $('<option>');
							newOption.attr('value', value.id).text(value.description);
							$('#cboCT').append(newOption);

							})
							
						}
						});
	});
	
				
		