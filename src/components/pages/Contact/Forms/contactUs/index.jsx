import { useForm, Controller } from "react-hook-form";
import useSendForm from "../../../../../hooks/useSendForm";
import * as s from "../styled";
import { FormLoader } from "../../../../Loader";
import { useEffect, useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * ContactUs component represents a form for users to submit their contact information and messages.
 *
 * @component
 * @example
 * // Usage inside a parent component
 * import ContactUs from './ContactUs';
 * // ...
 * <ContactUs />
 *
 * @returns {JSX.Element} Rendered React component
 */
const ContactUs = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { sendFormData, isLoading, isError, isSuccess } = useSendForm(
    import.meta.env.VITE_CONTACT_FORM
  );

  const [challengeType, setChallengeType] = useState("math");
  const [challenge, setChallenge] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [isValid, setIsValid] = useState(false);
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
    "Magenta",
    "Teal",
    "Maroon",
    "Gold",
    "Silver",
    "Indigo",
  ];

  const generateMathChallenge = () => {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const challengeString = `${number1} ${operator} ${number2}`;
    const expectedAnswer = eval(challengeString);
    setChallenge(challengeString);
    sessionStorage.setItem("captchaAnswer", expectedAnswer);
  };

  const generateLogicPuzzle = () => {
    const correctColor = colors[Math.floor(Math.random() * colors.length)];
    const challengeString = `Write in ${correctColor} color`;
    setChallenge(challengeString);
    sessionStorage.setItem("captchaAnswer", correctColor);
  };

  const generateChallenge = () => {
    const randomType = Math.random() < 0.5 ? "math" : "logic";
    setChallengeType(randomType);
    if (randomType === "math") {
      generateMathChallenge();
    } else {
      generateLogicPuzzle();
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
      setSubmitSuccess(true);
      reset();
    }
  }, [isSuccess]);

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (isValid) {
      sendFormData(formData);
    }
  };
  return (
    <>
      <h4>Noe du lurer på?</h4>
      <hr />
      <s.InfoContainer>
        <s.AnimatedPara>
          Send oss gjerne en melding med kontaktskjemaet under. Vi svarer innen
          kort tid
        </s.AnimatedPara>
        <s.TranslationParagraph>
          * - Påkrevd felt (Required field)
        </s.TranslationParagraph>
        <hr />
      </s.InfoContainer>

      <s.Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <s.Label htmlFor="your-name">
          Navn <i>(Name)</i> *
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
                placeholder="Ditt navn"
              />
              {errors["your-name"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn navnet ditt (Please fill in your name)
                </s.ErrorMessage>
              )}
              {errors["your-name"]?.message && (
                <p role="alert">{errors["your-name"]?.message}</p>
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
              message: "Ugyldig Epost format (Invalid email address)",
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
                placeholder="Din E-post"
              />
              {errors["your-email"]?.type === "required" && (
                <s.ErrorMessage role="alert">
                  Vennligst fyll inn din e-post adresse (Please fill in your
                  e-mail)
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
        <s.Label htmlFor="your-email">Telefonnummer (phone number) </s.Label>
        <Controller
          name="tel-991"
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value:
                /^(?:\+\d{1,3})?(?:[\s.-]?\(?\d{3}\)?[\s.-]?)?\d{3,4}[\s.-]?\d{4}$/,
              message:
                "Ugyldig telefonnummber format (Invalid phone number format)",
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

              {errors["tel-991"]?.message && (
                <s.ErrorMessage role="alert">
                  {errors["tel-991"]?.message}
                </s.ErrorMessage>
              )}
            </>
          )}
        />
        <hr />
        <s.Label htmlFor="your-message">Melding *</s.Label>
        <Controller
          name="your-message"
          control={control}
          defaultValue=""
          rules={{
            required: "Melding er påkrevd (Message is required)",
            minLength: {
              value: 10,
              message:
                "Minimum 10 tegn (Message can't be shorter than 10 characters)",
            },
            maxLength: {
              value: 1000,
              message:
                "Maks 1000 tegn (Message must be at most 1000 characters)",
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
        <s.ChallengeContainer>
          <s.Label>{challenge} *</s.Label>
          <div>
            <s.ChallengeInput
              type="text"
              value={userResponse}
              onChange={handleUserResponseChange}
              placeholder="Answer"
            />
          </div>
          {isValid ? <s.StyledCorrectIcon icon={faCircleCheck} /> : null}
          <s.ChallengeButtonContainer>
            <s.ChallengeButton onClick={generateChallenge}>
              Generate Challenge
            </s.ChallengeButton>
          </s.ChallengeButtonContainer>
        </s.ChallengeContainer>
        <hr />
        <s.ButtonContainer>
          <s.Button type="submit">
            {isLoading ? <FormLoader /> : "Kontakt oss"}
          </s.Button>
        </s.ButtonContainer>
        {isError ? (
          <s.ErrorMessage>
            Beklager, det ser ut til at det har oppstått en feil med
            kontaktskjemaet. Vennligst prøv igjen eller ved en senere anledning.
            Vi beklager ulempen.
          </s.ErrorMessage>
        ) : (
          ""
        )}
        {submitSuccess ? (
          <s.SuccessContainer>
            <s.StyledFontAwesomeIcon icon={faCircleCheck} />
            <p>Forespørselen din ble sendt, vi vil svare deg innen kort tid.</p>
            <s.TranslationParagraph>
              Your request was sent. We'll reach out as soon as possible
            </s.TranslationParagraph>
          </s.SuccessContainer>
        ) : (
          ""
        )}
      </s.Form>
    </>
  );
};

export default ContactUs;
