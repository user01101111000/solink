import { ILinkData } from "../../interfaces/services/auth/register";
import { motion } from "framer-motion";

const LinkContainer = (props: { data: ILinkData }) => {
  console.log(props.data);

  const links = props.data.fields.links.arrayValue.values.map((l: any, i) => (
    <motion.a
      key={i}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: "spring", delay: 0.1 * i }}
      whileHover={{ scale: 1.05 }}
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
          <img
            src={props.data.fields.avatar.stringValue}
            alt={props.data.fields.username.stringValue}
          />
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
