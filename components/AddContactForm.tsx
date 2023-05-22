import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';


const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="vehicle_NumberPlate"
          name="firstName"
                   
        />

        {errors.firstName && (
          <FormError errorMessage=" required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="vehicle_Type"
          name="lastName"
         
        />
        {errors.lastName && <FormError errorMessage=" required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Bridge"
          name="email"
          
        />
        {errors.email && <FormError errorMessage="required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="vehicle_Toll"
          name="avatar"
          
        />
        {errors.avatar && <FormError errorMessage=" required" />}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
