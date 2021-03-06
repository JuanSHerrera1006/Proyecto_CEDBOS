$(document).ready(function () {
	$('.dismiss, .overlay').on('click', function () {
		$('.sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('#sidebarCollapse').on('click', function () {
		$('.sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});

	$('.data-register-dropdown').click(function () {
		$('.sidebar ul .data-register-list').toggleClass('active');
		$('.sidebar ul li .data-register-dropdown').toggleClass('active');
	});

	$('.data-history-dropdown').click(function () {
		$('.sidebar ul .data-history-list').toggleClass('active');
		$('.sidebar ul li .data-history-dropdown').toggleClass('active');
	});
});
