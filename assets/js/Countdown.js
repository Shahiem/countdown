class Countdown {
    constructor(identifier) {
        this.identifier = identifier;
        this.element = document.querySelector('.countdown');
        this.now = new Date();
        this.specificDay = new Date();
    }

    addZero(number) {
        return number  <= 9 ? '0' + number : number;
    }

    getText() {
        this.specificDay.setDate(10);
        this.specificDay.setHours(18, 0, 0);

        let days = this.specificDay.getDate() - this.now.getDate();
        let diffrence = this.specificDay.getTime() - this.now.getTime();

        let hours = this.addZero(Math.floor(diffrence % 86400000 / 3600000));
        let minutes = this.addZero(Math.floor(diffrence % 3600000 / 60000));
        let seconds = this.addZero(Math.floor(diffrence % 60000 / 1000));

        switch(days) {
            case 0:
                this.text = 'Nog ' + hours + ':' + minutes + ':' + seconds;
                break;
            case 1:
                this.text = 'Nog 1 dag en ' + hours + ':' + minutes + ':' + seconds;
                break;
            default:
                this.text = 'Nog ' + days + ' dagen';
        }

        return this.text;
    }

    showCountdown() {        
       this.element.textContent = this.specificDay >= this.now ? this.getText() : 'Def';
    }
}