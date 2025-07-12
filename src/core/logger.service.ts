import type { LogLevel, LoggerContract } from "./contracts/logger.contract";
import { LogOutput } from "./contracts/log-output.contract";

export class Logger implements LoggerContract {
    private readonly levels: LogLevel[] = ['error', 'info', 'verbose', 'warn'];

    constructor(
        private level: LogLevel = 'info',
        private readonly output: LogOutput
    ) {}

    private setLevel(level: LogLevel): void {
        if (this.levels.includes(level)) {
            this.level = level
        } else {
            console.log(`[WARN] Unknown logging level: ${level}`);
        }
    }

    private log(message: string, level: LogLevel): void {
        const current = this.levels.indexOf(this.level);
        const target = this.levels.indexOf(level);

        if (current >= target) this.output.white(`[${level.toUpperCase()}] ${message}`);        
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