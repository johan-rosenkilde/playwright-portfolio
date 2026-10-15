import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { PRODUCTS } from "../test-data/products";

test("user can go through the checkout process", async ({ page }) => {
  const cartPage = new CartPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto("https://www.saucedemo.com/inventory.html");
  await inventoryPage.addProductToCart(PRODUCTS.bikeLight);
  await inventoryPage.openShoppingCart();
  await cartPage.clickCheckout();
});

//add describe -> section 1: add a product -> section 2: go through checkout
