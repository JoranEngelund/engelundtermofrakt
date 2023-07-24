/**
 * Renders a Google Map embedded in an iframe.
 * @component
 * @returns {JSX.Element} A React element representing the GoogleMap component.
 */
const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5968.014709669978!2d10.730227761985947!3d59.583752378294676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46415005e7354789%3A0xb66e50a5694cb786!2sEngelund%20Termofrakt%20AS!5e1!3m2!1sno!2sno!4v1690015981710!5m2!1sno!2sno"
      width="800"
      height="300"
    ></iframe>
  );
};

export default GoogleMap;
