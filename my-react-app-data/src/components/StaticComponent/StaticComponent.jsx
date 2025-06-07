const StaticComponent = () => {
    const items=["Manzana","banana", "cereza", "durazno", "frutilla"];
    return (
        <ul>
            {items.map((item, index) => 
                <li key={index}>{item}</li>)}
        </ul>)
}
export default StaticComponent;