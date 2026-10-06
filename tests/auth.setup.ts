import { LoginPage } from "../pages/LoginPage";
import { USERS } from "../test-data/users";
import { test as setup } from "@playwright/test";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(USERS.standard.username, USERS.standard.password);

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});
