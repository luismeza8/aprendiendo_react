import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  isLoading?: boolean;
}

function Boton({children, onClick: fun, isLoading = false}: Props) {
  console.log(isLoading)

  return (
    <>
      <button 
        onClick={fun} 
        type="button" 
        disabled={isLoading}
        className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}
      >
        {isLoading ? 'Cargando...' : children}
      </button>
    </>
  )
}

export default Boton;
