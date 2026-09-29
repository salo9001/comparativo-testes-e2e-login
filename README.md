# Comparativo de testes E2E: Selenium, Cypress e Playwright

Este repositório reúne três implementações de um mesmo cenário de teste end-to-end (E2E): realizar login e verificar se uma mensagem de boas-vindas aparece na página.

O objetivo é apoiar um Trabalho de Conclusão de Curso (TCC) sobre a comparação de frameworks de testes E2E, observando tanto a implementação do teste quanto aspectos da experiência de desenvolvimento.

## Cenário de teste

As três implementações seguem o mesmo fluxo:

1. Acessar a página de login.
2. Preencher usuário e senha.
3. Clicar no botão de login.
4. Verificar se a mensagem de boas-vindas está visível.

Os exemplos utilizam os mesmos identificadores de elementos: `#username`, `#password`, `#login-button` e `#welcome-message`.

## Implementações

| Framework | Arquivo sugerido | Característica observável no exemplo |
| --- | --- | --- |
| Selenium | `selenium.test.js` | Cria e encerra explicitamente a sessão do navegador; usa uma espera explícita antes de verificar a visibilidade. |
| Cypress | `cypress.cy.js` | Expressa as interações e a verificação por meio de comandos `cy`. |
| Playwright | `playwright.spec.js` | Usa `page.locator` para interagir com a página e `expect` para verificar a visibilidade. |

## Organização

```text
comparativo-testes-e2e-login/
├── README.md
├── selenium.test.js
├── cypress.cy.js
└── playwright.spec.js
```
