/**
 * User: fikriarroisi
 * Date: 20/12/16
 * Time: 18:18
 * This file content all custom JS script used by the web
 */

var map;
var markers = [];
var infoWindow = null;
var polyLine = null;
var recordDistancePoint = [];

//add notification theme green
$.notiny.addTheme('green', {
    notification_class: 'notiny-theme-green notiny-default-vars'
});

//add notification theme red
$.notiny.addTheme('red', {
    notification_class: 'notiny-theme-red notiny-default-vars'
});

//init map
function init_map() {
    var opts = {
        center: {
            lat: -7.871102,
            lng: 112.527098
        },
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), opts);

    google.maps.event.addListener(map, 'click', function (event) {
        var position = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        addMarker(position, true);
    });
    retrieveMarkers();
}

//get all saved marker
function retrieveMarkers() {
    $.ajax({
        url: './function.php',
        data: {
            'action': 'retrieve',
        },
        type: 'POST',
        error: function () {
            showNotiError('Error Retrieving Markers');
        },
        success: function (data) {
            var result = JSON.parse(data);
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var item = result[i].latlng.split(';');
                var position = {
                    lat: Number(item[0]),
                    lng: Number(item[1])
                };
                addMarker(position, false);

            }
            showNotiSuccess('Success Retrieving Markers');
        },
    });
}

//add marker to maps
function addMarker(location, save) {
    var position = markers.length;
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    var infowindowC = new google.maps.InfoWindow({
        content: popup_content('' + location.lat + ';' + location.lng, position)
    });

    marker.addListener('click', function () {
        if (infoWindow !=  null){
            infoWindow.close();
            console.log('oke');
        }
        infoWindow = infowindowC;
        infowindowC.open(map, marker);
        if(recordDistancePoint.length > 1){
        recordDistancePoint.shift();
    }
    recordDistancePoint.push({
        'lat': location.lat,
        'lng':location.lng
    });
    });
    markers.push(marker);
    if (save == true) {
        saveMarker(location.lat + ';' + location.lng);
    }
}

//pop up marker content
function popup_content(latlng, position) {
    return '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h5 id="firstHeading" class="firstHeading">' + latlng + '</h5>' +
        '<div id="bodyContent">' +
        '<p>This marker has position ' + latlng + '<br>' +
        'Delete this marker ? </p>' +
        '<button onclick="deleteMarker(\'' + latlng + '\',\'' + position + '\')" class="btn btn-danger">Delete</button>' +
        '</div>' +
        '</div>';
}

//function to count distance between marker
var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function() {
    p1 = recordDistancePoint[0];
    p2 = recordDistancePoint[1]
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  console.log(d);
  console.log(recordDistancePoint);
  $('#p-distance').html(d.toFixed(2)+' Meter');

  //draw line
  if(polyLine){
    polyLine.setMap(null);
  }
    var line = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(p1.lat, p1.lng), 
        new google.maps.LatLng(p2.lat, p2.lng)
    ],
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 10,
    map: map
});
    polyLine = line;
  return d; // returns the distance in meter
};


//delete marker on maps and database
function deleteMarker(latlng, position) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function () {
        $.ajax({
            url: './function.php',
            data: {
                'action': 'delete',
                'latlng': latlng
            },
            type: 'POST',
            error: function () {
                showNotiError('Error Delete Marker');
            },
            success: function (data) {
                if (data == 1) {
                    showNotiSuccess('Marker Deleted');
                    markers[position].setMap(null);
                } else {
                    showNotiError('Error Delete Marker');
                }
            },
        });
    });
}

//save marker on database
function saveMarker(latlng) {
    $.ajax({
        url: './function.php',
        data: {
            'action': 'save',
            'latlng': latlng
        },
        type: 'POST',
        error: function () {
            showNotiError('Error Saving Marker');
        },
        success: function (data) {
            if (data == 1) {
                showNotiSuccess('Marker Saved');
            } else {
                showNotiError('Error Saving Marker')
            }
        },
    });
}

//show success notification
function showNotiSuccess(text) {
    $.notiny({text: text, theme: 'green'});
}

//show error notification
function showNotiError(text) {
    $.notiny({text: text, theme: 'red'});
}

init_map();
google.maps.event.addDomListener(window, 'load', init_map);