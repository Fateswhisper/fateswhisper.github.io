		$(document).ready(function(){
			$(".tabs-command").on("click",".tabs", function ()
			{
				//присвоить ссылке класс
				$(".tabs-command .tabs").removeClass("active");
				$(this).addClass("active");
			}
			);
		});

		$(document).ready(function(){
			$(".guides").on("click",".guides-item", function ()
			{
				//присвоить ссылке класс
				$(".guides .guides-item").removeClass("active");
				$(this).addClass("active");
			}
			);
		});
