import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.shoppingCartBadge = this.page.getByTestId("shopping-cart-badge");
  }

  getProduct(productName: string) {
    return this.page
      .getByTestId("inventory-item")
      .filter({ hasText: productName });
  }

  async removeProductFromCart(productName: string) {
    const product = this.getProduct(productName);

    await product.getByRole("button", { name: "Remove" }).click();
  }
}
