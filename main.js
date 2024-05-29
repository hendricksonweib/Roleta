var degree = 1800;
var clicks = 0;

$(document).ready(function(){
    $('#spin').click(function(){
        clicks++;

        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        var totalDegree = newDegree + extraDegree;

        $('#interno-roleta').css({
            'transform': 'rotate(' + totalDegree + 'deg)'
        });

        setTimeout(function(){
            // Efeito de confete após a rotação
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            // Redirecionar após o efeito de confete
            setTimeout(function(){
                window.location.href = 'parabens.html';
            }, 2000); // Tempo para o efeito de confete terminar (2 segundos)
        }, 6000); // Tempo de rotação da roleta (6 segundos)
    });
});
