import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly shoppingCartBadge: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.shoppingCartBadge = this.page.getByTestId("shopping-cart-badge");
    this.checkoutButton = this.page.getByTestId("checkout");
  }

  // get product
  getProduct(productName: string) {
    return this.page
      .getByTestId("inventory-item")
      .filter({ hasText: productName });
  }
  // remove product from Cart
  async removeProductFromCart(productName: string) {
    const product = this.getProduct(productName);

    await product.getByRole("button", { name: "Remove" }).click();
  }

  //click checkout
  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
