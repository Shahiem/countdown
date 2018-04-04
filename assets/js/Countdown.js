class Countdown {
    constructor(identifier) {
        this.identifier = identifier;
        this.element = document.querySelector('.countdown');
        this.now = new Date();
        this.specificDay = new Date();
    }

    getText() {
        this.specificDay.setDate(10);
        this.specificDay.setHours(18);
        this.specificDay.setMinutes(0);
        this.specificDay.setSeconds(0);

        let days = this.specificDay.getDate() - this.now.getDate();
        let diffrence = this.specificDay.getTime() - this.now.getTime();

        let hours = Math.floor(diffrence % 86400000 / 3600000)
        let minutes = Math.floor(diffrence % 3600000 / 60000);

        console.log(hours);

        let text = '';

        switch(days) {
            case 0:
                // text = 'Nog ' + hours + ':' + minutes + ':' + seconds;
                break;
            case 1:
                // text = 'Nog 1 dagen en ' + hours + ':' + minutes + ':' + seconds;
                break;
            default:
                text = 'Nog ' + days + ' dagen';
        }

        return text;
    }

    showCountdown() {        
       this.element.textContent = this.specificDay >= this.now ? this.getText() : 'Def';
    }
}