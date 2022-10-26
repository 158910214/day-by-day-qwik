import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <h1>hello world</h1>;
});

export const head: DocumentHead = {
  title: "expanding-cards day01",
};
