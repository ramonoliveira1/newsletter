function Input({ type, placeholder }: { type: string, placeholder: string } ) {
  return (
    <input className="py-1 px-5 w-full max-w-lg outline-none dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full placeholder:text-gray-400 placeholder:dark:text-gray-500 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-400 focus:dark:invalid:border-2 focus:dark:invalid:border-red-400" required type={ type } placeholder={ placeholder } />
  )
}

export default Input
