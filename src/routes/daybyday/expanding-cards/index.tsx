import { component$, useStyles$, useStore, useClientEffect$ } from '@builder.io/qwik';
import ExpandingCards from './expanding-cards.css';

export default component$(() => {
  useStyles$(ExpandingCards)
  const store = useStore({ active: 0 });

  const CONFIG_ITEMS = [
    ['Explore The World', 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
    ['Wild Forest', 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
    ['Sunny Beach', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'],
    ['City on Winter', 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'],
    ['Mountains - Clouds', 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
  ]

  useClientEffect$(() => {
    const updateFn = (idx: number) => store.active = idx >= CONFIG_ITEMS.length ? idx % CONFIG_ITEMS.length : idx
    const update = () => {
      updateFn(store.active + 1)
    };
    const tmrId = setInterval(update, 3000);
    return () => clearInterval(tmrId);
  });
  return (
    <div class="container flex items-center justify-center full">
      {CONFIG_ITEMS.map(([label, url], index) => (
        <div class={store.active === index ? 'active panel' : 'panel'} style={`background-image: url(${url}}`} onClick$={() => store.active = index} >
          <h3>{label}</h3>
        </div>
      ))}
    </div >
  )
})