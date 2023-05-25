import { INPUT_NAMES } from '../../helpers/input_names'
import { TYPES_REGISTER_FORM } from '@/actions/register_actions'
import { TOUCHED_STATES } from '@/helpers/touched_states'
import InputText from '../InputText'
import Select from '../Select'

const optionsDocument = [
  { value: 'Cedula', label: 'Cedula' },
  { value: 'Contraseña', label: 'Contraseña' },
  { value: 'Tarjeta de identidad', label: 'Tarjeta de identidad' },
  { value: 'Cedula de extranjeria', label: 'Cedula de extranjeria' }
]

const projectOptions = [
  { value: 'Proyecto 1', label: 'Proyecto 1' },
  { value: 'Proyecto 2', label: 'Proyecto 2' },
  { value: 'Proyecto 3', label: 'Proyecto 3' },
  { value: 'Proyecto 4', label: 'Proyecto 4' }
]

const Register = ({ state, dispatch }) => {
  const { values, errors, touched } = state

  const dispatchReducer = (name, value) => {
    if (name === INPUT_NAMES.NAME) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_NAME, payload: value })
    }

    if (name === INPUT_NAMES.LAST_NAME) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_LAST_NAME, payload: value })
    }

    if (name === INPUT_NAMES.BIRTH_DATE) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_BIRTH_DATE, payload: value })
    }

    if (name === INPUT_NAMES.PROJECT) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_PROJECT, payload: value })
    }

    if (name === INPUT_NAMES.CODE) {
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_CODE, payload: value })
    }
    if (name === INPUT_NAMES.DOCUMENT) {
      console.log('name')
      dispatch({ type: TYPES_REGISTER_FORM.CHANGE_DOCUMENT, payload: value })
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
    <div
      className='flex flex-col w-full sm:w-[400px] md:w-[350px] px-2 md:py-4 md:pr-4 pt-0'
    >
      <InputText
        span='Nombre:'
        name={INPUT_NAMES.NAME}
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />
      <InputText
        span='Apellido:'
        name={INPUT_NAMES.LAST_NAME}
        value={values.last_name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.last_name}
        touched={touched.last_name}
      />
      <section className='w-full mt-4'>
        <label>
          <span className='font-semibold'>
            Fecha de nacimiento:
          </span>
          <input
            type='date'
            name={INPUT_NAMES.BIRTH_DATE}
            value={values.birth_date}
            className='w-full px-1 py-1 mt-1 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {
        (errors.birth_date || touched.birth_date === TOUCHED_STATES.TOUCHED_WITH_ERROR) && <p className='text-red-400 text-sm mt-1'>Ingresa una fecha valida ❌</p>
      }
      </section>
      <Select
        options={projectOptions}
        span='Proyecto:'
        name={INPUT_NAMES.PROJECT}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.project}
        touched={touched.project}
      />
      <InputText
        span='Codigo:'
        name={INPUT_NAMES.CODE}
        value={values.code}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.code}
        touched={touched.code}
      />
      <Select
        options={optionsDocument}
        span='Tipo de documento:'
        name={INPUT_NAMES.DOCUMENT}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.document}
        touched={touched.document}
      />
    </div>
  )
}

export default Register
