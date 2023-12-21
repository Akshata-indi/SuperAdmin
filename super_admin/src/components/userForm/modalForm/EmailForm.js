import React from 'react'
import Input from '../../../ui-configs/input/Input'

// import Button from '../../../ui-configs/Buttons/Button'
import { Button1, inputs } from '../../../pages/userContent/UserConfig'
// import inputData from '../../../ui-configs/input/inputData.json'
import ButtonComponent from '../../../ui-configs/Buttons/ButtonComponent'
// import Example from '../../../pages/userContent/UserConfig'

const EmailForm = () => {
  return (
    <div>
        <form className="bg-white border h-[72vh] w-full  my-10 border-gray-500  rounded">
                      <Input config={inputs} />
                      {/* <Input config={inputData}/> */}
                        {/* <ButtonComponent configs={Button1} />  */}

                        
                            </form>

    </div>
  )
}

export default EmailForm