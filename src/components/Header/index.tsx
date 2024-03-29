import ToggleTheme from "../ToggleTheme";

const Header = ({ user }: {user: string}) => {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">
        { user !== 'User' ? `Olá, ${user}` : 'Bem-vindo' }
      </span>
      <h1 className="text-gray-100 text-xl">
        Newsletter
      </h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;