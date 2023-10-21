const CategoryIcon = ({ category }: { category: string }) => {
    return (
        <div>
            <img src={categoryIcons[category]} alt="categoryIcon" />
        </div>
    );
}

const categoryIcons: { [key: string]: string } = {
    mantimentos: '/icons/supermarket.svg',
    transporte: '/icons/transport.svg',
    moradia: '/icons/supermarket.svg',
    // utilities: '/icons/utilities.svg',
    // entertainment: '/icons/entertainment.svg',
    saude: '/icons/healthcare.svg',
    // education: '/icons/education.svg',
    // personal: '/icons/personal.svg',
    // other: '/icons/other.svg',
    viagem: '/icons/travel.svg',
    compras: '/icons/shopping.svg',
    credito: '/icons/credit_card.svg',
    lazer: '/icons/fastfood.svg',
    trabalho: '/icons/work.svg',
};

export default CategoryIcon;