const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require("assert");
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given("Open link", {timeout: 60 * 1000}, async function() {
  await page.goto("https://mu.academia.edu/GrandelDsouza");
});

When("Click on it", async function() {
  await page.click('[data-follow-user-id="169983582"]');
});

Then("Check", async function() {
  let title = await page.title();

  try {
    assert.equal(title,
        "Grandel Dsouza | University of Mumbai - Academia.edu");

    await this.setTestStatus("passed", "Title matched");
  } catch (e) {
    await this.setTestStatus("failed", e);
    throw(e);
  }
});
