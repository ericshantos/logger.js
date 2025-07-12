import { LogOutput } from "../../core/contracts/log-output.contract";

export class ConsoleOutput implements LogOutput {
    white(formatMessage: string): void {
        console.log(formatMessage);
    }
}