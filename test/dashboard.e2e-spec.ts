import { test, expect } from "@playwright/test";

test("Display day orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.waitForTimeout(2000);

  expect(page.getByText("20", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação a ontem")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("Display month orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.waitForTimeout(2000);

  expect(page.getByText("200", { exact: true })).toBeVisible();
  expect(page.getByText("+7% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("Display month canceled orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.waitForTimeout(2000);

  expect(page.getByText("5", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação a ontem")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("Display month revenue metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.waitForTimeout(2000);

  expect(page.getByText("R$ 200,00", { exact: true })).toBeVisible();
  expect(page.getByText("+10 em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(2000);
});
