import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Index from './index.css';
import ExpandingCards from './daybyday/expanding-cards/index'

export default component$(() => {
  useStyles$(Index)

  return (
    <div class='index-box full flex flex-col'>
      <div class='flex of-hidden' style='height:50%'>
        <div class='flex-1 flex-no-shrink'>
          <div className="flex flex-col full">
            <div className="flex-1">
              <ExpandingCards></ExpandingCards>
            </div>
            <h3 class='text-center p-s'><a href='/daybyday/expanding-cards'>day01</a></h3>
          </div>
        </div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
      </div>
      <div class='flex of-hidden' style='height:50%'>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "expanding-cards day01",
};
