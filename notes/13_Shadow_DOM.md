# 13_Shadow_DOM — Notes

Notes for everything covered in `tests/13_Shadow_DOM/`. The main lesson here is almost
invisible in the code itself: nothing in this file does anything special to "enter" a
shadow root, and that absence *is* the lesson. Diagrams are in Mermaid (renders natively
on GitHub and in VS Code's preview).

## File map

| File | Concept it teaches |
|---|---|
| `259_Shadow_DOM.spec.ts` | Locating elements inside shadow DOM components — automatically, no special syntax |

---

## 1. Playwright pierces shadow roots automatically

```ts
const card = page.getByTestId('card-account-card');
await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
await card.locator('input[name="password"]').fill('pw');
await card.getByTestId('card-account-submit').click();
```

If `card-account-card` is a custom element (e.g. `<account-card>`) with a **shadow root**,
and the email/password inputs live *inside* that shadow root, this still works with zero
extra ceremony. This was already mentioned in `notes/03_Locator_Commands.md` Part B3 —
this file is where it's worth seeing in practice: there's no `shadowRoot` property to dig
into, no special selector prefix, nothing. `page.locator()`/`getByTestId()`/`getByRole()`
all pierce **open** shadow roots by default.

```mermaid
flowchart TD
    Host["&lt;account-card&gt; (custom element)"] --> SR["#shadow-root (open)"]
    SR --> Input1["&lt;input name='email'&gt;"]
    SR --> Input2["&lt;input name='password'&gt;"]
    Playwright["card.locator('input[name=\"email\"]')"] -.finds it directly,\nno special syntax.-> Input1
```

**Contrast with iframes (topic 09):** an `<iframe>` needs `page.frameLocator(selector)`
before you can touch anything inside it — a separate document requires a separate API.
A shadow root is still part of the *same* document, just encapsulated for styling/JS
purposes, so normal locators reach straight through it.

---

## 2. A second, independent shadow component on the same page

```ts
const cart = page.getByTestId('counter-cart');
await cart.getByRole('button', { name: 'Increment' }).click();
await cart.getByRole('button', { name: 'Increment' }).click();
await expect(cart.getByTestId('counter-value')).toHaveText('5');
```

Same pattern, different component — scope a locator to the custom element's host
(`counter-cart`), then locate/act within it as normal. Nothing about this changes whether
`counter-cart` has its own shadow root or not.

---

## 3. A line that doesn't actually do anything

```ts
await page.getByTestId('nested-host');
await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
```

`page.getByTestId('nested-host')` here is built and `await`-ed, but never used — no
`.click()`, no `.locator()` chained off it, nothing. `getByTestId()` returns a `Locator`
synchronously (it isn't a promise), so `await`-ing it on its own line resolves immediately
and has no effect either way. The next line goes straight back to `page.getByTestId(...)`
(not `nestedHost.getByTestId(...)`) for the actual fill — which still works, *because*
shadow-piercing locators don't need you to "enter" a nested host first the way `frameLocator`
needs you to enter an iframe. The dead line is harmless, but it's worth deleting (or, if the
intent was to scope the next three locators to that nested host explicitly for clarity,
rewriting as `const nestedHost = page.getByTestId('nested-host'); await nestedHost.getByTestId('card-inside-email').fill(...)`).

---

## Quick recap

| Need | Reach for |
|---|---|
| Element inside an **open** shadow root | A normal locator — Playwright pierces it automatically |
| Element inside a **closed** shadow root | Not reachable via standard locators at all — this repo hasn't hit that case yet |
| Scope to a custom element's host first | Optional stylistic choice, not required the way `frameLocator` is for iframes |
| Shadow DOM vs iframe | Shadow DOM: same document, pierced automatically. iframe: separate document, needs `frameLocator` |
