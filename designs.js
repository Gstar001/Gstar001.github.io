$(document).ready(function() {
    //Call makeGrid() when form is submitted
    $('#sizePicker').submit(function makeGrid(grid) {
        $('table tr').remove(); //Clears grid
        //Declare N by M variables
        const height = $('#inputHeight').val();
        const width = $('#inputWeight').val();
        // Create the grid with nested for loop
        for (let row = 1; row <= height; row++) {
            $('table').append('<tr></tr>');
            for (let col = 1; col <= width; col++) {
                $('tr:last').append('<td></td>');
                $('td').attr('class', 'box');  //Adds the class box to the boxes in the grid
            }
        }
        //prevent grid fluctuation
        grid.preventDefault();
        //Change background color of grid boxes on click
        $('.box').click(function(e) {
            const color = $('#colorPicker').val();
            $(e.target).css('background-color', color);
        });
    });
});
