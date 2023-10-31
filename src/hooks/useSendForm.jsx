import { useState } from "react";

/**
 * Custom hook for sending form data to a specified URL via a POST request.
 *
 * @param {string} url - The URL where the form data will be sent.
 * @returns {{
 *   sendFormData: (formData: FormData) => Promise<void>,
 *   isError: boolean,
 *   isLoading: boolean,
 *   isSuccess: boolean
 * }} Object containing a function to send form data, and loading, error, and success states.
 * @example
 * // Usage inside a component
 * import useSendForm from './useSendForm';
 * // ...
 * const { sendFormData, isError, isLoading, isSuccess } = useSendForm("https://example.com/api/submit");
 */
const useSendForm = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  async function sendFormData(formData) {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        redirect: "follow",
      });
      const json = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      }
      console.log(json);
    } catch (error) {
      setIsError(true);
      console.log(error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { sendFormData, isError, isLoading, isSuccess };
};

export default useSendForm;
