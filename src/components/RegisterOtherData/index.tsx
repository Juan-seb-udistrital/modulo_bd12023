import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { INPUT_NAMES } from '@/helpers/input_names'
import InputText from '../InputText'

const RegisterOtherDate = ({ state, dispatch }) => {
  const { values, errors, touched } = state

  const dispatchReducer = (name, value) => {
    if (name === INPUT_NAMES.NUMBER_DOCUMENT) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_NUMBER_DOCUMENT, payload: value })
    }
    if (name === INPUT_NAMES.EMAIL) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_EMAIL, payload: value })
    }
    if (name === INPUT_NAMES.INSTITUTIONAL_EMAIL) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_INSTITUTIONAL_EMAIL, payload: value })
    }
    if (name === INPUT_NAMES.PHONE) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_PHONE, payload: value })
    }
    if (name === INPUT_NAMES.INSTRUMENT) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_INSTRUMENT, payload: value })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatchReducer(name, value)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    dispatchReducer(name, value)
  }

  return (
    <div className='flex flex-col w-full sm:w-[400px] md:w-[350px] px-2 py-4 md:pl-4 md:pb-0'>
      <InputText
        span='Numero de documento:'
        name={INPUT_NAMES.NUMBER_DOCUMENT}
        value={values.number_document}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.number_document}
        touched={touched.number_document}
      />
      <InputText
        span='Email:'
        name={INPUT_NAMES.EMAIL}
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
      <InputText
        span='Email institucional:'
        name={INPUT_NAMES.INSTITUTIONAL_EMAIL}
        value={values.institutional_email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.institutional_email}
        touched={touched.institutional_email}
      />
      <InputText
        span='Celular:'
        name={INPUT_NAMES.PHONE}
        value={values.phone}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.phone}
        touched={touched.phone}
      />
      <InputText
        span='Instrumento musical:'
        name={INPUT_NAMES.INSTRUMENT}
        value={values.instrument}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.instrument}
        touched={touched.instrument}
      />
    </div>
  )
}

export default RegisterOtherDate
