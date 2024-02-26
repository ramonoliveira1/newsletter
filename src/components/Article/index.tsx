import { ArticleType } from "../../types"

function Article({ title, text, tags, image, alt }: ArticleType) {
  return (
    <div className="p-5 bg-gray-200 flex flex-col items-center text-center dark:bg-dark-200 rounded-xl sm:shadow-md">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="grid gap-1">
        {text.map((content, index) => {
          return <p className="text-alura-200 dark:text-gray-200" key={index}>{content}</p>
        })}
      </div>
      { image && <img className="p-4" src={image} /> }
      { image && alt && <span className="sr-only">{ alt }</span> }
    </div>
  )
}

export default Article
