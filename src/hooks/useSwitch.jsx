import { useState } from "react";

/**
 * Custom hook for handling form visibility toggling.
 *
 * @returns {{
 *   showContactForm: boolean,
 *   showJobForm: boolean,
 *   handleShowContact: () => void,
 *   handleShowJob: () => void
 * }} Object containing state variables and functions for form visibility toggling.
 * @example
 * // Usage inside a component
 * import useSwitch from './useSwitch';
 * // ...
 * const { showContactForm, showJobForm, handleShowContact, handleShowJob } = useSwitch();
 */
const useSwitch = () => {
  const [showContactForm, setShowContactForm] = useState(true);
  const [showJobForm, setShowJobForm] = useState(false);

  const handleShowContact = () => {
    setShowContactForm(true);
    setShowJobForm(false);
  };

  const handleShowJob = () => {
    setShowContactForm(false);
    setShowJobForm(true);
  };

  return { showContactForm, showJobForm, handleShowContact, handleShowJob };
};

export default useSwitch;
