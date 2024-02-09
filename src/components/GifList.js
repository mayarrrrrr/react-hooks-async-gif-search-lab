// let API_key = AWjiRqYQ2dNFq44XWrNWWE2yaCbf9DfG;


function GiftList({ image, name }) {
    return <li>
        <h2>{name}</h2>
        <img src={image} alt={name} />
    </li>
}
export default GiftList