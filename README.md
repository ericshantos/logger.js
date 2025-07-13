[🇧🇷] [Lê em português](./README.pt.md)

# Logger.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A flexible and extensible TypeScript logger package based on the hexagonal architecture, with support for multiple output adapters, including console and files.

## Features

- Multiple log levels: `verbose`, `info`, `warn`, `error`
- Configurable minimum log level
- Simple and clean API
- TypeScript support
- Hexagonal architecture for easy extensibility

## Installation

```bash
npm install @ericshantos/logger
```

## Usage

### Basic Usage

```typescript
import { Logger } from '@ericshantos/logger';

const logger = new Logger('info'); // 'info' is the default level

logger.verbose('This is a verbose message'); // Won't be logged if level is 'info'
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```

### Custom Log Levels

You can set the minimum log level when creating the logger:

```typescript
const verboseLogger = new Logger('verbose'); // Will log all levels
const errorOnlyLogger = new Logger('error'); // Will log only errors
```

### Extending the Logger

The package follows hexagonal architecture principles, making it easy to create custom adapters. Implement the `LoggerContract` interface to create your own logger implementations.

```typescript
import type { LoggerContract, LogLevel } from '@ericshantos/logger';

class CustomLogger implements LoggerContract {
    // Implement all required methods
}
```

## API Reference

### `Logger` Class

#### Constructor
```typescript
new Logger(level?: LogLevel = 'info')
```

#### Methods
- `verbose(message: string): void`
- `info(message: string): void`
- `warn(message: string): void`
- `error(message: string): void`

### Types
- `LogLevel`: `'verbose' | 'info' | 'warn' | 'error'`
- `LoggerContract`: Interface that all logger implementations must follow

## Development

### Building the Project

```bash
npm run build
```

### Project Structure

```
├── src
│   ├── core
│   │   ├── contracts        # Core interfaces and types
│   │   └── logger.service.ts # Main logger implementation
│   └── index.ts            # Public API exports
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.