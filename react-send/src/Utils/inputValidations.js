/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
    name: 'name',
    label: 'FullName',
    type: 'text',
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
      required: {
        value: true,
        message: 'Please fill in the name',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
      required: {
        value: true,
        message: 'Please fill in the password',
      },
      minLength: {
        value: 6,
        message: 'Please fill 6 character password',
      },
    },
  }
  
  export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a phone number',
    validation: {
      required: {
        value: true,
        message: 'Please fill in the Phone Number',
      },
      minLength: {
        value: 10,
        message: 'Please fill in 10 characters of Phonenumber',
      },
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a email address',
    validation: {
      required: {
        value: true,
        message: 'Please fill in the Email',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
    },
  }
  