import { TOUCHED_STATES } from '@/helpers/touched_states'

const Select = ({ options, span, name, value, handleChange, handleBlur, error, touched }) => {
  return (
    <section className='relative w-full mt-4'>
      <label>
        <span className='font-semibold'>
          {span}
        </span>
        <select
          name={name}
          className='w-full px-1 py-1 mt-1 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value='' />
          {
            options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </label>
      {
        (error || touched === TOUCHED_STATES.TOUCHED_WITH_ERROR) && <p className='text-red-400 text-sm mt-1'>{error} ❌</p>
      }
    </section>
  )
}

export default Select
