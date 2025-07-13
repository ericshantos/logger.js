import type { LogLevel, LoggerContract } from "./contracts/logger.contract";

/**
 * A simple logger that supports multiple log levels.
 * 
 * Supported levels are: `verbose`, `info`, `warn`, and `error`.
 * Only messages with a level equal to or higher than the configured level are logged.
 */
export class Logger implements LoggerContract {
    /** Ordered list of supported log levels from lowest to highest severity. */
    private readonly levels: LogLevel[] = ['verbose', 'info', 'warn', 'error'];

    /**
     * Creates a new instance of Logger.
     * 
     * @param level - The minimum log level to output. Defaults to `'info'`.
     */
    constructor(
        private readonly level: LogLevel = 'info'
    ) {}

    /**
     * Logs a message if the provided level meets or exceeds the configured log level.
     * 
     * @param message - The message to log.
     * @param level - The severity level of the log message.
     */
    private log(message: string, level: LogLevel): void {
        const current = this.levels.indexOf(this.level);
        const target = this.levels.indexOf(level);

        if (current >= target) console.log(`[${level.toUpperCase()}] ${message}`);        
    }

    /**
     * Logs a message at the `verbose` level.
     * 
     * @param message - The verbose message to log.
     */
    public verbose(message: string): void {
        this.log(message, "verbose");
    }

    /**
     * Logs a message at the `info` level.
     * 
     * @param message - The informational message to log.
     */
    public info(message: string): void {
        this.log(message, "info");
    }

    /**
     * Logs a message at the `warn` level.
     * 
     * @param message - The warning message to log.
     */
    public warn(message: string): void {
        this.log(message, "warn");
    }

    /**
     * Logs a message at the `error` level.
     * 
     * @param message - The error message to log.
     */
    public error(message: string): void {
        this.log(message, "error");
    }
}