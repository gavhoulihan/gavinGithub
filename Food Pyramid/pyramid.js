let counters = [0, 0, 0, 0, 0, 0]; // Array to store counter values

        function incrementCounter(level) {
            counters[level - 1]++;
            document.getElementById('counter' + level).innerText = counters[level - 1];
        }

        function decrementCounter(level) {
            if (counters[level - 1] > 0) {
                counters[level - 1]--;
                document.getElementById('counter' + level).innerText = counters[level - 1];
            }
        }