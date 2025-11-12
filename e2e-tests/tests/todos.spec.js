import { expect, test } from "@playwright/test";

test('Page at / has heading "Todos".', async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Todos")).toBeVisible();
});