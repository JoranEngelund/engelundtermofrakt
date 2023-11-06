import { useForm, Controller } from "react-hook-form";
import * as s from "../styled";
import useSendForm from "../../../../../hooks/useSendForm";
import { useState, useEffect } from "react";
import { FormLoader } from "../../../../Loader";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * JobForm component represents a form for users to submit job applications along with their details and attachments.
 *
 * @component
 * @example
 * // Usage inside a parent component
 * import JobForm from './JobForm';
 * // ...
 * <JobForm />
 *
 * @returns {JSX.Element} Rendered React component
 */
const JobForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { sendFormData, isLoading, isError, isSuccess } = useSendForm(
    import.meta.env.VITE_JOB_FORM
  );

  const [selectedCV, setSelectedCV] = useState(null);
  const [selectedApplicationFile, setSelectedApplicationFile] = useState(null);

  const [challengeType, setChallengeType] = useState("math");
  const [challenge, setChallenge] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [isValid, setIsValid] = useState(false);

  const generateMathChallenge = () => {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const challengeString = `${number1} ${operator} ${number2}`;
    const expectedAnswer = eval(challengeString);
    setChallenge(challengeString);
    sessionStorage.setItem("captchaAnswer", expectedAnswer);
  };

  const generateChallenge = () => {
    const randomType = Math.random() < 0.5 ? "math" : "logic";
    setChallengeType(randomType);
    if (randomType === "math") {
      generateMathChallenge();
    } else {
      // You can add additional logic challenges here if needed
      generateMathChallenge(); // For simplicity, using math challenge again
    }
  };

  useEffect(() => {
    generateChallenge();
  }, []); // Run only once on component mount

  const handleUserResponseChange = (e) => {
    setUserResponse(e.target.value);
    const expectedAnswer = sessionStorage.getItem("captchaAnswer");
    setIsValid(e.target.value.toLowerCase() === expectedAnswer.toLowerCase());
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setIsSubmitted(true);
      reset();
    }
  }, [isSuccess]);

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    setSelectedCV(file);
  };

  const handleApplicationFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedApplicationFile(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (selectedCV) {
      formData.append(`cv`, selectedCV);
    }

    if (selectedApplicationFile) {
      formData.append(`application-file`, selectedApplicationFile);
    }

    if (isValid) {
      sendFormData(formData);
    }
  };

  return (
    <>
      <h4>Vil du jobbe hos oss?</h4>
      <hr />
      <s.InfoContainer>
        <s.InfoParagraph>
          Fortell oss mer om deg selv, så tar vi kontakt om det kommer noe som
          vi tror kan passe.
        </s.InfoParagraph>
        <s.TranslationParagraph>
          (Tell us more about yourself, and we'll contact you if there is a job
          opportunity we think might fit)
        </s.TranslationParagraph>
      </s.InfoContainer>
      <s.InfoContainer>
        <s.InfoParagraph>
          Legg inn din kontaktinformasjon under. Husk å last opp CV og
          eventuelle ytterligere filer.
        </s.InfoParagraph>
        <s.TranslationParagraph>
          (Write in your contact information below. Remember to upload your CV
          and potentially other files)
        </s.TranslationParagraph>
        <s.TranslationParagraph>
          * - Påkrevd felt (Required field)
        </s.TranslationParagraph>
      </s.InfoContainer>

      <hr />
      <s.Form id="job-form" onSubmit={handleSubmit(onSubmit)}>
        <s.Label htmlFor="your-name">
          Fornavn <i>(First Name)</i> *
        </s.Label>
        <Controller
          name="your-name"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: "Minst 2 tegn (Minimum 2 characters)",
            },
          }}
          render={({ field }) => (
            <>
              <s.Input
                {...field}
                type="text"
                name="your-name"
                placeholder="Ditt fornavn"
              />
              {errors["your-name"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn fornavnet ditt (Please fill in your first
                  name)
                </s.ErrorMessage>
              )}
              {errors["your-name"]?.message && (
                <s.ErrorMessage role="alert">
                  {errors["your-name"]?.message}
                </s.ErrorMessage>
              )}
            </>
          )}
        />
        <hr />
        <s.Label htmlFor="your-lastname">
          Etternavn <i>(Last Name)</i> *
        </s.Label>
        <Controller
          name="your-lastname"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: "Minst 2 tegn (Minimum 2 characters)",
            },
          }}
          render={({ field }) => (
            <>
              <s.Input
                {...field}
                type="text"
                name="your-lastname"
                placeholder="Ditt etternavn"
              />
              {errors["your-lastname"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn etternavnet ditt (Please fill in your last
                  name)
                </s.ErrorMessage>
              )}
              {errors["your-lastname"]?.message && (
                <s.ErrorMessage role="alert">
                  {errors["your-lastname"]?.message}
                </s.ErrorMessage>
              )}
            </>
          )}
        />
        <hr />
        <s.Label htmlFor="your-email">E-post *</s.Label>
        <Controller
          name="your-email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ugyldig e-post format (Invalid e-mail address)",
            },
            minLength: {
              value: 2,
              message: "Minst 2 tegn (Minimum 2 characters)",
            },
          }}
          render={({ field }) => (
            <>
              <s.Input
                {...field}
                type="email"
                name="your-email"
                placeholder="Din e-post"
              />
              {errors["your-email"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn din E-post adresse (Please fill in your
                  Email)
                </s.ErrorMessage>
              )}

              {errors["your-name"]?.message && (
                <s.ErrorMessage role="alert">
                  {errors["your-name"]?.message}
                </s.ErrorMessage>
              )}
            </>
          )}
        />
        <hr />
        <s.Label htmlFor="your-email">
          Telefonnummer <i>(phone number)</i> *
        </s.Label>
        <Controller
          name="tel-991"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value:
                /^(?:\+\d{1,3})?(?:[\s.-]?\(?\d{3}\)?[\s.-]?)?\d{3,4}[\s.-]?\d{4}$/,
              message:
                "Ugyldig telefonnummer format (Invalid phone number format)",
            },
            minLength: {
              value: 8,
              message: "Minst 8 tall (Minimum 8 digits)",
            },
          }}
          render={({ field }) => (
            <>
              <s.Input
                {...field}
                type="tel"
                name="tel-991"
                placeholder="Ditt telefonnummer"
              />
              {errors["tel-991"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn telefonnummeret ditt (Please fill in your
                  phone number)
                </s.ErrorMessage>
              )}
              {errors["tel-991"]?.message && (
                <p role="alert">{errors["tel-991"]?.message}</p>
              )}
            </>
          )}
        />
        <hr />
        <s.Label htmlFor="your-message">
          Søknadsbrev <i>(Application Letter) </i>*
        </s.Label>
        <s.InfoParagraph>
          Om søknadsbrev blir lagt ved som filformat, kan du skrive det ned i
          dette feltet
        </s.InfoParagraph>
        <s.TranslationParagraph>
          (If you're uploading an application letter as an file, you can write
          it in this field)
        </s.TranslationParagraph>
        <Controller
          name="your-message"
          control={control}
          defaultValue=""
          rules={{
            required: "Søknadsbrev er påkrevd (Application letter is required)",
            minLength: {
              value: 10,
              message:
                "Minimum 10 tegn (Message can't be shorter than 10 characters)",
            },
            maxLength: {
              value: 1500,
              message:
                "Maks 1500 tegn (Message must be at most 1500 characters)",
            },
          }}
          render={({ field }) => (
            <>
              <s.MessageArea
                {...field}
                placeholder="Maks 1000 tegn (maximum 1000 characters)"
              />
              {errors["your-message"] && (
                <s.ErrorMessage role="alert">
                  {errors["your-message"].message}
                </s.ErrorMessage>
              )}
            </>
          )}
        />
        <hr />
        <s.FileWrapper>
          <s.FileInput>
            <s.Label htmlFor="cv">CV *</s.Label>
            <Controller
              name="cv"
              control={control}
              defaultValue=""
              rules={{
                required: "CV er påkrevd (CV is required)",
              }}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept=".pdf,.txt,.doc,.docx"
                    onChange={(e) => {
                      field.onChange(e);
                      handleCVChange(e);
                    }}
                  />
                  {errors.cv && (
                    <s.ErrorMessage role="alert">
                      {errors.cv.message}
                    </s.ErrorMessage>
                  )}
                </>
              )}
            />
            <label htmlFor="cv">* pdf, .txt, .doc, .docx (max 10mb)</label>
          </s.FileInput>
          <s.FileInput>
            <s.Label htmlFor="application-file">
              Vedlegg / Søknadsbrev{" "}
              <i>(Attachment files / Application letter)</i>
            </s.Label>
            <input
              name="application-file"
              type="file"
              accept=".pdf,.txt,.doc,.docx"
              onChange={handleApplicationFileChange}
            />
            {errors["application-file"] && (
              <p role="alert">{errors["application-file"].message}</p>
            )}
            <label htmlFor="application-letter">
              * pdf, .txt, .doc, .docx (max 10mb)
            </label>
          </s.FileInput>
        </s.FileWrapper>
        <hr />
        <s.ChallengeContainer>
          <s.Label>Security Question *</s.Label>

          <s.QuestionContainer>
            <p>{challenge}</p>
            <p>=</p>
            <s.ChallengeInput
              type="text"
              value={userResponse}
              onChange={handleUserResponseChange}
              placeholder="Answer"
            />
            {isValid ? <s.StyledCorrectIcon icon={faCircleCheck} /> : null}
          </s.QuestionContainer>
        </s.ChallengeContainer>
        <hr />
        <s.ButtonContainer>
          <s.Button type="submit">
            {isLoading ? <FormLoader /> : "Send inn søknad"}
          </s.Button>
        </s.ButtonContainer>
        {isError ? (
          <s.ErrorMessage>
            Beklager, det ser ut til at det har oppstått en feil med
            jobbsøknadsskjemaet. Vennligst prøv igjen eller ved en senere
            anledning. Vi beklager ulempen.
          </s.ErrorMessage>
        ) : (
          ""
        )}
        {isSubmitted ? (
          <s.SuccessContainer>
            <s.StyledFontAwesomeIcon icon={faCircleCheck} />
            <p>
              Søknaden din ble sendt. Vi tar kontakt om det kommer noe som vi
              tror kan passe.{" "}
            </p>
            <s.TranslationParagraph>
              Your application was sent. We'll reach out if there is a job
              opportunity we think might fit
            </s.TranslationParagraph>
          </s.SuccessContainer>
        ) : (
          ""
        )}
      </s.Form>
    </>
  );
};

export default JobForm;
