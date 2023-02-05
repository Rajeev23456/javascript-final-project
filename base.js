$(document).ready(function() {
    var details = window.localStorage.getItem('details');
    details = details === null || details === '' ? [] : details;
    details = details.length > 0 ? JSON.parse(details) : [];

    var totalCount = 0;
    for(var i=0; i<details.length; i++) {
        totalCount = totalCount + details[i].count;
    }

    $('#cart-count').html(totalCount);
})