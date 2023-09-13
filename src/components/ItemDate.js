import './ItemDate.css';

function ItemDate(props) {

    const day = props.date.getDate() + 1;
    const month = props.date.toLocaleString('en-US', { month: 'long' }, { timeZone: 'UTC' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' }, { timeZone: 'UTC' });
    
    return (
        <div className='item-date'>
            <div className='item-date__month'>{month}</div>
            <div className='item-date__year'>{year}</div>
            <div className='item-date__day'>{day}</div>
        </div>
    );
};

export default ItemDate;