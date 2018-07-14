//         window.onload = function () {
//             var element = document.getElementsByClassName('logo');
//             element.style.opacity = 0.2;
//         }
//         window.onload = function () {
//             var element = document.getElementsByClassName('servicesBtn');
//             for (var i = 0; i < elements.length; i++) {
//                 if (i % 2 == 0) {
//                     elements[i].style.color = 'rgb(0,106,255)';
//                 }
//             }
//         }
//         window.onload = function () {
//             var element = document.getElementsByTagName('h2');
//
//             for (var i = 0; i < elements.length; i++) {
//                 elements[i].style.borderColor = 'rgb(255,0,0)';
//                 elements[i].style.borderWidth = '2px';
//                 elements[i].style.borderStyle = 'solid';
//                 elements[i].style.backgroundColor = 'rgba(255,0,0,0.2)';
//             }
//         }
//
//         var element = document.querySelector
//         
//jQuery('css selectors')
//$('CSS Selectors')
//ex) $('#logo').css('opacity', 0.4);
$(function () {
    // jQuery Code goes here
    //            console.log($('input[type="text"]').css('background-color'));
    $('#alcoveLogo').css('opacity', 0.4);
    $('.servicesBtn').css('color', '#FFF');
    $('button').css('border', '1px solid red');
    $('input[name*="Num"]').css('border', '1px solid red');
    $('input[name*="Val"]').css('border', '1px solid red');
    togglestyle = function () {
        if ($('input[type="text"]').css('backgrond-color') === 'rgb(255, 0, 0)') {
            $('input[type="text"').css('background-color', 'rgb(255, 255, 255)');
        } else {
            $('input[type="text"').css('background-color', 'rgb(255, 0, 0)');
        }
    }

    $('#ReqAQuoteBtn').click(togglestyle);

    $(function () {
        $("<li><strong>This is brand new !!</strong></li>").prependTo(".coreValues");
        $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");
    })

    $(function () {
        var nameVal = $('input[name="nameVal"]');

        function FillEmpty() {
            if (nameVal.val() == '') {
                nameVal.val('John Doe');
            }
        }
        $('#ReqAQuoteBtn').click(FillEmpty);
    })
})
