export interface touched {
  TOUCHED_OK: string
  NOT_TOUCHED: string
  TOUCHED_WITH_ERROR: string
}

const TOUCHED_STATES: touched = {
  TOUCHED_OK: 'TOUCHED',
  NOT_TOUCHED: 'NOT_TOUCHED',
  TOUCHED_WITH_ERROR: 'TOUCHED_WITH_ERROR'
}

export { TOUCHED_STATES }
