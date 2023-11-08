import React from 'react'; // Import your configuration
import configForm from './configForm.json'; // Import JSON configuration file
import ButtonStyle from '../button/ButtonStyle.json'
import FormStyle from './FormStyle';
import TextStyle from './TextStyle';
import DateStyle from './DateStyle';

const Form = () => {

return (
	<form className={FormStyle.form}>
		{configForm.map((field, index) => (
		<div className="mb-4" key={index}>
	  <label className={FormStyle.label} htmlFor={field.label}>
			{field.label}
    </label>

			<input
				className={field.type === 'date'
					? DateStyle.input
				: field.type === 'text'
				?{TextStyle[configForm.css]}
				: FormStyle.input
				}

				type={field.type}
				id={field.label}
				placeholder={`Enter your ${field.label}`}
			/>

		   </div>
		))}
		<button className={ButtonStyle.primary} type="submit">
			Submit
		</button>
	
	</form>
	);
};

export default Form;