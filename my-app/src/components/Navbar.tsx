const Navbar : React.FC = () => {
    return (
        <nav className = "navbar relative z-1">
            <ul className="flex justify-end font-bold text-black text-[25px] pt-7 gap-6">
                <li>
                    <div className = "item">
                        <a href="#" className="px-4 py-2">Work Experiences</a>
                    </div>
                </li>
                <li>
                    <div className = "item">
                        <a href="#" className="px-4 py-2">Skills</a>
                    </div>
                </li>
                <li>
                    <div className = "item">
                        <a href="#" className="px-4 py-2">Projects</a>
                    </div>
                </li>
                <li>
                    <div className = "item">
                        <a href="#" className="px-4 py-2">Contact me</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar