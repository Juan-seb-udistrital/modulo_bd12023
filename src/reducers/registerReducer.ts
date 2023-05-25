import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import { validateNames, validateDate, validateID } from '@/helpers/validations_form_register.js'

const now = new Date()
const day = ('0' + now.getDate()).slice(-2)
const month = ('0' + (now.getMonth() + 1)).slice(-2)
const today = now.getFullYear() + '-' + (month) + '-' + (day)

const initialStateRegister = {
  values: {
    name: '',
    last_name: '',
    birth_date: today,
    project: '',
    code: '',
    document: ''
  },
  errors: {},
  touched: {
    name: TOUCHED_STATES.NOT_TOUCHED,
    last_name: TOUCHED_STATES.NOT_TOUCHED,
    birth_date: TOUCHED_STATES.NOT_TOUCHED,
    project: TOUCHED_STATES.NOT_TOUCHED,
    code: TOUCHED_STATES.NOT_TOUCHED,
    document: TOUCHED_STATES.NOT_TOUCHED
  }
}

function registerReducer (state, action) {
  switch (action.type) {
    case (TYPES_REGISTER_FORM.CHANGE_NAME): {
      const value = action.payload

      const error = validateNames(value)

      if (!error && state.errors.name) {
        delete state.errors.name
      }

      return error
        ? {
            values: { ...state.values, name: value },
            errors: { ...state.errors, name: error },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, name: value },
            errors: { ...state.errors },
            touched: { ...state.touched, name: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_LAST_NAME): {
      const value = action.payload

      const error = validateNames(value)

      if (!error && state.errors.last_name) {
        delete state.errors.last_name
      }

      return error
        ? {
            values: { ...state.values, last_name: value },
            errors: { ...state.errors, last_name: error },
            touched: { ...state.touched, last_name: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, last_name: value },
            errors: { ...state.errors },
            touched: { ...state.touched, last_name: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_BIRTH_DATE): {
      const value = action.payload

      const error = validateDate(value)

      if (!error && state.errors.birth_date) {
        delete state.errors.birth_date
      }

      return error
        ? {
            values: { ...state.values, birth_date: value },
            errors: { ...state.errors, birth_date: error },
            touched: { ...state.touched, birth_date: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, birth_date: value },
            errors: { ...state.errors },
            touched: { ...state.touched, birth_date: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_CODE): {
      const value = action.payload

      const error = validateID(value)

      if (!error && state.errors.code) {
        delete state.errors.code
      }

      return error
        ? {
            values: { ...state.values, code: value },
            errors: { ...state.errors, code: error },
            touched: { ...state.touched, code: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, code: value },
            errors: { ...state.errors },
            touched: { ...state.touched, code: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_PROJECT): {
      const value = action.payload

      const error = value === '' ? 'Selecciona un proyecto curricular' : null

      if (!error && state.errors.project) {
        delete state.errors.project
      }

      return error
        ? {
            values: { ...state.values, project: value },
            errors: { ...state.errors, project: error },
            touched: { ...state.touched, project: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, project: value },
            errors: { ...state.errors },
            touched: { ...state.touched, project: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    case (TYPES_REGISTER_FORM.CHANGE_DOCUMENT): {
      const value = action.payload

      const error = value === '' ? 'Selecciona un tipo de documento' : null

      if (!error && state.errors.document) {
        delete state.errors.document
      }

      return error
        ? {
            values: { ...state.values, document: value },
            errors: { ...state.errors, document: error },
            touched: { ...state.touched, document: TOUCHED_STATES.TOUCHED_WITH_ERROR }
          }
        : {
            values: { ...state.values, document: value },
            errors: { ...state.errors },
            touched: { ...state.touched, document: TOUCHED_STATES.TOUCHED_OK }
          }
    }
    default:
      break
  }
}

export { initialStateRegister, registerReducer }
