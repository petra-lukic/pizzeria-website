export default function MenuCard (props) {
    return (
        <div className="menu-card">
            <img src={`../images/${props.img}`} alt=""/>
            <h1>{props.name}</h1>
            <p>{props.topings}</p>
            <div className="prices">
                <span>Standard:<br/>{props.standard} KM</span>
                <span>Familly:<br/>{props.familly} KM</span>
            </div>
        </div>
    )
}