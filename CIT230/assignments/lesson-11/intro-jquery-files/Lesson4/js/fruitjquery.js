$(function () {
    // Array containing Objects with Fruit names & quantities
    var fruitBasket = [{
            title: 'Apples',
            quantity: 20
        },
        {
            title: 'Oranges',
            quantity: 25
        },
        {
            title: 'Kiwis',
            quantity: 50
        },
        {
            title: 'Strawberries',
            quantity: 45
        },
        {
            title: 'Bananas',
            quantity: 10
        },
        {
            title: 'Mangoes',
            quantity: 5
        },
        {
            title: 'Tomatoes',
            quantity: 30
        }];

    // Your jQuery code goes here

    $.each(fruitBasket, function (index, element) {
        $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</li>')
    })

    $('.fruits > li').each(function (index, element) {
        $(element).css('background-color', 'rgb(100, 200, 0)');
    })

})
