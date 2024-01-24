
function Navlink({children, active,onClick}) {
  return (
    <div className={`cursor-pointer  font-bold hover:text-black uppercase ${active ? 'text-black':'text-slate-600 '} `} onClick={onClick} >
        {children}
      </div>
  )
}

export default Navlink