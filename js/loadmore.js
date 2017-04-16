$(function () {
    $(".project").slice(0, 4).show(); // показываем 3 первые блока
    $("#loadMore").on('click', function (e) { // запускаем евент при клике мыши
        e.preventDefault();
        $(".project:hidden").slice(0, 2).slideDown(1000); // выбираем следующие 3 скрытые блока и показываем их
        if ($(".project:hidden").length == 0) { // проверяем есть ли еще скрытые блоки
			$(".blog-button").fadeOut(1000); // скрываем блок кнопки Load more
        }
		// анимируем переход к всплывающему блоку
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});