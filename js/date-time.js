        function showDateTime() {
            var d = new Date();
            // ����
            var day = d.getDate();
            // ����� ���
            var date = day;
            document
                .getElementById('day')
                .innerHTML = date;
            // �����
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var month = (monthNames[d.getMonth()]);
            // ����� ������
            var date = month;
            document
                .getElementById('month')
                .innerHTML = date;
            // ���
            var year = d.getFullYear();
            // ����� ����
            var date = year;
            document
                .getElementById('year')
                .innerHTML = date;
            // �����
            var dat = new Date();
            var H = '' + dat.getHours();
            H = H.length < 2 ? '0' + H : H;
            var M = '' + dat.getMinutes();
            M = M.length < 2 ? '0' + M : M;
            var S = '' + dat.getSeconds();
            S = S.length < 2 ? '0' + S : S;
            // ����� �������
            var clock = H + ':' + M + ':' + S;
            document
                .getElementById('time')
                .innerHTML = clock;
			// ������������ 1 ��� � ���
            setTimeout(showDateTime, 1000);
        }