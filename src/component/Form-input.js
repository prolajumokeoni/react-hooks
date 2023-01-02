const FormInput = ({ label, ...otherprops }) => {
	return (
		<div>
			<label>
				{label}
      </label>
			<input {...otherprops} />
		</div>
	)
}

export default FormInput; 