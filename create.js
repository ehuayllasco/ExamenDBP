$(document).ready(function() {
	var content = "";

    $.ajax({
        url: "http://localhost:8080/ItemRestService/Add"
    }).then(function(data) {
    	$. each(data, function(i,obj){
    		var item = "<tr> <th scope='row'>" + obj.id + "</th>"+
    						"<td>" + obj.whenCreated + "</td>" +
    						"<td>" + obj.whenLastUpdated + "</td>" +
    						"<td>" + obj.name + "</td>" +
    						"<td>" + obj.description + "</td>" +
    					 "</th>"
    		content = content.concat(item);
    	});
    	$('.table-to-insert').append(content);
    });
});