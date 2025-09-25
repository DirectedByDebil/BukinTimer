import './quotesblock.css'

export default function QuotesBlock({ person, quote, onQuoteClick }) {

    return (
        <div className="quotes-block" onClick={onQuoteClick}>
        <div className="quotes-block__speech-bubble">
            <label className="quotes-block__label-day">{quote.topic}</label>
            <label className="quotes-block__label-quote">
            {quote.joke}
            </label>
        </div>
        <div className='quotes-block__avatar-container'>
            <img src={person.img} className="quotes-block__avatar" alt={person.name} />
        </div>
        </div>
    );
}