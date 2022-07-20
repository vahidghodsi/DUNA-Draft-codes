const inputValidation = (inputValue, validation) => {
  //   console.log("[inputValidation]: ", inputValue);
  //   console.log("[inputValidation]: ", validation);
  let isValid = true;
  let validationMes = [];

  if (!validation) {
    return true;
  }

  if (validation.required) {
    isValid = inputValue.trim() !== "" && isValid;
    if (!isValid) {
      validationMes.push("Input is required");
    }
  }

  if (validation.minLength) {
    isValid = inputValue.length >= validation.minLength && isValid;
    if (!isValid) {
      validationMes.push(`must have at least ${validation.minLength} characters`);
    }
  }

  if (validation.maxLength) {
    isValid = inputValue.length <= validation.maxLength && isValid;
    if (!isValid) {
      validationMes.push(`cannot have more than ${validation.minLength} characters`);
    }
  }

  if (validation.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(inputValue) && isValid;
    if (!isValid) {
      validationMes.push(`Please enter a valid email address`);
    }
  }

  if (validation.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(inputValue) && isValid;
    if (!isValid) {
      validationMes.push(`Must only contain numeric characters.`);
    }
  }

  // return isValid;
  return validationMes;
};

const isEmail = input => {
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return pattern.test(input);
};

export default inputValidation;

export { isEmail };
