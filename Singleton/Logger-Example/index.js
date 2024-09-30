class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance; 
        }

        this.logs = []; 
        Logger.instance = this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`[${timestamp}] ${message}`);
    }

    getLogs() {
        return this.logs;
    }
}


const logger1 = new Logger();  
logger1.log("First log message");  

const logger2 = new Logger();
logger2.log("Second log message");


console.log(logger1.getLogs()); 
console.log(logger1 === logger2);