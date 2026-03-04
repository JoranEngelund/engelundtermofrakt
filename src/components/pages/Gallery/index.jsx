import { useMemo, useState } from "react";
import Loader from "../../Loader";
import Error from "../../Error";
import useApi from "../../../hooks/useApi";
import useInView from "../../../hooks/useInView";
import * as s from "./styles";
import GalleryBanner from "../../Banner/galleryBanner";
const API_URL =
  "https://api.termofrakt.no/wp-json/wp/v2/posts?categories=11&_embed&order=asc&per_page=1";

function extractImages(html) {
  if (!html) return [];
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgs = Array.from(doc.querySelectorAll("img"));

  const seen = new Set();
  return imgs
    .map((img) => ({
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt") || "",
    }))
    .filter((x) => x.src && !seen.has(x.src) && seen.add(x.src));
}

function GalleryItem({ src, alt, index }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  const [loaded, setLoaded] = useState(false);

  const shouldReveal = inView && loaded;

  return (
    <s.Tile
      ref={ref}
      href={src}
      target="_blank"
      rel="noreferrer"
      aria-label={`Åpne bilde ${index + 1}`}
      style={{ "--d": `${index * 45}ms` }}
      data-reveal={shouldReveal ? "true" : "false"}
    >
      <s.Img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </s.Tile>
  );
}

export const Gallery = () => {
  const { data = [], isLoading, isError } = useApi(API_URL);

  const post = data?.[0];
  const images = useMemo(
    () => extractImages(post?.content?.rendered),
    [post?.content?.rendered],
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  if (!post) return <Error />;

  const title = post?.title?.rendered || "Galleri";

  return (
    <>
      <GalleryBanner />
      <s.Section>
        {images.length === 0 ? (
          <s.Empty>Ingen bilder funnet i innlegget.</s.Empty>
        ) : (
          <s.Grid>
            {images.map((img, i) => (
              <GalleryItem
                key={img.src}
                src={img.src}
                alt={img.alt || title}
                index={i}
              />
            ))}
          </s.Grid>
        )}
      </s.Section>
    </>
  );
};
