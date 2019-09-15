alert('attached');
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

console.log("hello")
Webcam.attach( '#my_camera' );
		
function take_snapshot() {
	alert('taking snapshot')
    Webcam.snap( function(data_uri) {
        document.getElementById('snapshot').innerHTML = '<img src="'+data_uri+'"/>';
		// snap complete, image data is in 'data_uri'
		
      Webcam.upload( data_uri, 'https://lingua-v4.herokuapp.com/image', function(code, text) {
			// Upload complete!
			// 'code' will be the HTTP response code from the server, e.g. 200
			// 'text' will be the raw response content
		} );
		
	} );
}

function submit_answer() {
    
}

var input = document.getElementById("user_answer");
