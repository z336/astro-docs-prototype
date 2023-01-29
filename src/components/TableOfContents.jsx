import WindowWidth from '../hooks/useWindowWidth';

export default function TableOfContents({ headings }) {
  const { width } = WindowWidth();

  const setOpenAttribute = width <= 1280 ? false : true;

  return (
    <details
      class="menu | right"
      id="table-of-contents"
      open={setOpenAttribute}
    >
      <summary>On this page</summary>
      <ul class="flow" role="list">
        <li>
          <a href="#overview">Overview</a>
        </li>
        {headings.map((heading) => {
          if (heading.depth === 2)
            return (
              <li>
                <a href={`#${heading.slug}`}>{heading.text}</a>
              </li>
            );
          if (heading.depth === 3)
            return (
              <ul role="list">
                <li>
                  <a href={`#${heading.slug}`}>{heading.text}</a>
                </li>
              </ul>
            );
        })}
      </ul>
    </details>
  );
}
