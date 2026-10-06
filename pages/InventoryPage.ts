import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  private readonly shoppingCartButton: Locator;
  private readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.shoppingCartButton = page.getByTestId("shopping-cart-link");
    this.shoppingCartBadge = page.getByTestId("shopping-cart-badge");
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .getByTestId("inventory-item")
      .filter({ hasText: productName });

    await product.getByRole("button", { name: "Add to cart" }).click();
  }

  async openShoppingCart() {
    await this.shoppingCartButton.click();
  }
}
