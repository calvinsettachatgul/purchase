import './PurchaseListMobile.css'
import PurchaseCardMobile from './PurchaseCardMobile';

let purchasesTest = [
    {
        "id": 1,
        "location": "https://picsum.photos/id/0/200",
        "purchaseDate": "2020-12-27T00:00:00.000Z",
        "category": "Food",
        "description": "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
        "price": 99882,
        "name": "auxiliary generating microchip"
    },
    {
        "id": 2,
        "location": "https://picsum.photos/id/1/200",
        "purchaseDate": "2020-12-28T00:00:00.000Z",
        "category": "Technology",
        "description": "I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
        "price": 69706,
        "name": "1080p backing up port"
    },
    {
        "id": 3,
        "location": "https://picsum.photos/id/2/200",
        "purchaseDate": "2020-12-29T00:00:00.000Z",
        "category": "Footwear",
        "description": "You can&#x27;t reboot the feed without transmitting the back-end SMS pixel!",
        "price": 8307,
        "name": "auxiliary generating panel"
    }
];

function PurchaseListMobile() {
    return (
        <div>
            {purchasesTest.map((purchase)=> {
                return <PurchaseCardMobile purchase={purchase} />
            })}

        </div>

    )
}

export default PurchaseListMobile;