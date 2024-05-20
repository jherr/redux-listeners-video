import { expect, test } from "vitest";
import { store, searchUpdated } from "./index";

test("sets the search string", async () => {
  await store.dispatch(searchUpdated("pikachu"));

  // Wait for the debounce to finish
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const state = store.getState();
  expect(state.pokemon.search).toEqual("pikachu");
  expect(state.pokemon.pokemon.length).toBeGreaterThanOrEqual(1);
});
