import useFetchArticles from "../../hooks/useFetchArticles"
import Article from "../Article";

function ArticleList() {
  const { articles } = useFetchArticles();

  return (
    <div className="mt-5 grid gap-5 mx-4 max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {
        articles.map((article, index) => (
          <Article key={ index } {...article} />
      ))}
    </div>
  )
}

export default ArticleList
