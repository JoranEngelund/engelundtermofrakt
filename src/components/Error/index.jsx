import * as s from "./styled";

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
    <s.ErrorContainer>
      <h1>Oups :( </h1>
      <s.ErrorMessage>
        Det ser ut som det er noe rusk i maskineriet
      </s.ErrorMessage>
      <s.ErrorMessage>
        Prøv gjerne ved å laste inn på nytt, eller prøv igjen senere
      </s.ErrorMessage>
      <div>
        <s.ReloadButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Last inn på nytt
        </s.ReloadButton>
      </div>
    </s.ErrorContainer>
  );
}
