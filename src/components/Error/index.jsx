/**
 * Error Component displays an error message when content fails to load.
 *
 * This component is used to show an error message when there is an issue with loading
 * the content. It is typically used to notify users that something went wrong and
 * suggests trying again.
 *
 * @returns {JSX.Element} Rendered JSX Element containing the error message.
 */
export default function Error() {
  return (
    <p>
      Det ser ut som noe galt skjedde mens innholdet ble lastet inn. Prøv gjerne
      igjen
    </p>
  );
}
