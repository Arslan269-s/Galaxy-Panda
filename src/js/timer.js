function updateTimer() {
    future = Date.parse("dec 03 2021 10:13:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);



$(function () {
    alert('here');
    $('body').on('mouseenter', 'ul li', function(){
        console.log('here')
        $(this).find('ul').first().stop().toggle(200);
    }, function(){
        $(this).find('ul').stop().hide(200);

    })
    // $('ul li').hover(function () {
    //     $(this).find('ul').first().stop().toggle(200);
    // }, function () {
    //     $(this).find('ul').stop().hide(200);
    // });


});

// $(function () {
//     $('#icon').mouseEnter(function(){
//         $('ul').toggleClass('show');
//     });
// });