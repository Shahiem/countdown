/**
 * CountdownTimer v1.0.0
 * Copyright 2018 Shahiem Seymor (shahiemseymor.com)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
 class Countdown {
    constructor(identifier) {
      this.element = document.querySelector(identifier);
      this.intervalCounter = 0;
      this.startDate = new Date();
        
       // Set date on 10th day of the current month
      this.endDate = new Date();
      this.endDate.setDate(10);
      this.endDate.setHours(0, 0, 0);
  
      this.daysLeft = this.endDate.getDate() - this.startDate.getDate();
      this.drawCountdown(); // Call draw countdown method
    }

    addZero(number) {
      return number  <= 9 ? '0' + number : number; // Add a zero before a number below 10
    }

    drawTimer() {
      this.intervalCounter++;

      // Calculate time diffrence
      let timeMs = this.endDate.getTime() - new Date().getTime();
      let timeHours = this.addZero(Math.floor(timeMs % 86400000 / 3600000));
      let timeMinutes = this.addZero(Math.floor(timeMs % 3600000 / 60000));
      let timeSeconds = this.addZero(Math.floor(timeMs % 60000 / 1000));
      let timer =  timeHours + ':' + timeMinutes + ':' + timeSeconds;

      this.element.textContent = 'Nog ' + (this.daysLeft == 1 ? '1 dag en ' : '') + timer; // Day 9 & 10

      // Clear interval after 30 seconds
      if (this.intervalCounter > 30)
        clearInterval(this.intervalTimer);
    }

    drawCountdown() {
      if (this.daysLeft == 0) {
        this.endDate.setHours(18, 0, 0); // Count to 6pm on the last day
      }
      
      if (this.startDate < this.endDate) {
        if (this.daysLeft <= 1) {
          this.drawTimer(); // Start before interval

          this.intervalTimer = setInterval(
            this.drawTimer.bind(this),  // Bind this arguments in drawTimer method
            1000
          );
        } else {
          this.element.textContent = this.daysLeft > 0 ? 'Nog ' + this.daysLeft + ' dagen' : ''; // Day < 9
        }
      }
    }
}

let clock = new Countdown('.countdown');

// Instance 2
let clock2 = new Countdown('#countdown2');

