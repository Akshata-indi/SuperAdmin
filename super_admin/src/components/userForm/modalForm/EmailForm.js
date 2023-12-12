import React from 'react'
import Input from '../../../ui-configs/input/Input'
import Example from '../../../ui-configs/input/Example'
import Button from '../../../ui-configs/Buttons/Button'
import { Button1 } from '../../../pages/userContent/UserConfig'

const EmailForm = () => {
  return (
    <div>
        <form className="bg-white border h-[72vh] w-full  my-10 border-gray-500  rounded">
                      <Input inputConfigs={Example} />
                        <Button configs={Button1} /> 

                        
                            </form>

    </div>
  )
}

export default EmailForm