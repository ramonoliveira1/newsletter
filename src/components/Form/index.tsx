import Input from "../Input"

/* eslint-disable @typescript-eslint/no-explicit-any */
type FormProps = {
  onSubmit: (data: { name: string, email: string }) => void
}

function Form({ onSubmit }: FormProps) {
  const safeSubmit = (event: any) => {
    event.preventDefault()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return (
    <form onSubmit={ safeSubmit } className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="E-mail" />
      <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">
        Entrar
      </button>
    </form>
  )
}

export default Form
