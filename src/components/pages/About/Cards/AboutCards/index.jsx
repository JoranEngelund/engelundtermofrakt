import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import * as s from "./styled";

/**
 * Fetches timeline data from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of timeline data (posts).
 * @throws {Error} If there's an error fetching the data.
 */
const yourApiCall = () => {
  return fetch(
    `https://api.termofrakt.no/wp-json/wp/v2/posts?categories=9&_embed`
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching timeline data:", error);
      return [];
    });
};

/**
 * A component that renders a timeline with posts fetched from an API.
 * @param {Object} props - The component props.
 * @param {Function} props.setObserver - A function to set up the timeline observer.
 * @param {Function} props.callback - A callback function to execute when a step is completed.
 * @param {Array} props.timelineData - An array of timeline data (posts) fetched from the API.
 * @returns {JSX.Element} A React element representing the timeline with posts.
 */
const Timeline = ({ setObserver, callback, timelineData }) => {
  const [messages, setMessages] = useState([]);

  const timelineRefs = useRef([]);
  const circleRefs = useRef([]); // Define circleRefs

  const someCallback = (index) => {
    const updatedMessages = messages.map((message, i) =>
      i === index ? `Step ${index + 1}` : message
    );
    setMessages(updatedMessages);
    callback();
  };

  useEffect(() => {
    setMessages(new Array(timelineData.length).fill(""));
    timelineRefs.current = timelineRefs.current.slice(0, timelineData.length);
    circleRefs.current = circleRefs.current.slice(0, timelineData.length); // Initialize circleRefs

    timelineData.forEach((step, index) => {
      setObserver(timelineRefs.current[index], () => someCallback(index));
    });
  }, [timelineData]);

  return (
    <div className="wrapper">
      {timelineData.map((post, index) => (
        <React.Fragment key={post.id}>
          <div
            id={`timeline${index + 1}`}
            ref={(ref) => (timelineRefs.current[index] = ref)}
            className="timeline"
          />
          <s.CardWrapper className="circleWrapper">
            <s.Card className="post">
              <s.CardImage
                src={post._embedded?.["wp:featuredmedia"][0].source_url}
              />
              <s.CardContent>
                <s.CardTitle>{post.title.rendered}</s.CardTitle>
                <s.CardParagraph
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </s.CardContent>
            </s.Card>
          </s.CardWrapper>
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * A functional component that displays a timeline with posts.
 * @returns {JSX.Element} A React element representing the AboutCards component.
 */
export default function AboutCards() {
  const [message, setMessage] = useState("");
  const [timelineData, setTimelineData] = useState([]);

  const onCallback = () => {};

  useEffect(() => {
    // Fetch timeline data from the API
    yourApiCall().then((data) => setTimelineData(data));
  }, []);

  return (
    <div className="App">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#2b2070"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
            timelineData={timelineData}
          />
        )}
      />
      <div className="stub2"></div>
    </div>
  );
}
