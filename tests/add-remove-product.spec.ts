import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { PRODUCTS } from "../test-data/products";

//finpuds

test.describe("Shopping Cart", () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await page.goto("https://www.saucedemo.com/inventory.html");
  });

  test("user can add a product to the shopping cart", async ({}) => {
    await inventoryPage.addProductToCart(PRODUCTS.bikeLight);
    await inventoryPage.openShoppingCart();

    await expect(cartPage.getProduct(PRODUCTS.bikeLight)).toBeVisible();

    await expect(cartPage.shoppingCartBadge).toHaveText("1");
  });

  test("user can remove a product from the shopping cart", async ({}) => {
    await inventoryPage.addProductToCart(PRODUCTS.bikeLight);
    await inventoryPage.openShoppingCart();

    await cartPage.removeProductFromCart(PRODUCTS.bikeLight);

    await expect(cartPage.getProduct(PRODUCTS.bikeLight)).toHaveCount(0);
  });
});
