/**
 * Defines the allowed log levels, ordered from lowest to highest severity.
 * 
 * - `verbose`: Used for detailed internal messages, typically for debugging.
 * - `info`: General operational messages that highlight the progress of the application.
 * - `warn`: Potential issues that aren't necessarily errors but may need attention.
 * - `error`: Critical issues that require immediate attention.
 */
export type LogLevel = 'verbose' | 'info' | 'warn' | 'error';

/**
 * Contract for a logging utility. Any class implementing this interface
 * must support logging at four severity levels.
 */
export interface LoggerContract {

    /**
     * Logs a message with the `verbose` level.
     * 
     * @param message - A detailed, potentially low-importance message.
     */
    verbose(message: string): void;

    /**
     * Logs a message with the `info` level.
     * 
     * @param message - An informational message for normal operations.
     */
    info(message: string): void;

    /**
     * Logs a message with the `warn` level.
     * 
     * @param message - A warning indicating a potential issue.
     */
    warn(message: string): void;

    /**
     * Logs a message with the `error` level.
     * 
     * @param message - An error message indicating a serious problem.
     */
    error(message: string): void;
}