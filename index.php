<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="css/mdb.min.css">
    <link href="css/notiny.min.css" rel="stylesheet">
    <link href="css/sweetalert2.min.css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

<!--Navbar-->
<nav class="navbar navbar-dark navbar-fixed-top">
    <div class="container">
        <!--Collapse content-->
        <div class="collapse navbar-toggleable-xs" id="collapseEx2">
            <!--Navbar Brand-->
            <a class="navbar-brand">Point Recorder</a>
        </div>
    </div>
</nav>
<div style="position: fixed; z-index: 999999; bottom: 0;">
    <button class="btn btn-primary" onclick="getDistance()">Calculate Distance</button>
    <br>
    <b><span id="p-distance" style="color: #fff; padding: 10px">CLick 2 Marker and click calculate distance</span></b>
    <br><br>
</div>
<!--/.Navbar-->
<div id="map-canvas" style="height: 100%;"></div>

<script src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/tether.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/mdb.min.js"></script>
<script data-rocketsrc="/path/to/notiny.min.js" type="text/rocketscript" data-rocketoptimized="true"></script>
<script type="text/javascript" src="js/sweetalert2.min.js"></script>
<script type="text/javascript" src="js/notiny.min.js"></script>
<script
        src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDViz-UCx4lUey1Meq3SIuIFk-IfhKQ2n0"></script>
<script src="js/script.js"></script>
</body>

</html>