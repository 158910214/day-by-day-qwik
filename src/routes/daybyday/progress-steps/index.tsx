import { component$, useStyles$, useStore, useClientEffect$, $ } from '@builder.io/qwik';
import ProgressSteps from './progress-steps.css';

export default component$(() => {
  useStyles$(ProgressSteps)
  const store = useStore({
    active: 0
  });

  const STEPS = [
    ['1'],
    ['2'],
    ['3'],
    ['4'],
  ]

  const isNextDisabled = store.active === STEPS.length - 1
  const onNext = $(() => {
    if (store.active + 1 > STEPS.length) return
    store.active = store.active + 1
  })
  const isPrevDisabled = store.active === 0
  const onPrev = $(() => {
    if (store.active - 1 < 0) return
    store.active = store.active - 1
  })

  useClientEffect$(() => {
    const updateFn = (idx: number) => store.active = idx >= STEPS.length ? idx % STEPS.length : idx
    const update = () => {
      updateFn(store.active + 1)
    };
    const tmrId = setInterval(update, 3000);
    return () => clearInterval(tmrId);
  });
  return (
    <div class="container flex flex-col items-center justify-center full">
      <div className="progress-container">
        {STEPS.map(([label], index) => (
          <div class={store.active === index ? 'active circle' : 'circle'}  >
            {label}
          </div>
        ))}
      </div>
      <div>
        <button class="btn" id="prev" disabled={isPrevDisabled} onClick$={onPrev}>Prev</button>
        <button class="btn" id="next" disabled={isNextDisabled} onClick$={onNext}>Next</button>
      </div>
    </div >
  )
})