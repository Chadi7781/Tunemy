

import React from 'react'

const Button = (props) => {
  return (<>
  <a href="/authentification/signin" class="inline-flex items-center px-6 py-2 ml-4 no-underline   text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
{props.children}
</a>

  </>

  )
}

export default Button