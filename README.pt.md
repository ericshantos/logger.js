# Logger.js  

[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Um pacote de logs flexível e extensível em TypeScript, baseado na arquitetura hexagonal, com suporte a múltiplos adaptadores de saída, incluindo console e arquivos.  

## Funcionalidades  

- Múltiplos níveis de log: `verbose`, `info`, `warn`, `error`  
- Nível mínimo de log configurável  
- API simples e limpa  
- Suporte a TypeScript  
- Arquitetura hexagonal para fácil extensibilidade  

## Instalação  

```bash  
npm install @ericshantos/logger  
```  

## Como Usar  

### Uso Básico  

```typescript  
import { Logger } from '@ericshantos/logger';  

const logger = new Logger('info'); // 'info' é o nível padrão  

logger.verbose('Mensagem detalhada'); // Não será exibida se o nível for 'info'  
logger.info('Mensagem informativa');  
logger.warn('Aviso importante');  
logger.error('Erro crítico');  
```  

### Configurando Níveis de Log  

Você pode definir o nível mínimo de log ao criar o logger:  

```typescript  
const loggerDetalhado = new Logger('verbose'); // Registra todos os níveis  
const loggerApenasErros = new Logger('error'); // Registra apenas erros  
```  

### Estendendo o Logger  

O pacote segue os princípios da arquitetura hexagonal, facilitando a criação de adaptadores personalizados. Implemente a interface `LoggerContract` para criar suas próprias soluções de log.  

```typescript  
import type { LoggerContract, LogLevel } from '@ericshantos/logger';  

class MeuLoggerPersonalizado implements LoggerContract {  
    // Implemente os métodos necessários  
}  
```  

## Referência da API  

### Classe `Logger`  

#### Construtor  
```typescript  
new Logger(nivel?: LogLevel = 'info')  
```  

#### Métodos  
- `verbose(mensagem: string): void`  
- `info(mensagem: string): void`  
- `warn(mensagem: string): void`  
- `error(mensagem: string): void`  

### Tipos  
- `LogLevel`: `'verbose' | 'info' | 'warn' | 'error'`  
- `LoggerContract`: Interface que todas as implementações de logger devem seguir  

## Desenvolvimento  

### Compilando o Projeto  

```bash  
npm run build  
```  

### Estrutura do Projeto  

```
├── src  
│   ├── core  
│   │   ├── contracts         # Interfaces e tipos principais  
│   │   └── logger.service.ts # Implementação principal do logger  
│   └── index.ts             # Exportações públicas da API  
```  

## Licença  

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.  

## Contribuições  

Contribuições são bem-vindas! Abra uma *issue* ou envie um *pull request*.