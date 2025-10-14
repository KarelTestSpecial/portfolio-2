from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    # Wait for 30 seconds to give the app time to start
    time.sleep(30)
    page.goto("http://localhost:3000")
    # Wait for the projects section to be visible before trying to interact with it
    page.wait_for_selector("#projects")
    projects_section = page.locator("#projects")
    projects_section.scroll_into_view_if_needed()
    page.screenshot(path="jules-scratch/verification/verify_card_widths.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
