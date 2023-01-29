import WindowWidth from '../hooks/useWindowWidth';
import docs from '../data/docs.yaml';

export default function DocsMenu({ url }) {
  const { width } = WindowWidth();

  const setOpenAttribute = width <= 1280 ? false : true;
  const currentUrl = `${url}/`;

  return docs.map((section) => {
    return (
      <details class="menu | left" open={setOpenAttribute}>
        <summary>{section.title}</summary>
        <ul class="flow | current-page" role="list">
          <li>
            <a
              href={section.url}
              aria-current={`${
                currentUrl === `${section.url}` ? 'page' : 'false'
              }`}
            >
              {section.title}
            </a>
          </li>
          {section.articles.map((article) => {
            return (
              <li>
                <a
                  href={article.url}
                  aria-current={`${
                    currentUrl === `${article.url}` ? 'page' : 'false'
                  }`}
                >
                  {article.title}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    );
  });
}
