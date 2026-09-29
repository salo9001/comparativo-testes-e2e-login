const { Builder, By, until } = require('selenium-webdriver'); 
async function testeDeLogin() { 
    // Inicializa o driver do navegador 
    let driver = await new Builder().forBrowser('chrome').build(); 
    try { 
        // Navega até a página de login 
        await driver.get('https://exemplo.com/login'); 
        // Interage com os elementos usando localizadores explícitos 
        await driver.findElement(By.id('username')).sendKeys('usuario'); 
        await driver.findElement(By.id('password')).sendKeys('senha'); 
        await driver.findElement(By.id('login-button')).click(); 
        // Aguarda explicitamente até que o elemento de sucesso apareça na tela 
        let mensagemSucesso = await driver 
            .wait(until.elementLocated(By.id('welcome-message')), 5000); 
        // Valida se o elemento está visível 
        let visivel = await mensagemSucesso.isDisplayed(); 
        if (!visivel) throw new Error("Mensagem não está visível"); 
    } finally { 
        // Encerra a sessão do navegador 
        await driver.quit(); 
    } 
}
