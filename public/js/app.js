Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

console.log("hello")
Webcam.attach( '#my_camera' );
		
function take_snapshot() {
    Webcam.snap( function(data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
    } );
}

function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = 
            '<h2>Here is your image:</h2>' + 
            '<img src="'+data_uri+'"/>';
    } );
}
function submit_answer() {
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = 
            '<h2>Here is your image:</h2>' + 
            '<img src="'+data_uri+'"/>';
    } );
}

var input = document.getElementById("user_answer");