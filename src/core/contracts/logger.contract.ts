export type LogLevel = 'verbose' | 'info' | 'warn' | 'error';

export interface LoggerContract {
    verbose(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}