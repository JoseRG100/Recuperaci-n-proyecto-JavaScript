let salas = $('.salas .waiting-box__room');
for (let i = 0; i < salas.length; i++) {
    let totaljugadores = salas[i].childElementCount;
    if (totaljugadores == 2) {
        $('.salas .s-' + [i] + ' .waiting-box__room').removeAttr('disabled');
    } else {
        $('.salas .s-' + [i] + ' .waiting-box__room').attr('disabled', 'disabled');
    }
}