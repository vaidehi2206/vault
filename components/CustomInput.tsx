import React from 'react';
import { FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { Control, FieldPath, Form } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col '>
                        <Input 
                            placeholder={placeholder}
                            className='input-class'
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                        />
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    );
}

export default CustomInput;
