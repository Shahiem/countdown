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
      this.endDate.setHours(18, 0, 0);

      this.daysLeft = endDate.getDate() - startDate.getDate();

      this.intervalMethod = setInterval(
        this.drawTimer.bind(this), 
        1000
      );
    }

    addZero(number) {
      return number  <= 9 ? '0' + number : number; // Add a zero before a number below 10
    }
    
    drawTimer() {   
      this.intervalCounter++;

      // Calculate time diffrence
      let timeMs = this.endDate.getTime() - this.startDate.getTime();
      let timeHours = this.addZero(Math.floor(timeMs % 86400000 / 3600000));
      let timeMinutes = this.addZero(Math.floor(timeMs % 3600000 / 60000));
      let timeSeconds = this.addZero(Math.floor(timeMs % 60000 / 1000));

      switch(this.daysLeft) {
        case 0:
          this.element.textContent = 'Nog ' + timeHours + ':' + timeMinutes + ':' + timeSeconds; // Day 10
          break;
        case 1:
          this.element.textContent = 'Nog 1 dag en ' + timeHours + ':' + timeMinutes + ':' + timeSeconds; // Day 9
          break;
        default:
          this.element.textContent = daysLeft > 0 ? 'Nog ' + this.daysLeft + ' dagen' : ''; // Day < 9
      }

      // Empty text content when date has passed
      if (this.startDate > this.endDate) {
        this.element.textContent = '';
      }

      // Clear timer after 30 seconds
      if (this.intervalCounter >= 30) {
        clearInterval(this.intervalMethod);
      }
    }
}

let clock = new Countdown('.countdown');

// Instance 2
let clock2 = new Countdown('#countdown2');

