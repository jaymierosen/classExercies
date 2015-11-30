var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        product = 1;
        for(var i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
};

$('#btn').on('click', function() {
	console.log('It works!');
	$('#output').html('').append(factorial($('#number').val()));
});