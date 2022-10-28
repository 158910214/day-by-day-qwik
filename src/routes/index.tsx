import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Index from './index.css';
import ExpandingCards from './daybyday/expanding-cards/index'
import ProgressSteps from './daybyday/progress-steps/index'



export default component$(() => {
  useStyles$(Index)

  return (
    <div class='index-box full flex flex-col'>
      <div class='flex of-hidden' style='height:40%'>
        <div class='flex-1 flex-no-shrink'>
          <div className="flex flex-col full">
            <div className="flex-1">
              <ExpandingCards></ExpandingCards>
            </div>
            <h3 class='text-center p-s'><a href='/daybyday/expanding-cards'>day01</a></h3>
          </div>
        </div>
        <div class='flex-1 flex-no-shrink'>
          <div className="flex flex-col full">
            <div className="flex-1">
              <ProgressSteps></ProgressSteps>
            </div>
            <h3 class='text-center p-s'><a href='/daybyday/progress-steps'>day02</a></h3>
          </div>
        </div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
      </div>
      <div class='flex of-hidden' style='height:40%'>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
        <div class='flex-1 flex-no-shrink'>1</div>
      </div>
      <div class="text-center text-white">
        <span>github地址:  </span>
        <a href='https://github.com/158910214/day-by-day-qwik' style='color:lightskyblue'>https://github.com/158910214/day-by-day-qwik</a>
        <div>欢迎star </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "expanding-cards day01",
};
