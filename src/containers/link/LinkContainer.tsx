import { useEffect, useState } from "react";
import { ILinkData } from "../../interfaces/services/auth/register";
import { motion } from "framer-motion";
import Skeleton from "../../components/ui/Skeleton/Skeleton";

const LinkContainer = (props: { data: ILinkData }) => {
  const [showImage, setShowImage] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();

    img.src = props.data.fields.avatar.stringValue;

    img.onload = () => {
      setShowImage(true);
    };
  }, []);

  const links = props.data.fields.links.arrayValue.values.map((l: any, i) => (
    <motion.a
      key={i}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: "spring", delay: 0.1 * i }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0 } }}
      href={l.mapValue.fields.url.stringValue}
      target="_blank"
    >
      {l.mapValue.fields.label.stringValue}
    </motion.a>
  ));

  return (
    <section className="link_container_wrapper">
      <div className="link_container">
        <figure>
          {showImage ? (
            <img
              src={props.data.fields.avatar.stringValue}
              alt={props.data.fields.username.stringValue}
            />
          ) : (
            <Skeleton width="7rem" height="7rem" borderRadius="50%" />
          )}
        </figure>

        <h1>{props.data.fields.fullName.stringValue}</h1>

        <h2>{props.data.fields.location.stringValue}</h2>

        <p>{props.data.fields.about.stringValue}</p>

        <ul>{links}</ul>
      </div>
    </section>
  );
};

export default LinkContainer;
