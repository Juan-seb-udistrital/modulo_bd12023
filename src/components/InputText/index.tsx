const InputText = ({ span, name, value, handleChange }: { span: string, name: string, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): JSX.Element => {
  return (
    <section className='w-full mt-4'>
      <label>
        <span className='font-semibold'>
          {span}
        </span>
        <input
          type='text'
          name={name}
          value={value}
          className='w-full px-1 py-1 mt-1 outline-none border border-blue-400 focus:ring-2 focus:ring-blue-400 rounded-md'
          onChange={handleChange}
        />
      </label>
    </section>
  )
}

export default InputText
