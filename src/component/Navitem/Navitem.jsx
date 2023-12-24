import './index.css'

const Navitem = ({ children }) => {
    return (
        <>
            <li className='nav-item '>
                {children}
            </li>

        </>
    )
}

const NavitemProfile = ({ children }) => {
    return (
        <>
            <li className='nav-item profile '>
                {children}
            </li>

        </>
    )
}

export default Navitem
export { NavitemProfile }