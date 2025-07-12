import type { LogLevel, LoggerContract } from "./contracts/logger.contract";

export class Logger implements LoggerContract {
    private readonly levels: LogLevel[] = ['verbose', 'info', 'warn', 'error'];

    constructor(
        private level: LogLevel = 'info'
    ) {}

    private log(message: string, level: LogLevel): void {
        const current = this.levels.indexOf(this.level);
        const target = this.levels.indexOf(level);

        if (current >= target) console.log(`[${level.toUpperCase()}] ${message}`);        
    }

    public verbose(message: string): void {
        this.log(message, "verbose");
    }

    public info(message: string): void {
        this.log(message, "info");
    }

    public warn(message: string): void {
        this.log(message, "warn");
    }

    public error(message: string): void {
        this.log(message, "error");
    }
}