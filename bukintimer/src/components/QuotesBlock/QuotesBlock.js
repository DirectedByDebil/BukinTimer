import './quotesblock.css'

export default function QuotesBlock({ person }) {

    return (
        <div className="quotes-block">
        <div className="quotes-block__speech-bubble">
            <label className="quotes-block__label-day">Day of week</label>
            <label className="quotes-block__label-quote">
            Quotes
            </label>
        </div>
        <div className='quotes-block__avatar-container'>
            <img src={person.img} className="quotes-block__avatar" alt={person.name} />
        </div>
        </div>
    );
}