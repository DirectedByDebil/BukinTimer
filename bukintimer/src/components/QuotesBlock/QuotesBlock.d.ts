import { IPerson } from '../../quotesLogic/iperson'
import { IQuote } from '../../quotesLogic/quote'

export default function QuotesBlock({ person, quote, onQuoteClick }: {person: IPerson, quote: IQuote, onQuoteClick: () => void});