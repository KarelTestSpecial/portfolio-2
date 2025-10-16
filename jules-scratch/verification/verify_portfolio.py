import time
from playwright.sync_api import sync_playwright, Page, expect

def verify_portfolio(page: Page):
    """
    This script verifies the portfolio application by checking both the
    Dutch and English versions and taking screenshots.
    """
    # 1. Navigate to the local development server.
    page.goto("http://localhost:8000/")

    # 2. Wait for the initial Dutch content to load.
    expect(page.get_by_role("heading", name="Contact")).to_be_visible(timeout=15000)

    # 3. Take a screenshot of the Dutch version.
    page.screenshot(path="jules-scratch/verification/screenshot-nl.png", full_page=True)

    # 4. Switch to the English version.
    page.get_by_role("button", name="EN").click()

    # 5. Wait for the English content to load.
    expect(page.get_by_role("heading", name="Contact")).to_be_visible(timeout=15000)

    # 6. Take a screenshot of the English version.
    page.screenshot(path="jules-scratch/verification/screenshot-en.png", full_page=True)


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_portfolio(page)
        browser.close()

if __name__ == "__main__":
    main()