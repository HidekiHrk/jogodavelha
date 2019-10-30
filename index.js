$(() => {
    init = true;
    buttons = '<td><input class="btn" type="button" value=""></td>';
    rows = '<tr>' + buttons.repeat(3) + '</tr>';
    table  = '<table>' + rows.repeat(3) + '</table>';
    $('#bdy').append($(table));
    $('.btn').click((e) => {
        let ct = $(e.currentTarget);
        let i;
        if(ct.attr('value').length > 0){
            return;
        }
        else if(init){
            i = ['O', 'blue']; init = false;
        }
        else{
            i = ['X', 'red']; init = true;
        }
        ct
            .attr('value', i[0])
            .css('color', i[1]);
    })
})