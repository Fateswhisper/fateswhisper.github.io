        function showDateTime() {
            var d = new Date();
            // День
            var day = d.getDate();
            // Вывод дня
            var date = day;
            document
                .getElementById('day')
                .innerHTML = date;
            // Месяц
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var month = (monthNames[d.getMonth()]);
            // Вывод месяца
            var date = month;
            document
                .getElementById('month')
                .innerHTML = date;
            // Год
            var year = d.getFullYear();
            // Вывод года
            var date = year;
            document
                .getElementById('year')
                .innerHTML = date;
            // Время
            var dat = new Date();
            var H = '' + dat.getHours();
            H = H.length < 2 ? '0' + H : H;
            var M = '' + dat.getMinutes();
            M = M.length < 2 ? '0' + M : M;
            var S = '' + dat.getSeconds();
            S = S.length < 2 ? '0' + S : S;
            // Вывод времени
            var clock = H + ':' + M + ':' + S;
            document
                .getElementById('time')
                .innerHTML = clock;
			// перерисовать 1 раз в сек
            setTimeout(showDateTime, 1000);
        }