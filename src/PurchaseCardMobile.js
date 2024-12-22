import './PurchaseCardMobile.css'

function PurchaseCardMobile({purchase}) {
    let {id,
        location,
        purchaseDate,
        category,
        description,
        name, 
        price} = purchase;

    const date = new Date(purchaseDate);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;

    return (
        <div key={id} className="purchaseCardMobile">
            <div className="header">
                <div className="icon">
                    <img src={location} alt="logo"/>
                    <div>{name}</div>
                </div>

                <div className="price">${price}</div>

            </div>
            <div>Purchase Date {formattedDate}</div>
            <div>{category}</div>
            <div>{description}</div>
        </div>
    )
}

export default PurchaseCardMobile;