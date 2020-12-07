<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>EMIS V3</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="assets/css/fonts.googleapis.com.css" />
        <link rel="stylesheet" href="assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />
        <link rel="stylesheet" href="assets/css/ace-skins.min.css" />
        <link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
        <script src="assets/js/jquery-2.1.4.min.js" defer></script>
        <script type="text/javascript" defer>
			if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="assets/js/bootstrap.min.js" defer></script>
        <script src="assets/js/jquery.dataTables.min.js" defer></script>
		<script src="assets/js/jquery.dataTables.bootstrap.min.js" defer></script>
		<script src="assets/js/dataTables.buttons.min.js" defer></script>
		<script src="assets/js/buttons.flash.min.js" defer></script>
		<script src="assets/js/buttons.html5.min.js" defer></script>
		<script src="assets/js/buttons.print.min.js" defer></script>
		<script src="assets/js/buttons.colVis.min.js" defer></script>
		<script src="assets/js/dataTables.select.min.js" defer></script>
        <script src="assets/js/ace-elements.min.js" defer></script>
		<script src="assets/js/ace.min.js" defer></script>
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
