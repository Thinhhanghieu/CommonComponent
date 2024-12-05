// DynamicForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password' | 'select';
  options?: { value: string; label: string }[];
  validation?: any;
}

interface DynamicFormProps {
  formFields: FieldConfig[];
  onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formFields, onSubmit }) => {
  // Create validation schema from formFields
  const validationSchema = yup.object().shape(
    formFields.reduce((schema, field) => {
      if (field.validation) {
        schema[field.name] = field.validation;
      }
      return schema;
    }, {} as any)
  );

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const renderField = (field: FieldConfig) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'email':
      case 'password':
        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            defaultValue=""
            render={({ field: controllerField,  }) => (
              <TextField
                {...controllerField}
                type={field.type}
                label={field.label}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message?.toString()}
              />
            )}
          />
        );
      case 'select':
        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            defaultValue=""
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                select
                label={field.label}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message?.toString()}
              >
                {field.options?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => renderField(field))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
