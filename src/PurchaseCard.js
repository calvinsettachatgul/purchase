
import './PurchaseCard.css'

function PurchaseCard({purchase}) {
    let {id,
        location,
        purchaseDate,
        category,
        description,
        name, 
        price} = purchase;
    
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let categoryColor = colors[Math.floor(Math.random() * colors.length)]


    const date = new Date(purchaseDate);

    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;


    return (<tr key={id} className="purchaseCard">
                <td>
                    <div>{name}</div>
                </td>
                <td> 
                    <img src={location} />
                </td>
                <td>
                    <div>{formattedDate}</div>
                </td>
                <td>
                    <div style={{ color: `${categoryColor}`, border:`1px ${categoryColor} solid`}} className="category">{category}</div>
                </td>
                <td>
                    <div>{description}</div>
                </td>
                <td>
                    <div>${price}</div>
                </td>
        </tr>
    )
};

export default PurchaseCard;