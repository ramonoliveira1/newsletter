import { ArticleType } from "../../types"

function Article({ title, text, tags, image, alt }: ArticleType) {
  return (
    <div className="p-5 bg-gray-200 flex flex-col gap-2 items-center text-center dark:bg-dark-200 rounded-xl sm:shadow-md sm:hover:shadow-gray-500 sm:hover:shadow-lg ">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="flex justify-end gap-2 pr-5 w-full">
        {
          tags.map((tag) => {
            return <span key={tag} className="bg-alura-100 text-xs uppercase dark:bg-dark-100 font-bold text-gray-200 px-4 py-1 rounded-full cursor-pointer hover:bg-alura-200 hover:scale-110">{tag}</span>
          })
        }
      </div>
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
