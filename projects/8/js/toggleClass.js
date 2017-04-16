		$(document).ready(function(){
			$(".toggle-item").on("click","span", function ()
			{
				$(this).toggleClass("active");
				//Функция jQuery toggleClass позволяет организовать переключатель класса,
				//принимая в качестве входного параметра его название.
				//Если данный класс уже присутствует у текущего элемента набора,
				//в момент вызова функции, он будет удален. Иначе - добавлен.
			}
			);
		});	
	
		$(document).ready(function(){
			$(".tabs-item").on("click",".tabs", function ()
			{
				//присвоить ссылке класс
				$(".tabs-item .tabs").removeClass("active");
				$(this).addClass("active");
			}
			);
		});
		
