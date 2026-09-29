const { test, expect } = require('@playwright/test'); 
test('deve realizar login com sucesso', async ({ page }) => { 
  // Navega até a página 
  await page.goto('https://exemplo.com/login'); 

  // Preenche os campos diretamente usando locators 
  await page.locator('#username').fill('usuario'); 
  await page.locator('#password').fill('senha'); 

  // Clica no botão de login 
  await page.locator('#login-button').click(); 

  // Asserção com espera automática (auto-waiting) 
  await expect(page.locator('#welcome-message')).toBeVisible(); 
});
