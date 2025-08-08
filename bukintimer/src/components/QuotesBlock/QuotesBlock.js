import './quotesblock.css'
import avatar from './gena_1.png'
export default function QuotesBlock() {

    return (
        <div className="quotes-block">
        <div className="quotes-block__speech-bubble">
            <label className="quotes-block__label-day">Day of week</label>
            <label className="quotes-block__label-quote">
            Quotes
            </label>
        </div>
        <img src={avatar} className="quotes-block__avatar" alt="avatar" />
        </div>
    );
}