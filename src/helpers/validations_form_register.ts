const validateNames = (name: string): string | null => {
  let error: string | null = null
  const regex = /^[a-zA-Z ,.'-]+$/i

  //* If the length of the string is less than 4 or greatest than 30 or does not comply with the regex
  //* then generate the error
  if (name.length < 4 || name.length > 30 || !regex.test(name)) {
    error = 'Ingresa un nombre o apellido real'
  }

  return error
}

const validateID = (id: string): string | null => {
  let error: string | null = null
  const regex = /^((\d{11})|(\d{6}-\d{5}))?$/gm

  //* If the length of the string is less than 7 or greatest than 11 or does not comply with the regex
  //* then generate the error
  if (id.length < 7 || id.length > 11 || !regex.test(id)) {
    error = 'Ingresa un codigo estudiantil valido'
  }

  return error
}

const validateEmail = (email: string): string | null => {
  let error: string | null = null
  const regex = /^("(?:[!#-[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z^-\u{10FFFF}])*|\[[!-Z^-\u{10FFFF}]*\])$/u

  if (email.length < 7 || !regex.test(email)) {
    error = 'El email no es correcto'
  }

  return error
}

const validatePassword = (password: string): string | null => {
  let error: string | null = null
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

  if (!regex.test(password)) {
    error = {
      info: 'La contraseña debe tener las siguientes condiciones:',
      conditions: ['Longitud entre 6 a 16 digitos', 'Al menos un numero', 'Al menos un caracter especial']
    }
  }

  return error
}

const validatePhone = (phone: string): string | null => {
  let error: string | null = null
  const regex = /^[0-9]*$/

  if (phone.length < 7 || phone.length > 10 || !regex.test(phone)) {
    error = 'Ingresa un numero de telefono real'
  }

  return error
}

const validateInstrument = (instrument) => {
  let error
  const regex = /^[a-zA-Z ,.'-]+$/i

  if (instrument.length < 4 || instrument.length > 30 || !regex.test(instrument)) {
    error = 'Ingresa un instrumento real'
  }

  return error
}

const validateDate = (date) => {
  let error
  const year = parseInt(date.split('-')[0])

  if (year >= 2010) {
    error = 'Ingresa una fecha de nacimiento valida'
  }

  return error
}

export { validateNames, validateID, validateEmail, validatePassword, validatePhone, validateInstrument, validateDate }
