document.addEventListener("DOMContentLoaded", function() {
    const now = new Date().getTime();
    const targetTime = now + (3 * 30 * 24 * 60 * 60 * 1000) + (2 * 24 * 60 * 60 * 1000) + (60 * 1000); // 3 bulan + 2 hari + 1 menit dari sekarang
  
    setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;
  
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById("monthsBtn").innerText = months + " Months";
      document.getElementById("daysBtn").innerText = days + " Days";
      document.getElementById("hoursBtn").innerText = hours + " Hours";
      document.getElementById("minutesBtn").innerText = minutes + " Minutes";
      document.getElementById("secondsBtn").innerText = seconds + " Seconds";
    }
});
