import NavBar from 'components/NavBar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
