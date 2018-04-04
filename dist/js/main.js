class Countdown {
    constructor(identifier) {
        this.identifier = identifier;
        this.element = document.querySelector('.countdown');
        this.countSecond = 0;

        this.interval = setInterval(
            this.draw.bind(this), 
            1000
        );
    }

    addZero(number) {
        return number  <= 9 ? '0' + number : number;
    }
    
    draw() {   
        this.countSecond++;

        let now = new Date();
        
        let specificDay = new Date();
        specificDay.setDate(10);
        specificDay.setHours(18, 0, 0);

        let days = specificDay.getDate() - now.getDate();
        let diffrence = specificDay.getTime() - now.getTime();
        
        // Times
        let hours = this.addZero(Math.floor(diffrence % 86400000 / 3600000));
        let minutes = this.addZero(Math.floor(diffrence % 3600000 / 60000));
        let seconds = this.addZero(Math.floor(diffrence % 60000 / 1000));

        switch(days) {
            case 0:
                this.element.textContent = 'Nog ' + hours + ':' + minutes + ':' + seconds;
                break;
            case 1:
                this.element.textContent = 'Nog 1 dag en ' + hours + ':' + minutes + ':' + seconds;
                break;
            default:
                this.element.textContent = 'Nog ' + days + ' dagen';
        }

        if (this.countSecond >= 30) {
            clearInterval(this.interval);
        }
    }
}
let clock = new Countdown('.countdown');

